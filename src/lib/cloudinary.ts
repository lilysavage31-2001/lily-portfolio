export interface CloudinaryMedia {
  public_id: string;
  secure_url: string;
  title: string;
  description: string;
  created_at: string;
  resource_type: 'image' | 'video';
}

export type CloudinaryImage = CloudinaryMedia;

interface CloudinarySearchResource {
  public_id: string;
  filename: string;
  display_name: string;
  secure_url: string;
  created_at: string;
  resource_type: string;
  context?: {
    caption?: string;
    alt?: string;
  };
}

function makeAuth(apiKey: string, apiSecret: string) {
  return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
}

function getEnv() {
  const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env.CLOUDINARY_API_KEY;
  const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;
  const folder = import.meta.env.CLOUDINARY_FOLDER;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }
  if (!folder) {
    throw new Error('Missing CLOUDINARY_FOLDER environment variable');
  }

  return { cloudName, apiKey, apiSecret, folder };
}

async function searchResources(
  cloudName: string,
  auth: string,
  folder: string,
  resourceType: 'image' | 'video'
): Promise<CloudinarySearchResource[]> {
  const params = new URLSearchParams({
    expression: `asset_folder=${folder} AND resource_type=${resourceType}`,
    max_results: '500',
    with_field: 'context',
  });
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?${params}`,
    { headers: { Authorization: auth } }
  );
  if (!response.ok) {
    throw new Error(`Cloudinary API error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return (data.resources ?? []) as CloudinarySearchResource[];
}

export async function fetchHeroImages(): Promise<CloudinaryMedia[]> {
  const { cloudName, apiKey, apiSecret } = getEnv();
  const auth = makeAuth(apiKey, apiSecret);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/hero?max_results=500&context=true`,
    { headers: { Authorization: auth } }
  );

  if (!response.ok) {
    throw new Error(`Cloudinary API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return (data.resources as CloudinaryResource[])
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
      title: r.context?.custom?.caption ?? '',
      description: r.context?.custom?.alt ?? '',
      created_at: r.created_at,
      resource_type: 'image' as const,
    }));
}

export async function fetchAboutPortrait(): Promise<CloudinaryMedia | null> {
  const { cloudName, apiKey, apiSecret } = getEnv();
  const auth = makeAuth(apiKey, apiSecret);

  const tagResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/about?max_results=1&context=true`,
    { headers: { Authorization: auth } }
  );

  if (tagResponse.ok) {
    const tagData = await tagResponse.json();
    if (tagData.resources?.length > 0) {
      const r = tagData.resources[0];
      return {
        public_id: r.public_id,
        secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
        title: r.context?.custom?.caption ?? '',
        description: r.context?.custom?.alt ?? '',
        created_at: r.created_at,
        resource_type: 'image',
      };
    }
  }

  const all = await fetchCloudinaryImages();
  return all[0] ?? null;
}

export async function fetchCloudinaryImages(): Promise<CloudinaryMedia[]> {
  const { cloudName, apiKey, apiSecret, folder } = getEnv();
  const resources = await searchResources(cloudName, makeAuth(apiKey, apiSecret), folder, 'image');

  return resources
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
      title: r.context?.caption ?? '',
      description: r.context?.alt ?? '',
      created_at: r.created_at,
      resource_type: 'image' as const,
    }));
}

export async function fetchCloudinaryVideos(): Promise<CloudinaryMedia[]> {
  const { cloudName, apiKey, apiSecret, folder } = getEnv();
  const resources = await searchResources(cloudName, makeAuth(apiKey, apiSecret), folder, 'video');

  return resources
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      title: r.context?.caption ?? '',
      description: r.context?.alt ?? '',
      created_at: r.created_at,
      resource_type: 'video' as const,
    }));
}

export interface ProjectMedia extends CloudinaryMedia {
  projectNumber: number;
  imageNumber: number;
  label: string;
}

export async function fetchPortfolioProjects(): Promise<ProjectMedia[]> {
  const { cloudName, apiKey, apiSecret, folder } = getEnv();
  const auth = makeAuth(apiKey, apiSecret);

  const foldersResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/folders/${folder}`,
    { headers: { Authorization: auth } }
  );
  if (!foldersResponse.ok) {
    throw new Error(`Cloudinary Folders API error: ${foldersResponse.status}`);
  }

  const foldersData = await foldersResponse.json();
  const subfolders: Array<{ name: string; path: string }> = foldersData.folders ?? [];

  const sorted = subfolders.sort((a, b) => {
    const numA = parseInt(a.name);
    const numB = parseInt(b.name);
    return (!isNaN(numA) && !isNaN(numB)) ? numA - numB : a.name.localeCompare(b.name);
  });

  const projectResults = await Promise.all(
    sorted.map(async (subfolder, idx) => {
      const projectNumber = parseInt(subfolder.name) || idx + 1;
      const resources = await searchResources(cloudName, auth, subfolder.path, 'image');

      return resources
        .sort((a, b) => a.display_name.localeCompare(b.display_name))
        .map((r, imageIdx) => ({
          public_id: r.public_id,
          secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
          title: r.context?.caption ?? '',
          description: r.context?.alt ?? '',
          created_at: r.created_at,
          resource_type: 'image' as const,
          projectNumber,
          imageNumber: imageIdx + 1,
          label: `${projectNumber}.${imageIdx + 1}`,
        }));
    })
  );

  return projectResults.flat();
}

export async function fetchCloudinaryMedia(): Promise<CloudinaryMedia[]> {
  const [images, videos] = await Promise.all([
    fetchCloudinaryImages(),
    fetchCloudinaryVideos(),
  ]);

  return [...images, ...videos].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export interface CloudinaryMedia {
  public_id: string;
  secure_url: string;
  title: string;
  description: string;
  created_at: string;
  resource_type: 'image' | 'video';
}

export type CloudinaryImage = CloudinaryMedia;

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  created_at: string;
  context?: {
    custom?: {
      caption?: string;
      alt?: string;
    };
  };
}

function makeAuth(apiKey: string, apiSecret: string) {
  return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
}

async function fetchResources(
  cloudName: string,
  auth: string,
  resourceType: 'image' | 'video'
): Promise<CloudinaryResource[]> {
  const params = new URLSearchParams({ context: 'true', max_results: '500', prefix: 'portfolio/' });
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/${resourceType}?${params}`,
    { headers: { Authorization: auth } }
  );
  if (!response.ok) {
    throw new Error(`Cloudinary API error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.resources as CloudinaryResource[];
}

export async function fetchAboutPortrait(): Promise<CloudinaryMedia | null> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }

  const auth = makeAuth(apiKey, apiSecret);

  const tagResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/about?max_results=1&context=true`,
    { headers: { Authorization: auth } }
  );

  if (tagResponse.ok) {
    const tagData = await tagResponse.json();
    if (tagData.resources?.length > 0) {
      const r = tagData.resources[0] as CloudinaryResource;
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
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }

  const resources = await fetchResources(cloudName, makeAuth(apiKey, apiSecret), 'image');

  return resources
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
      title: r.context?.custom?.caption ?? '',
      description: r.context?.custom?.alt ?? '',
      created_at: r.created_at,
      resource_type: 'image' as const,
    }));
}

export async function fetchCloudinaryVideos(): Promise<CloudinaryMedia[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }

  const resources = await fetchResources(cloudName, makeAuth(apiKey, apiSecret), 'video');

  return resources
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      title: r.context?.custom?.caption ?? '',
      description: r.context?.custom?.alt ?? '',
      created_at: r.created_at,
      resource_type: 'video' as const,
    }));
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

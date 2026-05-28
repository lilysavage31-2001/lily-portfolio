export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  title: string;
  description: string;
  created_at: string;
}

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

export async function fetchAboutPortrait(): Promise<CloudinaryImage | null> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }

  const auth = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;

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
      };
    }
  }

  // Fall back to first image in library
  const all = await fetchCloudinaryImages();
  return all[0] ?? null;
}

export async function fetchCloudinaryImages(): Promise<CloudinaryImage[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary environment variables');
  }

  const params = new URLSearchParams({
    context: 'true',
    max_results: '500',
  });

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?${params}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Cloudinary API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return (data.resources as CloudinaryResource[])
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((r) => ({
      public_id: r.public_id,
      secure_url: r.secure_url.replace('/upload/', '/upload/q_auto/f_auto/'),
      title: r.context?.custom?.caption ?? '',
      description: r.context?.custom?.alt ?? '',
      created_at: r.created_at,
    }));
}

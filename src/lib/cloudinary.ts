import { loadEnv } from 'vite';

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

export async function fetchCloudinaryImages(): Promise<CloudinaryImage[]> {
  const env = loadEnv('', process.cwd(), '');
  const cloudName = env.CLOUDINARY_CLOUD_NAME;
  const apiKey = env.CLOUDINARY_API_KEY;
  const apiSecret = env.CLOUDINARY_API_SECRET;

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

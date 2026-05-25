import type { APIRoute } from 'astro';
import { fetchCloudinaryImages } from '../../lib/cloudinary';

export const GET: APIRoute = async () => {
  const images = await fetchCloudinaryImages();
  return new Response(JSON.stringify(images), {
    headers: { 'Content-Type': 'application/json' },
  });
};

import type { APIRoute } from 'astro';
import { fetchCloudinaryImages } from '../../lib/cloudinary';

export const GET: APIRoute = async () => {
  try {
    const images = await fetchCloudinaryImages();
    return new Response(JSON.stringify(images), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

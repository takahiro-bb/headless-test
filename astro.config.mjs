// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ★ここが重要！ /serverless を消す

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
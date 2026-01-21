// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ここが serverless になっていること

export default defineConfig({
  output: 'server', // 必ず 'server' に！
  adapter: vercel(),
});
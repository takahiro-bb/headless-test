// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // これが必要

export default defineConfig({
  output: 'server', // これを絶対に忘れないで！
  adapter: vercel(), // これが必要
});
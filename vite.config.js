import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solid({
      adapter: vercel(),
    }),
  ],
});

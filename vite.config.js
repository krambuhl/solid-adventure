import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import solidStyled from 'vite-plugin-solid-styled';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solid({
      adapter: vercel(),
    }),
    solidStyled({
      verbose: true,
      filter: {
        include: 'src/**/*.{ts,js,tsx,jsx}',
        exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
      },
    }),
  ],
});

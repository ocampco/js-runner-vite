/// <reference types='vitest' />
import { defineConfig } from 'vite';

const config = defineConfig({
  test: {
    globals: true,
  },
});

export default config;

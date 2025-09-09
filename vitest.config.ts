import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  plugins: [
    vue(),
    vueJsx({
      optimize: false,
      enableObjectSlots: false
    })
  ]
});

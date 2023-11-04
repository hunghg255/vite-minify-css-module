import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MinifyCssModule from '../src/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), MinifyCssModule()],
});

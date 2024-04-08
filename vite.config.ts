import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // @vitejs/plugin-react-swc를 import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

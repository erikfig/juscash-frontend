import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'VITE_', // Certifica-se de que as variáveis com prefixo VITE_ sejam carregadas
});

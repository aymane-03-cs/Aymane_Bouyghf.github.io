import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aymane-03-cs.github.io/', // Chemin de base pour un site personnel (username.github.io)
});

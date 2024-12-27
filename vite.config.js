import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Aymane_Bouyghf.github.io/Home', // Chemin de base pour un site personnel (username.github.io)
});

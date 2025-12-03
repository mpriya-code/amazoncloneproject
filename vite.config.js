import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'MY-REPO-NAME' with your actual repository name
const repoName = 'amazoncloneproject';

// https://vite.dev/config/
export default defineConfig({ 
  plugins: [react()],
  base: `/${repoName}/`,
})

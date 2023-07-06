import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://JuanBogliacino.github.io/app-clima/",
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      server: {
        host: '0.0.0.0',
        allowedHosts: ['all'],
      },
    }
  } else {
    return {
      plugins: [react()],
    }
  }
})

// export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//       define: {
//         plugins: [
//           react(),
//           viteStaticCopy({
//             targets: [
//               {
//                 src: 'src/assets/' + mode + '/*',
//                 dest: 'src/assets/' + mode,
//               }
//             ]
//           })
//         ],
//       }
//     }
//   }
// })
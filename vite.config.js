import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // Add any other HTML files here if needed
                biblioteca: resolve(__dirname, 'src/pages/biblioteca.html'),
                inicio_sesion: resolve(__dirname, 'src/pages/inicio-sesion.html'),
                aboutUs: resolve(__dirname, 'src/pages/about-us.html'),
                ubicacion: resolve(__dirname, 'src/pages/ubicacion.html'),
            }
        }
    }
}

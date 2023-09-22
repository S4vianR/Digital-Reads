import { createClient } from 'contentful'
import config from './config/config.js';

const spaceId = config.spaceId;
const accessToken = config.accessToken;

const useContentful = () => {

    const client = createClient({
        space: spaceId,
        accessToken: accessToken,
    });

    const getLibros = async () => {
        try {
            const response = await client.getEntries({
                content_type: "libro",
                select: "fields",
                order: "fields.idLibro",
            });

            /* return response.items; */
            const sanitizeBooks = response.items.map((libro) => {
                return {
                    idLibro: libro.fields?.idLibro,
                    titulo: libro.fields?.nombre,
                    autor: libro.fields?.autor,
                    descripcion: libro.fields?.url.fields.description,
                    portada: libro.fields?.portada.fields.file.url,
                    url: libro.fields?.url.fields.file.url,
                };
            });
            return sanitizeBooks;
        } catch (error) {
            console.log(`Error getting Entries: ${error}`);
        }
    };

    return { getLibros };
};

export default useContentful;
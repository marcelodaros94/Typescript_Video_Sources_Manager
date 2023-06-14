import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Layout from '../../Layout/Layout';
import { VideoTitleField } from './_VideoTitleField';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { VideosState } from '../../../redux/types';
import { resetForm } from '../../../redux/reducers';
import VideoUrlField from './_VideoUrlField';
import ImageUploadField from './_ImageUploadField';
import { VideoDescriptionField } from './_VideoDescriptionField';
import { VideoRatingField } from './_VideoRatingField';

export const NewVideo: FC = (): ReactElement => {
    
    const videoTitle = useSelector((state: VideosState) => state.uploadNewVideo.videoTitle);
    const videoDescription = useSelector((state: VideosState) => state.uploadNewVideo.videoDescription);
    const videoRating = useSelector((state: VideosState) => state.uploadNewVideo.videoRating);
    const videoUrls = useSelector((state: VideosState) => state.uploadNewVideo.videoUrls);
    const uploadedImage = useSelector((state: VideosState) => state.uploadNewVideo.uploadedImage);
    const dispatch = useDispatch();

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Realizar validaciones
        if (videoTitle.trim() === '') {
        console.log('El título no puede estar vacío');
        return;
        }

        const nonEmptyUrls = videoUrls.filter((url: string) => url.trim() !== '');
        if (nonEmptyUrls.length === 0) {
        console.log('Debe ingresar al menos una URL');
        return;
        }

        if (!uploadedImage) {
        console.log('Debe seleccionar una imagen');
        return;
        }

        // Crear objeto FormData para enviar los datos al endpoint de la API
        const formData = new FormData();
        formData.append('title', videoTitle);
        formData.append('description', videoDescription);
        formData.append('rating', String (videoRating));
        formData.append('type', 'M');
        formData.append('links', JSON.stringify(videoUrls.map((url) => ({ url }))));
        formData.append('image', uploadedImage);

        // Enviar la solicitud al endpoint de la API utilizando Axios
        axios
        .post(`${process.env.REACT_APP_API_URL}/video`, formData)
        .then((response) => {
            console.log('Solicitud enviada correctamente');
            console.log(response.data);
            setUploadedFiles(response.data.files);
        })
        .catch((error) => {
            console.error('Error al enviar la solicitud:', error);
        });
    };

    const handleReset = () => {
        dispatch(resetForm());
        setUploadedFiles([]);
    };
    return (
        <Layout>
            <Box
            display="flex" 
            flexDirection="column" 
            alignItems="flex-start" 
            width="100%" 
            px={4} my={6}
            >
                <Typography mb={2}>New Video</Typography>
                <Stack spacing={2}>                    
                    <form onSubmit={handleSubmit}>
                        {/* Componente VideoTitleField */}
                        <VideoTitleField />

                        {/* Componente VideoDescriptionField */}
                        <VideoDescriptionField />

                        {/* Componente VideoRatingField */}
                        <VideoRatingField />

                        {/* Componente VideoUrlField */}
                        <VideoUrlField />

                        {/* Componente ImageUploadField */}
                        <ImageUploadField />

                        {/* Botones para enviar y resetear el formulario */}
                        <Button type="submit" variant="contained" color="primary">
                        Enviar
                        </Button>
                        <Button variant="contained" onClick={handleReset}>
                        Reset
                        </Button>
                    </form>
                </Stack>
            </Box>
        </Layout>
    )
}
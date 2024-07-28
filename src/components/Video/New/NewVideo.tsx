import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack, Button, Paper } from '@mui/material';
import Layout from '../../Layout/Layout';
import { VideoTitleField } from './_VideoTitleField';
import VideoUrlField from './_VideoUrlField';
import ImageUploadField from './_ImageUploadField';
import { VideoDescriptionField } from './_VideoDescriptionField';
import { VideoRatingField } from './_VideoRatingField';
import videoService from '../../../services/video';
import VideoBrandField from './_VideoBrandField';
import useUploadVideo from '../../../hooks/useUploadVideo';
import './css/NewVideo.css';

export const NewVideo: FC = (): ReactElement => {
    
    const { handleSubmit, handleReset, uploadedFiles } = useUploadVideo(videoService);

    return (
        <Layout>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                px={4}
                my={6}
            >
                <Paper elevation={3} sx={{ width: '100%', p: 4, backgroundColor: 'background.paper' }}>
                    <Typography variant="h4" component="h1" mb={2}>
                        New Video
                    </Typography>
                    <Stack spacing={3}>
                        <form onSubmit={handleSubmit}>
                            <VideoTitleField />
                            <VideoDescriptionField />
                            <VideoRatingField />
                            <VideoUrlField />
                            <VideoBrandField />
                            <ImageUploadField />
                            <Stack direction="row" spacing={2} mt={2}>
                                <Button type="submit" variant="contained" color="primary">
                                    Enviar
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={handleReset}>
                                    Reset
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Paper>
            </Box>
        </Layout>
    )
}

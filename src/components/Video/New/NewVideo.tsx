import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Layout from '../../Layout/Layout';
import { VideoTitleField } from './_VideoTitleField';
import VideoUrlField from './_VideoUrlField';
import ImageUploadField from './_ImageUploadField';
import { VideoDescriptionField } from './_VideoDescriptionField';
import { VideoRatingField } from './_VideoRatingField';
import videoService from '../../../services/video';
import VideoBrandField from './_VideoBrandField';
import useUploadVideo from '../../../hooks/useUploadVideo';

export const NewVideo: FC = (): ReactElement => {
    
    const { handleSubmit, handleReset, uploadedFiles } = useUploadVideo(videoService);

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
                        <VideoTitleField />
                        <VideoDescriptionField />
                        <VideoRatingField />
                        <VideoUrlField />
                        <ImageUploadField />
                        <VideoBrandField />
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
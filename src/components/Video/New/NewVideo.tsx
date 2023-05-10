import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Layout from '../../Layout/Layout';
import { VideoTitleField } from './_VideoTitleField';

export const NewVideo: FC = (): ReactElement => {
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
                    <VideoTitleField />
                </Stack>
            </Box>
        </Layout>
    )
}
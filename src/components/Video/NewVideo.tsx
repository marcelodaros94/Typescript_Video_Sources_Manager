import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

export const NewVideo: FC = (): ReactElement => {
    return (
        <Box
        display="flex" 
        flexDirection="column" 
        alignItems="flex-start" 
        width="100%" 
        px={4} my={6}
        >
            <Typography >New Video</Typography>
        </Box>
    )
}
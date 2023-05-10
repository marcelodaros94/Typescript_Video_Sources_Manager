import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const VideoTitleField: FC = (): ReactElement => {

    return(
        <TextField id="outlined-basic" label="Title" variant="outlined" />
    );

}
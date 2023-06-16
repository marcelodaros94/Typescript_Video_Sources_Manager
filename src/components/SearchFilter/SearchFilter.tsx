import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/reducers';
import { Grid, Input, Button }  from '@mui/material';
import { VideosState } from '../../redux/types';

export const SearchFilter: FC = (): ReactElement => { 

    const dispatch = useDispatch();
    const searchTerm = useSelector((state: VideosState) => state.searchTerm);

    const handleSearch = (event: any) => {
        dispatch(setSearchTerm(event.target.value));
    };
    
    const handleClick = (event: any) => {
        dispatch(setSearchTerm(event.target.innerText));
    };

    return (        
        <Grid item xs={12} sm={12} md={12} direction={'column'} spacing={2}>
            <Input value={searchTerm} onChange={handleSearch} placeholder="Buscar videos" sx={{ width: '100%', mb: '15px' }} />
            <Button onClick={handleClick} style={{backgroundColor: "#21b6ae"}} variant="contained">
                AEW
            </Button>
            <Button onClick={handleClick} style={{backgroundColor: "#21b6ae"}} variant="contained">
                WWE
            </Button>
        </Grid>
    );
}
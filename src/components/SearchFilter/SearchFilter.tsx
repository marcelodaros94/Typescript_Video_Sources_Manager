import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/reducers';
import { Input }  from '@mui/material';
import { VideosState } from '../../redux/types';

export const SearchFilter: FC = (): ReactElement => { 

    const dispatch = useDispatch();
    const searchTerm = useSelector((state: VideosState) => state.searchTerm);

    const handleSearch = (event: any) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (        
        <Input value={searchTerm} onChange={handleSearch} placeholder="Buscar videos" sx={{ width: '100%' }} />        
    );
}
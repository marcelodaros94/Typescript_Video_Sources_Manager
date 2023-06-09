import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setSearchTerm, setRating, incrementRating, decrementRating, setCurrentVideoIndex } from '../../redux/reducers';
import { Grid, Input, Button, TextField, Box }  from '@mui/material';
import { VideosState } from '../../redux/types';
import './SearchFilter.css'

export const SearchFilter: FC = (): ReactElement => { 

    const dispatch = useDispatch();
    const searchTerm = useSelector((state: VideosState) => state.searchTerm);
    const searchRating = useSelector((state: VideosState) => state.searchRating);

    const resetResultConfig = () => {
        dispatch(setPage(1));
        dispatch(setCurrentVideoIndex(0));
    }

    const handleSearchByTerm = (event: any) => {
        dispatch(setPage(1));
        dispatch(setSearchTerm(event.target.value));
        dispatch(setCurrentVideoIndex(0));
    };
    
    const handleClick = (event: any) => {
        dispatch(setPage(1));
        dispatch(setSearchTerm(event.target.innerText));
        dispatch(setCurrentVideoIndex(0));
    };

    const handleDecrease = (): void => {
      dispatch(decrementRating());
    };
  
    const handleIncrease = (): void => {
        dispatch(incrementRating());
    };
  
    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newValue: number = parseInt(event.target.value, 10);
      if (!isNaN(newValue) && newValue >= 1 && newValue <= 6) {
        dispatch(setRating(newValue));
      }
    };

    return (        
        <Grid item xs={12} sm={12} md={12} direction={'column'} spacing={2} wrap="nowrap">
            <Input value={searchTerm} onChange={handleSearchByTerm} placeholder="Buscar videos" sx={{ width: '100%', mb: '15px' }} />
            <Box className="specialFilter" display="flex" justifyContent="left" gap="10px" alignItems="center">
                <Button onClick={handleClick} style={{backgroundColor: "#21b6ae"}} variant="contained">
                    AEW
                </Button>
                <Button onClick={handleClick} style={{backgroundColor: "#21b6ae"}} variant="contained">
                    WWE
                </Button>
                <Box display="flex" alignItems="center">
                    Rating: 
                <Button variant="contained" onClick={handleDecrease}>-</Button>
                <TextField
                    type="number"
                    value={searchRating}
                    onChange={handleRatingChange}
                    inputProps={{
                    min: 1,
                    max: 6,
                    }}
                />
                <Button variant="contained" onClick={handleIncrease}>+</Button>
                </Box>
            </Box>
        </Grid>
    );
}

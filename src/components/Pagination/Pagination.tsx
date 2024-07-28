import React from 'react';
import { Pagination as PaginationMUI } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setCurrentVideoIndex } from '../../redux/reducers';
import { VideosState } from '../../redux/types';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const pageInfo = useSelector((state: VideosState) => state.pageInfo);

  const handlePageChange = (event: any, page: number) => {
    dispatch(setPage(page));
    dispatch(setCurrentVideoIndex(0));
  };

  return (
    <PaginationMUI
      count={pageInfo.totalPages}
      page={pageInfo.currentPage}
      onChange={handlePageChange}
      sx={{ 
        position: 'fixed', 
        left: 0, 
        bottom: 0, 
        background: '#000000d4',
        borderTopRightRadius: '5px' }}
    />
  );
};

export default Pagination;
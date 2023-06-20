import React, { FC, ReactElement } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import { Backdrop, CircularProgress, Container } from '@mui/material';
import { VideosState } from '../../redux/types';
import { useSelector } from 'react-redux';

interface IPage {
    children: React.ReactNode;
}

export const Layout: FC<IPage> = ({children}): ReactElement => {
  const isLoading = useSelector((state: VideosState) => state.isLoading);

  return (
    <Container>
      {isLoading && 
        <Backdrop open={isLoading} style={{ zIndex: 9999 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
      <MainNavigation />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
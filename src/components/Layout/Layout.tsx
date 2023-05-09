import React, { FC, ReactElement } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import { Container } from '@mui/material';

interface IPage {
    children: React.ReactNode;
}

export const Layout: FC<IPage> = ({children}): ReactElement => {
  return (
    <Container>
      <MainNavigation />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
import React, { FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Button from '@mui/material/Button';

const App:FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1>Library</h1>
      <Button color="primary">Primary</Button>
    </ThemeProvider>
  );
}

export default App;

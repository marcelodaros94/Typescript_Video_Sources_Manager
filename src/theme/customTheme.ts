import { createTheme, ThemeOptions } from '@mui/material';
export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#FFCDD2',
            main: '#212121',
            dark: '#424242'
        },
        background: {
            paper: '#151515',
            default: 'rgba(0,0,0,.96)'
        }
    }
});
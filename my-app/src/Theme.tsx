import { PaletteMode } from "@mui/material";

export const getThemeMode = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#d2ab53',
                },
                secondary: {
                    main: '#9c27b0',
                },
                background: {
                    default: '#DEE4E7',
                    paper: '#fff',
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#5893df',
                },
                secondary: {
                    main: '#2ec5d3',
                },
                background: {
                    default: '#121212',
                    paper: '#12141e',
                },
            }),
    },
});
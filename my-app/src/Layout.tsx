import { Outlet } from "react-router";
import CustomAppBar from "./components/CustomAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { getThemeMode } from "./Theme";
import { Container, CssBaseline, PaletteMode, useMediaQuery } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function Layout() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getThemeMode(mode)), [mode]);

    return (
        <div>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <CustomAppBar />
                    <Outlet />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}


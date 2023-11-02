import { Container, Toolbar, AppBar, Typography, Box, Button, useTheme, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../Layout";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = ['Games', 'Experiments', 'About Me']

export default function CustomAppBar() {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Helo :)
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                                style={{ textDecoration: 'white', color: 'white' }}
                                to={`/${page}`}
                                key={page}
                            >
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar >
    )
}
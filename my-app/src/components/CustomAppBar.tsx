import { Container, Toolbar, AppBar, Typography, Box, Button, useTheme, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../Layout";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './CustomAppBar.scss';

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
                        className="appbar-title"
                    >
                        Helo :)
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' }, marginRight: 5, marginLeft: 5 }}>
                        {pages.map((page) => (
                            <Link
                                className="appbar-page-link"
                                to={`/${page}`}
                                key={page}
                            >
                                <Button className="appbar-page-link">
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
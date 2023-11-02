import { Container, Toolbar, AppBar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ['Games', 'Experiments', 'About Me']

export default function CustomAppBar() {

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
                </Toolbar>
            </Container>
        </AppBar >
    )
}
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        RealEstate
                    </Typography>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Button color="inherit" href="/admin">Admin</Button>
                    <Button color="inherit" href="/admin/new">New Property</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

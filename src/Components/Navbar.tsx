import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import SearchPaper from './SearchPaper';



const pages = ['活動照片', '組織成員', '聯絡我們'];

interface NavbarProps {
    handleMenu(): void
}

const Navbar = (props: NavbarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const Scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#212529" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Stack direction={"row"} sx={{ alignItems: "center" }}>
                        <IconButton
                            size="large"
                            onClick={props.handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button variant="text" onClick={Scrolltop}>
                            <Typography variant="h6" sx={{ color: "#ffc800", fontWeight: 600 }}>社團法人高雄市時代科技學術研究協會</Typography>
                        </Button>
                    </Stack>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifySelf: "flex-end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            <SearchPaper />
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Box sx={{ flexGrow: 0, alignSelf: "center" }}>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                            <SearchPaper />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
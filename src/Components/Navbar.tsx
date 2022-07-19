import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import home_img from "../assets/logo_nobackground.png";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import React, { useState , useEffect } from 'react'



const pages = ['活動照片', '組織成員', '聯絡我們'];

interface NavbarProps {
    handleMenu(): void
}

const Navbar = (props: NavbarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [isTop, setisTop] = useState(true);
    const [ScrollTop, setScrollTop] = useState(0);

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

    const onScroll = () => {
        const element = document.getElementsByTagName("html")[0];
        const userScrollTop = element.scrollTop;
        setisTop(element.scrollTop === 0);
        setScrollTop(userScrollTop);
    };

    useEffect(() => {
        onScroll();
    }, [])
    

    useEffect(() => {

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [ScrollTop]);


    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#212529" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={Scrolltop}>
                        <img src={home_img} style={{ width: isTop ? 150 : 100, height: isTop ? 150 : 100,transition: "height 0.5s ease , width 0.5s ease" }} />
                    </IconButton>
                    <Stack sx={{ gap: 2 }}>
                        <Typography variant="h5" color="initial" sx={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: 35 }}>社團法人高雄市時代科技學術研究協會</Typography>
                        <Stack sx={{ flexDirection: "row", gap: 2 }}>
                            <Button component={Link} to="/IndexPage" variant="contained" color="primary">
                                首頁
                            </Button>
                            <Button component={Link} to="/News" variant="contained" color="primary">
                                最新消息
                            </Button>
                            <Button component={Link} to="/Rewards" variant="contained" color="primary">
                                得獎紀錄
                            </Button>
                            <Button component={Link} to="/Organize" variant="contained" color="primary">
                                組織架構
                            </Button>
                            <Button variant="contained" color="primary">
                                活動花絮
                            </Button>
                            <Button component={Link} to="/About" variant="contained" color="primary">
                                聯絡方式
                            </Button>
                            <Button component={Link} to="/Certificate" variant="contained" color="primary">
                                專利證書
                            </Button>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;

import { Paper, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'



interface SidebarProps {
    display: string;
}

function Sidebar(props: SidebarProps) {

    const [Display, setDisplay] = useState("none");

    useEffect(() => {
        setDisplay(props.display)
    }, [props.display])


    return (
        <Box sx={{ display: Display }}>
            <Paper sx={{ width: {md:"10%",sx:"15%"}, position: "fixed", top: "50%", transform: "translateY(-50%)" }}>
                <Stack>
                    <Button component={Link} to="/IndexPage" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 1 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"} }}>首頁</Button>
                    <Button component={Link} to="/News" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 0 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"}}}>最新消息</Button>
                    <Button component={Link} to="/About" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 0 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"}}}>關於我們</Button>
                    <Button component={Link} to="/Organize" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 0 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"}}}>協會組織</Button>
                    <Button component={Link} to="/Company" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 0 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"}}}>企業連結</Button>
                    <Button component={Link} to="/Rewards" sx={{ color: "#ffffff", backgroundColor: "#212529", borderRadius: 1 , height:"3.5rem" , fontSize:{lg:"1.25rem",md:"0.75rem",sm:"0.25rem",xs:"5px"}}}>獲得獎項</Button>
                </Stack>
            </Paper>
        </Box >
    );
}

export default Sidebar;
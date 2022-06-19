
import Welcome from './../Components/Welecome';
import Box from '@mui/material/Box';
import Activity from './../Components/Activity';
import Member from './../Components/Member';
import Contact from './../Components/Contact';

function IndexPage() {
    return (
        <Box sx={{height:"100vh", backgroundColor: "grey.100"}}>
            <Welcome />
            <Activity />
            {/* <Member /> */}
            <Contact />
        </Box>
    );
}

export default IndexPage;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import ActivityCard from './ActivityCard';
import FirstImg from "../assets/img/activity/1.jpg";
import SecondImg from "../assets/img/activity/2.jpg";
import ThirdImg from "../assets/img/activity/3.jpg";


function Activity() {
    return (
        <Box sx={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "grey.100",pt:20,pb:20
        }}>
            <Box>
                <Stack sx={{ display: "flex" }}>
                    <Typography variant="h4" sx={{ color: "#212529", fontSize: 40, fontStyle: "italic", fontWeight: 700, mb: 15 , alignSelf:"center" }}>活動照片</Typography>
                    <Stack sx={{flexDirection: { xs: "column", lg: "row" }}}>
                        <ActivityCard Img={FirstImg}/>
                        <ActivityCard Img={SecondImg}/>
                        <ActivityCard Img={ThirdImg}/>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Activity;
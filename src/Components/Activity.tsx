
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import ActivityCard from './ActivityCard';
import FirstImg from "../assets/img/activity/new1.jpeg";
import SecondImg from "../assets/img/activity/new2.jpeg";
import ThirdImg from "../assets/img/activity/new3.png";


function Activity() {
    return (
        <Box sx={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "grey.100",pt:20,pb:20
        }}>
            <Box>
                <Stack sx={{ display: "flex" }}>
                    <Typography variant="h4" sx={{ color: "#212529", fontSize: 40, fontStyle: "italic", fontWeight: 700, mb: 15 , alignSelf:"center" }}>活動照片</Typography>
                    <Stack sx={{flexDirection: { xs: "column", lg: "row" }}}>
                        <ActivityCard Img={FirstImg} Title={"第22屆俄羅斯阿基米德國際發明競賽02"}/>
                        <ActivityCard Img={SecondImg} Title={"第22屆俄羅斯阿基米德國際發明競賽03"}/>
                        <ActivityCard Img={ThirdImg} Title={"第22屆俄羅斯阿基米德國際發明競賽04"}/>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Activity;
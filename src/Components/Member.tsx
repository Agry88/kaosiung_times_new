
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import AvatarCircle from './AvatarCircle';
import PrincipleImg from "../assets/img/team/principle.jpg";
import Img1 from "../assets/img/team/1.jpg";
import Img2 from "../assets/img/team/2.jpg";



function Member() {

    const Datas = [
        {
            Img: PrincipleImg,
            Title: "歐招煇　博士",
            Position: "理事長",
        },
        {
            Img: Img1,
            Title: "其他人",
            Position: "其他人",
        },
        {
            Img: Img2,
            Title: "其他人",
            Position: "其他人",
        },
    ]

    return (
        <Box sx={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "grey.100", pt: 20
        }}>
            <Box>
                <Stack sx={{ display: "flex" }}>
                    <Typography variant="h4" sx={{ color: "#212529", fontSize: 40, fontStyle: "italic", fontWeight: 700, mb: 15, alignSelf: "center" }}>組織成員</Typography>
                    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
                        {Datas.map((Data,index) => {
                            return <AvatarCircle key={index} Img={Data.Img} Position={Data.Position} Title={Data.Title}/>
                        })}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Member;
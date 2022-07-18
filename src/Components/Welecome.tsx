
import Box from '@mui/material/Box';
import Img from "../assets/img/header-bg3.jpeg";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import  Stack  from '@mui/material/Stack';

function Welcome() {
    return (
        <Box sx={{
            width: "100%", height: "80%", backgroundImage: `url(${Img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center",
            display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <Box>
                <Stack sx={{display:"flex"}}>
                    <Typography variant="h4" sx={{color:"#fff" , fontSize:40 , fontStyle:"italic" , fontWeight:700 , mb:20}}>歡迎來到社團法人高雄市時代科技學術研究協會</Typography>
                    <Button variant="contained" sx={{backgroundColor:"#ffc800" , color:"#ffffff", fontSize:30 ,fontWeight:600,width:"50%" , alignSelf:"center",
                "&:hover":{
                    backgroundColor:"#cca000"
                }
                }}>
                        了解更多
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default Welcome;
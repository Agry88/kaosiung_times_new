
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    Img: any;
    Title:String,
    Position:String,
}

function AvatarCircle(props: Props) {
    return (
        <Box sx={{p:10}}>
            <Avatar src={props.Img} sx={{ width: "14rem", height: "14rem", border: "0.5rem solid rgba(0,0,0,.1)" }} />
            <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" ,flexDirection:"column"}}>
                <Typography variant="h5" color="initial" sx={{fontWeight:600 , pt:2}}>
                    {props.Title}
                </Typography>
                <Typography variant="subtitle1" sx={{color:"#6c757d",pt:1}}>
                    {props.Position}
                </Typography>
            </Box>
        </Box>
    );
}

export default AvatarCircle;
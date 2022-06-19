
import Box from '@mui/material/Box';
import Img from "../assets/img/map-image.png";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

function Contact() {
    return (
        <Box sx={{
            width: "100%", backgroundImage: `url(${Img})`, backgroundRepeat: "no-repeat", backgroundColor: "#212529", backgroundPosition: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", pt: 20
        }}>

            <Stack sx={{ display: "flex" , alignItems:"center" ,width:"50%" }}>
                <Typography variant="h4" sx={{ color: "#fff", fontSize: 40, fontStyle: "italic", fontWeight: 700, mb: 5 }}>聯絡我們</Typography>
                <FormControl fullWidth>
                    <TextField
                        id="Name"
                        name="Name"
                        placeholder="你的名字*"
                        sx={{ backgroundColor: "#ffffff" , m:1.5 }}
                    />
                    <TextField
                        id="Email"
                        name="Email"
                        placeholder="你的電子信箱*"
                        sx={{ backgroundColor: "#ffffff" , m:1.5 }}
                    />
                    <TextField
                        id="Phone"
                        name="Phone"
                        placeholder="你的電話*"
                        sx={{ backgroundColor: "#ffffff" , m:1.5 }}
                    />
                    <TextField
                        id="Message"
                        name="Message"
                        placeholder="你的訊息*"
                        sx={{ backgroundColor: "#ffffff" , m:1.5 }}
                    />
                </FormControl>

                <Button variant="contained" sx={{
                    backgroundColor: "#ffc800", color: "#ffffff", fontSize: 30, fontWeight: 600, width: "50%", alignSelf: "center",mt:5,
                    "&:hover": {
                        backgroundColor: "#cca000"
                    }
                }}>
                    發送訊息
                </Button>
            </Stack>
        </Box>
    );
}

export default Contact;
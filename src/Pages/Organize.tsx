
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img from "../assets/img/Organization/organ.PNG";

function Organize() {
    return ( 
        <Box sx={{ backgroundColor: "grey.100", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ minHeight: "600px", width: "800px" , display:"flex" , alignItems:"center" , justifyContent:"center" }}>
                <img src={img}/>
            </Paper>
        </Box>
     );
}

export default Organize;
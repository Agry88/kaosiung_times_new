import { Paper, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchPaper() {
    return (
        <Paper sx={{display:"flex",alignItems:"center" , backgroundColor:"#ffc800"}}>
            <TextField
                id="SeachBox"
                label="搜尋..."
                sx={{backgroundColor:"#ffffff"}}
            />
            <IconButton >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchPaper;
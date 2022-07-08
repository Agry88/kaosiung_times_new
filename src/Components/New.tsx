import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function New(props:any) {
    const { data } = props;
    return (
        <Paper sx={{ height: "150px", width: "600px" }}>
            <Stack sx={{ gap: 2, p: 3 }}>
                <Typography variant="h6" color="initial">{data.title}</Typography>
                <Typography variant="body1" color="initial">{data.time}</Typography>
            </Stack>
        </Paper>
    );
}

export default New;
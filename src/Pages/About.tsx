
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function About() {
    return (
        <Box sx={{ backgroundColor: "grey.100", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ minHeight: "600px", width: "800px" }}>
                <Stack sx={{gap:2, p:3}}>
                    <Typography variant="h6" color="initial">本會以提供學術研究、合作交流平台以促進跨領域學術交流，增進產學合作為宗旨。</Typography>
                    <Typography variant="body1" color="initial">本會之任務如下：</Typography>
                    <Typography variant="body1" color="initial">一、提供學術研究、合作交流平台。</Typography>
                    <Typography variant="body1" color="initial">二、促進跨領域學術交流。</Typography>
                    <Typography variant="body1" color="initial">三、增進產學合作為宗旨。</Typography>
                    <Typography variant="body1" color="initial">四、其它與學術研究發展有關事宜。</Typography>
                    <Typography variant="body1" color="initial">歡迎認同本會宗旨、設籍或工作於本市、年滿二十歲、有行為能力、具碩士以上學歷資格或於特殊領域學有專精人士，填具入會申請書加入本會行列。</Typography>
                    <Typography variant="body1" color="initial">閱讀更多： https://time-technology-association.webnode.tw/%e9%97%9c%e6%96%bc%e6%88%91%e5%80%91/</Typography>
                </Stack>
            </Paper>
        </Box>
    );
}

export default About;

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Company() {
    return (
        <Box sx={{ backgroundColor: "grey.100", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ minHeight: "600px", width: "800px" }}>
                <Stack sx={{ gap: 2, p: 3 }}>
                    <Typography variant="h6" color="initial">合作企業連結</Typography>
                    <Typography variant="body1" color="initial">旅遊俱樂部 <a href="http://www.dreamtrips.com/">www.dreamtrips.com/</a> </Typography>
                    <Typography variant="body1" color="initial">鼎樫科技股份有限公司<a href="http://www.apexgreen.com.tw/">www.apexgreen.com.tw/</a></Typography>
                    <Typography variant="body1" color="initial">國立高雄應用科技大學<a href="http://www.kuas.edu.tw/bin/home.php">www.kuas.edu.tw/bin/home.php</a></Typography>
                    <Typography variant="body1" color="initial">國立中興大學<a href="http://www.nchu.edu.tw/index1.php">www.nchu.edu.tw/index1.php</a></Typography>
                    <Typography variant="body1" color="initial"> 正修科技大學電子工程系<a href="https://www.csu.edu.tw/ndep/super_pages.php?ID=ndep1">https://www.csu.edu.tw/ndep/super_pages.php?ID=ndep1</a></Typography>
                    <Typography variant="body1" color="initial"> 虎尾科技大學機械與電腦輔助工程系<a href="https://nfumcae.nfu.edu.tw/bin/home.php">https://nfumcae.nfu.edu.tw/bin/home.php</a></Typography>
                    <Typography variant="body1" color="initial">閱讀更多：<a href="https://time-technology-association.webnode.tw/%e4%bc%81%e6%a5%ad%e9%80%a3%e7%b5%90/">https://time-technology-association.webnode.tw/%e4%bc%81%e6%a5%ad%e9%80%a3%e7%b5%90/</a></Typography>
                </Stack>
            </Paper>
        </Box>
    );
}

export default Company;
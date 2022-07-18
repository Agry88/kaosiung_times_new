
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Reward from './../Components/Reward';


const datas = [
    {
        id: "1",
        Reward_name: "機械裝置的平衡校正系統及其校正方法",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/1.jpg"),
        Reward_explain: "機械裝置的平衡校正系統及其校正方法",
    },
    {
        id: "2",
        Reward_name: "機械裝置的平衡校正系統及其校正方法",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/2.jpg"),
        Reward_explain: "機械裝置的平衡校正系統及其校正方法",
    },
    {
        id: "3",
        Reward_name: "鐵捲門之防壓檢測裝置",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/3.jpg"),
        Reward_explain: "鐵捲門之防壓檢測裝置",
    },
    {
        id: "4",
        Reward_name: "軍艦大軸設計裝置",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/4.PNG"),
        Reward_explain: "軍艦大軸設計裝置",
    },
    {
        id: "5",
        Reward_name: "用於比賽的感測裝置",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/5.PNG"),
        Reward_explain: "用於比賽的感測裝置",
    },
    {
        id: "6",
        Reward_name: "太陽能空調裝置",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/Certificate/6.PNG"),
        Reward_explain: "太陽能空調裝置",
    },
]

function Certificate() {
    return (
        <Box sx={{ backgroundColor: "grey.100", minHeight: "100vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h2" color="initial" sx={{ mt: 15, fontWeight: 500, mb: 5 }}>獲得獎項</Typography>
            <Stack sx={{ display:"flex" , justifyContent:"center" ,mb: 20 , flexDirection:"row" , flexWrap:"wrap" , gap:5}}>
                {datas.map((data) => {
                    return <Reward key={data.id} data={data} />
                })}
            </Stack>
        </Box>
    );
}

export default Certificate;
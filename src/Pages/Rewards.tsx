
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
        img_src: require("../assets/img/page_about/1.jpg"),
        Reward_explain: "機械裝置的平衡校正系統及其校正方法",
    },
    {
        id: "2",
        Reward_name: "機械裝置的平衡校正系統及其校正方法",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/2.jpg"),
        Reward_explain: "機械裝置的平衡校正系統及其校正方法",
    },
    {
        id: "3",
        Reward_name: "鐵捲門之防壓檢測裝置",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/3.jpg"),
        Reward_explain: "鐵捲門之防壓檢測裝置",
    },
    {
        id: "4",
        Reward_name: "賽普勒斯國際創新發明獎",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/4.jpg"),
        Reward_explain: "賽普勒斯國際創新發明獎",
    },
    {
        id: "5",
        Reward_name: "賽普勒斯國際創新發明獎",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/5.jpg"),
        Reward_explain: "賽普勒斯國際創新發明獎",
    },
    {
        id: "6",
        Reward_name: "烏克蘭國際發明獎",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/6.jpg"),
        Reward_explain: "烏克蘭國際發明獎",
    },
    {
        id: "7",
        Reward_name: "烏克蘭國際發明獎",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/7.jpg"),
        Reward_explain: "烏克蘭國際發明獎",
    },
    {
        id: "8",
        Reward_name: "IIC國際創新發明_太陽能得獎證書",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/8.jpg"),
        Reward_explain: "IIC國際創新發明_太陽能得獎證書",
    },
    {
        id: "9",
        Reward_name: "俄羅斯阿基米德國際發明競賽",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/9.jpg"),
        Reward_explain: "俄羅斯阿基米德國際發明競賽",
    },
    {
        id: "10",
        Reward_name: "俄羅斯阿基米德國際發明競賽",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/10.jpg"),
        Reward_explain: "俄羅斯阿基米德國際發明競賽",
    },
    {
        id: "11",
        Reward_name: "俄羅斯阿基米德國際發明競賽",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/11.jpg"),
        Reward_explain: "俄羅斯阿基米德國際發明競賽",
    },
    {
        id: "12",
        Reward_name: "烏克蘭榮譽院士_歐招輝",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/12.jpg"),
        Reward_explain: "烏克蘭榮譽院士_歐招輝",
    },
    {
        id: "13",
        Reward_name: "烏克蘭榮譽院士_歐招輝",
        Reward_small_explain: "活動照片小標",
        img_src: require("../assets/img/page_about/13.jpg"),
        Reward_explain: "烏克蘭榮譽院士_歐招輝",
    },
]

function Rewards() {
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

export default Rewards;
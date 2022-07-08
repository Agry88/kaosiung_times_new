
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function Reward(props: any) {
    const { data } = props;

    const handlePictureClick = () => {
        console.log("picture");
    }

    return (
        <Paper>
            <div className="image-hover">
                <img src={data.img_src} className="reward_image" onClick={handlePictureClick} />
            </div>
            <Typography variant="h5" color="initial" sx={{ textAlign: "center", fontWeight: 600, mb: 5 }}>{data.Reward_name}</Typography>
        </Paper>
    );
}

export default Reward;
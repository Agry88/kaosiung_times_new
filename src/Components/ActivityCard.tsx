import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ActivityProps {
    Img:any;
}

function ActivityCard(props:ActivityProps) {
    const {Img} = props;
    return (
        <Card sx={{ minWidth:360 , maxHeight:450 , m:3}}>
            <CardMedia
                component="img"
                height="300"
                image={Img}
                alt="green iguana"
                sx={{"&:hover":{
                    opacity:0.75,
                    transition:"opacity .25s ease-in-out",
                    cursor:"pointer"
                }}}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    活動照片標題
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    活動照片介紹
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ActivityCard;
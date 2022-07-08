
import Box from '@mui/material/Box';
import Img from "../assets/img/map-image.png";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react'

function Contact() {
    const [alert, setalert] = useState({
        alertDisplay: false,
        alertStyle: false,  //true is success false = error
        alertMessage: "",
        alertTitle: "",
    });

    const sendEmail = (e: any) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        //跳出訊息並於timeout結束後收回
        setalert(prevState => ({ ...prevState, alertDisplay: true }));
        setTimeout(() => {
            setalert(prevState => ({ ...prevState, alertDisplay: false, alertMessage: "" }));
        }, 2500);

        if (data.get("Name") == '') {
            const errorMessage = "請輸入你的名字";
            setalert(prevState => ({ ...prevState, alertMessage: errorMessage }));
        }

        if (data.get("Email") == '') {
            const errorMessage = "請輸入你的信箱";
            setalert(prevState => ({ ...prevState, alertMessage: prevState.alertMessage + "\n" + errorMessage }));
        }

        if (data.get("Phone") == '') {
            const errorMessage = "請輸入你的電話";
            setalert(prevState => ({ ...prevState, alertMessage: prevState.alertMessage + "\n" + errorMessage }));
        }

        if (data.get("Message") == '') {
            const errorMessage = "請輸入你的訊息";
            setalert(prevState => ({ ...prevState, alertMessage: prevState.alertMessage + "\n" + errorMessage }));
        }



        //有欄位未填寫將訊息標示為紅色
        if (data.get("Name") == '' || data.get("Email") == '' || data.get("Phone") == '' || data.get("Message") == '') {
            setalert(prevState => ({ ...prevState, alertStyle: false , alertTitle:"送出郵件失敗!!" }));
            return
        } else {
            setalert(prevState => ({ ...prevState, alertStyle: true , alertTitle:"送出郵件成功"}));
        }
        //到這裡通過所有防呆 進行送出
        setalert(prevState => ({ ...prevState, alertMessage: "我們已經成功收到您的郵件，感謝您的訊息!" }));
        const send_data = {
            from_name: data.get("Name"),
            from_email: data.get("Email"),
            phone_number: data.get("Phone"),
            message: data.get("Message"),
        }
        console.log("send");
        emailjs.send("service_6m2ra7w", 'template_lirwoyf', send_data, 'GY-RIwEZDxx6ft1yW');
    }

    return (
        <Box sx={{
            width: "100%", backgroundImage: `url(${Img})`, backgroundRepeat: "no-repeat", backgroundColor: "#212529", backgroundPosition: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", pt: 20, pb: 20
        }}>

            <Stack sx={{ display: "flex", alignItems: "center", width: "50%" }}>
                <Typography variant="h4" sx={{ color: "#fff", fontSize: 40, fontStyle: "italic", fontWeight: 700, mb: 5 }}>聯絡我們</Typography>
                <Alert id='alert' severity={alert.alertStyle ? "success" : "error"} sx={{ position: "fixed", left: "50px", top: alert.alertDisplay ? "85%" : "100%", transition: "1s" }}>
                    <AlertTitle>{alert.alertTitle}</AlertTitle>
                    <strong style={{ whiteSpace: "pre-line" }}>
                        {alert.alertMessage}
                    </strong>
                </Alert>
                <FormControl component="form" onSubmit={sendEmail} fullWidth>
                    <TextField
                        id="Name"
                        name="Name"
                        placeholder="你的名字*"
                        sx={{ backgroundColor: "#ffffff", m: 1.5 }}
                    />
                    <TextField
                        id="Email"
                        name="Email"
                        placeholder="你的電子信箱*"
                        sx={{ backgroundColor: "#ffffff", m: 1.5 }}
                    />
                    <TextField
                        id="Phone"
                        name="Phone"
                        placeholder="你的電話*"
                        sx={{ backgroundColor: "#ffffff", m: 1.5 }}
                    />
                    <TextField
                        id="Message"
                        name="Message"
                        placeholder="你的訊息*"
                        sx={{ backgroundColor: "#ffffff", m: 1.5 }}
                    />
                    <Button variant="contained" type="submit" sx={{
                        backgroundColor: "#ffc800", color: "#ffffff", fontSize: 30, fontWeight: 600, width: "50%", alignSelf: "center", mt: 5,
                        "&:hover": {
                            backgroundColor: "#cca000"
                        }
                    }}>
                        發送訊息
                    </Button>
                </FormControl>
            </Stack>
        </Box>
    );
}

export default Contact;
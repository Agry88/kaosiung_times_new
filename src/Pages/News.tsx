
import Box from '@mui/material/Box';
import New from './../Components/New';
import Stack from '@mui/material/Stack';

import React, { useState, useEffect } from 'react';
function News() {

    const [datas, setdatas] = useState<any[]>([])

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbxpj6AFeUjUWL7XhNpqzOLrCSR4z7W2SmAF-S6T0cgE1rH-gi8UktJ7lkLhWsAgDX3L/exec")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return (
                    new Promise<void>((resolve) => {
                        setdatas(res);
                        resolve();
                    })
                )
            })

    }, [])


    return (
        <Box sx={{ backgroundColor: "grey.100", minHeight: "100vh", display: "flex", justifyContent: "center"}}>
            <Stack sx={{mt:15 , gap:5}}>
                {datas && 
                datas.map((data)=>{
                    return <New data={data}/>
                })}
            </Stack>
        </Box>
    );
}

export default News;
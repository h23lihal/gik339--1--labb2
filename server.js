const express = require('express');
const server = express();
server
    .use(express.json())
    .use(express.urlencoded({extendet: false}))
    .use((req,res,next) =>{
        res.header('Access-Control-Allow-Origin', '*'); 
        res.header ('Acess-Control-Allow-Headers', '*'); 
        res.header ('Access-Control-Allow-Methods', '*'); 
        next();
    });

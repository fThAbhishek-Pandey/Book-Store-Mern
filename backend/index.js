const express = require ("express");
const app = express();
const {PORT} = require ("./config.js")
console.log(`the port is ${PORT}`,typeof PORT);

app.listen(PORT, ()=>{
    console.log(`server is started ${PORT}`);
})
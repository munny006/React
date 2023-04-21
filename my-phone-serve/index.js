const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;


app.get('/',(req,res) => {
    res.send('my phones impormation coming soon');
});

app.get('/phones',(req,res) =>{
    res.send(phones);
})

app.listen(port,() => {
    console.log(`My server is running on port : ${port}`); 
})
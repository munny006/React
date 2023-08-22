const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
const users =[
    {id:1,name:'sabana',email:'sabana@gmail.com'},
    {id:2,name:'saban',email:'saban@gmail.com'},
    {id:3,name:'saba',email:'saba@gmail.com'},
    {id:4,name:'sab',email:'sab@gmail.com'},
]

app.get('/',(req,res) =>{
    res.send('Users Management server is running')
});




//special api
app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(res.body);
})

app.listen(port,()=>{
    console.log(`server is running on PORT:${port}`)
})
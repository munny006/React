const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

///middleware
app.use(cors());

const users =[
    {id:1,name:'sabana',email:'sabana@gmail.com'},
    {id:2,name:'sabnur',email:'sabnur@gmail.com'},
    {id:3,name:'kajol',email:'kajol@gmail.com'},
    {id:4,name:'sabanai',email:'sabanai@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('Users management server is running')
});

app.get('/users',(req,res)=>{
    res.send(users);
})
app.post('/users',(req,res) =>{
    console.log('post is hitting')
    console.log(req,body);
})
app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
});
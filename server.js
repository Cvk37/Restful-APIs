const { isUtf8 } = require('buffer');
const { Console } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/listUsers',(req,res)=>{
    fs.readFile(__dirname+'/'+"users.json","utf8",(err,data)=>{
        console.log(data)
        
    });
})


var user = {
    "user4":{
        "name":"John",
        "password":"password4",
        "occupation":"pilot",
        "id": 4
    }
}


app.post('/addUser',(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
        data = JSON.parse(data)
        data["user4"]=user["user4"];
        console.log(data)
        res.end(JSON.stringify(data))
    });
})
app.get('/:id', (req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8", (err,data)=>{
        var users = JSON.parse(data);
        var user =  users["user"+"-"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
    })

app.delete('/deleteUser',(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8", (err,data)=>{
        var users = JSON.parse(data);
        delete users["user"+"-"+"2"]
        console.log(users)
        res.end(JSON.stringify(users))
    });
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port
    console.log("Example app listening at http:// %s:%s",host,port)
})
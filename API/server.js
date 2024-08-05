const express=require('express');
const cors=require('cors');

const app=express();
const db=require('./database');
var database=db.db;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Servidor corriendo");
});
app.post('/login',(req,res)=>{
    respuesta={}
    var username=req.body.username;
    var password=req.body.password;
    database.query('select * from users where username=? and password=?;',[username,password],(error, rows)=>{
        if(error){
            respuesta.status=false;
            respuesta.mensaje=error;
            res.json(respuesta)
        }else{
            if(rows.length==1 && rows[0].username==username && rows[0].password==password){
                respuesta.estatus=true;
                respuesta.rol=rows[0].role;
                res.json(respuesta)
            }else{
                respuesta.estatus=false;
                console.log("No coincide")
                res.json(respuesta);
            }
        }
    })
});
app.post('/register',(req,res)=>{
    respuesta={}
    database.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?);',[req.body.username,req.body.password,'normal'],(error,rows)=>{
        respuesta.estatus=true;
        respuesta.mensaje='El usuario a sido creado correctamente';
        res.json(respuesta);
    });
});
app.get('/getUsers',(req,res)=>{
    database.query('select * from users;',(error,rows)=>{
        res.json(rows)
    })
});
app.get('/getRefas',(req,res)=>{
    database.query('select * from refacciones;',(error,rows)=>{
        res.json(rows)
    })
});
app.listen(8080,()=>{
    console.log("port: 8080");    
});

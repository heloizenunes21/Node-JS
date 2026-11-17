import express from "express";
const app = express ();
app.get('/usuarios',(req, res)=>{
    res.send('Informação enviada')
})

app.listen(3000, ()=>{
    console.log("Servidor rodando!")
})
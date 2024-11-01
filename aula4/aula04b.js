const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Seja bem vido!')
})

app.get('/canal',(req,res)=>{
res.json({canal:'cfbcursos'})
})

app.listen(porta || 3000, ()=>{console.log('Servidor rodando!');
})
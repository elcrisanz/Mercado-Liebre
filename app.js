const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));  

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo");
});

app.get('/', (req,res) =>{
   res.sendFile(path.resolve(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});

app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));  // Permite enviar un archivo HTML
 });

 app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
 });




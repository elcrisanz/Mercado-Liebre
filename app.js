const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.resolve(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, './public')));  

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo");
});




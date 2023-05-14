/* const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(express.json());

app.set('port',PORT);


app.use('/api/core', require('./routes/rutas') );

app.listen(PORT, () => {
    console.log('Servidor corriendo en 3000');
})
 */

// import express
const express = require('express')
require('dotenv').config();

const port = 3000;
// import cors
const cors = require('cors')
 
const bodyParser = require('body-parser');
 
// import routes
const Router =require("./routes/rutas.js");
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);
  
app.listen(port, () => console.log('Server running'));
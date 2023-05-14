const express = require('express')
require('dotenv').config();



const cors = require('cors');

const Router =require("./routes/rutas.js");
const morgan = require('morgan');
  

const app = express();
app.use(morgan('dev'));
app.set('port',process.env.port ||3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(Router);
  
app.listen(app.get('port'), () => console.log('Servidor Corriendo en: ',app.get('port')));
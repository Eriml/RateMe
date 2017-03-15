var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
//Se agrega (session) a mongoStore porque tambien hace uso de express-session
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

var app = express();

//Conexion de la base para almacenar 
mongoose.connect('mongodb://localhost/rateme');

//Asigna la ruta de la carpeta de archivos estaticos
app.use(express.static('public'));

app.engine('ejs',engine);
app.set('view engine','ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Rutas
require('./routes/user')(app);

app.use(session({
	secret: 'Testkey',
	resave: false,
	saveUninitialized: false,
	store: new mongoStore({mongooseConnection: mongoose.connection})
}))


app.listen(3000,function()
	{
		//Esta funcion se corre cuando el servidor se corre
		console.log('Servidor corriendo...');
	}
)
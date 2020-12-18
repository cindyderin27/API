// // const a=1+1
// // console.log("Bonjour le monde",a);

// // node nomfichier.js pour executer le fichier dans le terminal
// // https://www.npmjs.com/package/express-mongoose-generator
// // // const a=1+1
// // console.log("Bonjour le monde",a);

// // node nomfichier.js pour executer le fichier dans le terminal
// // https://www.npmjs.com/package/express-mongoose-generator
// const express = require('express');//IMPOTRATION

// // instance de notre application. 
// //Elle possede dans ses proprietes un objet Router sur lequel on devra greffer nos route
// var app = express();//INSTANCE DE L'objet
// const path = require('path');
// const port = 3000;//permet de créer l'adresse d'accès au serveur
// const bodyParser = require('body-parser');//permet de formater le corps des requêtes , configure l'intérieur de la requête


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({//app c'est notre instance de express 
//     extended: true
// }))

// // parse application/json
// app.use(bodyParser.json())//javascript oblect notation

// //Demarrage du serveur HTTP
// app.listen(port, () => {// demande à l'application de demarrer le serveur en ecoutant le prot qu'on a créé 
//     console.log('App listening on port 3000!');
// });

// //importation des routes en passant l instance de notre 
// //application afin que ces routes y soient greffees
// require('./routes')(app);

// // Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });


//  app.use(express.static(path.join(__dirname, 'views')));
//  app.use(express.static(path.join(__dirname, 'Public')));
//  app.engine('html', require('ejs').renderFile)
//  app.set("view engine", "html");


//  app.get('/', (req, res) =>{
// //res.send("Bienvenue à l'accueil");
//     res.render('home/Connexion.html');
//  });

// //  Linking Routes to our server

// // var users = require('./routes/usersRoutes');
//  // app.use('/users', users);


// const a=1+1
// console.log("Bonjour le monde",a);

// node nomfichier.js pour executer le fichier dans le terminal
// https://www.npmjs.com/package/express-mongoose-generator
const express = require('express');//IMPOTRATION

// instance de notre application. 
//Elle possede dans ses proprietes un objet Router sur lequel on devra greffer nos route
var app = express();//INSTANCE DE L'objet
const path = require('path');
const port = 3000;//permet de créer l'adresse d'accès au serveur
const bodyParser = require('body-parser');//permet de formater le corps des requêtes , configure l'intérieur de la requête


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({//app c'est notre instance de express 
    extended: true
}))

// parse application/json
app.use(bodyParser.json())//javascript oblect notation

//Demarrage du serveur HTTP
app.listen(port, () => {// demande à l'application de demarrer le serveur en ecoutant le prot qu'on a créé 
    console.log('App listening on port 3000!');
});

//importation des routes en passant l instance de notre 
//application afin que ces routes y soient greffees
require('./routes')(app);

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


 app.use(express.static(path.join(__dirname, 'views')));
 app.use(express.static(path.join(__dirname, 'Public')));
 app.engine('html', require('ejs').renderFile)
 app.set("view engine", "html");


 app.get('/', (req, res) =>{
//res.send("Bienvenue à l'accueil");
    res.render('home/Connexion.html');
 });

//  Linking Routes to our server

// var users = require('./routes/usersRoutes');
 // app.use('/users', users);


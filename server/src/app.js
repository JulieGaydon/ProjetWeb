const path = require('path');
const api = require('./api.js');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
var cors = require('cors');

const app = express()
app.use(cors());
api_1 = require("./api.js");
const session = require("express-session");

app.use(session({
    secret: "technoweb rocks"
}));

var Datastore = require('nedb');        
db = {};
db.user =  new Datastore('./dataUser.db');
db.user.loadDatabase();
db.message =  new Datastore('./dataMessage.db');
db.message.loadDatabase();
db.amitie =  new Datastore('./dataAmitie.db');
db.amitie.loadDatabase();

app.use('/api', api.default(db));

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

//lignes 2 et 10 importantes
//creer des choses de ce genre, avec chemin = api/User.js, api/message.js ...
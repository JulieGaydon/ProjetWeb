const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Users {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }
  
  create(Nom, Prenom, Pseudo, Password , AdresseM) {
    return new Promise((resolve, reject) => {
      let user = {
        nom: Nom,
        password: Password,
        pseudo: Pseudo,
        prenom: Prenom,
        adresseM: AdresseM,
     };
     db.user.insert(user);
     db.user.find({pseudo: Pseudo},{_id : 1},(err, docs)=>{
        if(err){
          console.log("erreur")
          reject(err);
        }else{
          console.log("ok")
          resolve(docs[0]._id);
        }
        })
    });
  }

  get(userid) {
    return new Promise((resolve, reject) => {
      db.user.find({},{nom : 1, prenom : 1, pseudo : 1, password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(userid == 1) {
          resolve(docs);
        } else {
          reject(err);
        }
      })
    });
  }
  
  async exists(login) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : login},{pseudo : 1},(err, docs)=>{
        console.log("fonction existe")
        if(docs[0] !== undefined){
          if(docs[0].pseudo === login) {
            console.log("pseudo",docs[0])
            resolve(docs);
          }
        } else {
          // si err vaut null
          if(err == null){
            resolve(err)
          }
          else{
            // si err est une erreur
            console.log("undefined")
            // erreur
            reject(err);
          }
        }
      })
    });
  }
  
  checkpassword(login, mdp) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : login},{password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        // let userid = 1; // À remplacer par une requête bd
        // if(null){
        //   reject(err)
        // }
        console.log("cheqckpasswd")
        console.log(docs[0])
        if(docs[0] !== undefined){
          if(docs[0].password === mdp) {
            console.log("password",docs[0].password)
            resolve(docs);
          }else{
            //mauvais mot de passe
            console.log("mauvais mdp !")
            reject(err)
          }
        } else {
          //erreur
          console.log("undefined")
          reject(err);
        }
      });
    });
  }

}

exports.default = Users;


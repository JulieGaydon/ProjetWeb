const { bdd } = require("mocha/lib/interfaces");

class Users {
  constructor(db) {
    this.db = db
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
     db.user.find({pseudo: Pseudo},{pseudo : 1,_id : 1},(err, docs)=>{
        if(err){
          console.log("erreur create user")
          reject(err);
        }else{
          resolve(docs[0]._id);
        }
        })
    });
  }


  get(user) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : user},{nom : 1, prenom : 1, pseudo : 1, password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(err) {
          reject(err);
        } else {
          resolve(docs);
        }
      })
    });
  }
  
  async exists(login) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : login},{pseudo : 1},(err, docs)=>{
        console.log(docs[0])
        if(docs[0] !== undefined){
          if(docs[0].pseudo === login) {
            console.log("utilisateur existe deja")
            resolve(docs);
          }
        } else {
          // si err vaut null
          if(err == null){
            console.log("utilisateur existe pas")
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
      db.user.find({pseudo : login},{password : 1},(err, docs)=>{  
        if(docs[0] !== undefined){
          if(docs[0].password === mdp) {
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


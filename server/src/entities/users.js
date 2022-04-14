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
      (err,docs) => {
        if(err){
            reject(err);
        }else{
            resolve(docs[0]);
        }
      };
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
        if(err) {
          //erreur
          reject(err);
        } else {
          resolve(docs);
        }
      })
    });
  }
  
  checkpassword(login, mdp) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : login},{password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        // let userid = 1; // À remplacer par une requête bd
        if(docs.password === mdp) {
          resolve(docs);
        } else {
          //erreur
          reject(err);
        }
      });
    });
  }

}

exports.default = Users;


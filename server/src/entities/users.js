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
     db.user.find({pseudo: Pseudo},{pseudo : 1,_id : 1},(err, docs)=>{
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


  get(user) {
    return new Promise((resolve, reject) => {
      console.log("fonction get user")
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
      console.log("fonction exists")
      db.user.find({pseudo : login},{pseudo : 1},(err, docs)=>{
        console.log(docs[0])
        if(docs[0] !== undefined){
          if(docs[0].pseudo === login) {
            console.log("utilisateur existe -->",docs[0])
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

  // exists(user){
  //   return new Promise((resolve, reject) => {
  //     db.message.find(({pseudo : user}),(err, docs)=>{
  //       if(err){
  //         console.log("erreur")
  //         reject(false);
  //       }else{
  //         console.log("res docs exists",docs)
  //         console.log(docs)
  //         resolve(true);
  //       }
  //     })
  //   })
  // }

  // exists(user) {
  //   return new Promise((resolve, reject) => {
  //     console.log("fonction get user")
  //     db.user.find({pseudo : user},{nom : 1, prenom : 1, pseudo : 1, password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
  //       if(err) {
  //         console.log("false")
  //         reject(false);
  //       } else {
  //         console.log("true")
  //         resolve(true);
  //       }
  //     })
  //   });
  // }
  
  checkpassword(login, mdp) {
    return new Promise((resolve, reject) => {
      db.user.find({pseudo : login},{password : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        // let userid = 1; // À remplacer par une requête bd
        // if(null){
        //   reject(err)
        // }
        console.log("cheqckpasswd")
        console.log("doc 0: ",docs[0])
        console.log("doc 1: ",docs[1])
        console.log("doc : ",docs)
        console.log("doc password: ",docs[0].password)
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


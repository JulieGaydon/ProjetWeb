const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Users {
  constructor(db) {
    this.db = db
    this.db.user.insert({
      login: "pikachu",
      password: "1234",
      lastname: "chu",
      firstname: "pika"
   })
    // suite plus tard avec la BD
  }

  create(login, password, lastname, firstname) {
    return new Promise((resolve, reject) => {
      let userid = 1; // À remplacer par une requête bd
      // let user = {
      //   login : login,
      //   password : password,
      //   lastname : lastname,
      //   firstname : firstname,
      // };
      // db.user.insert(user);
      if(false) {
        //erreur
        reject();
      } else {
        resolve(userid);
      }
    });
  }

  get(userid) {
    return new Promise((resolve, reject) => {
      
      const user = {
         login: "pikachu",
         password: "1234",
         lastname: "chuuu",
         firstname: "pika"
      }; // À remplacer par une requête bd

      if(false) {
        //erreur
        reject();
      } else {
        if(userid == 1) {
          resolve(user);
        } else {
          resolve(null);
        }
      }
    });
  }

  async exists(login) {
    return new Promise((resolve, reject) => {
      if(false) {
        //erreur
        reject();
      } else {
        resolve(true);
      }
    });
  }

  checkpassword(login, password) {
    return new Promise((resolve, reject) => {
      let userid = 1; // À remplacer par une requête bd
      if(false) {
        //erreur
        reject();
      } else {
        resolve(userid);
      }
    });
  }

}

exports.default = Users;


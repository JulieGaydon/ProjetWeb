const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Users {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }
  
  create(Pseudo, Message) {
    return new Promise((resolve, reject) => {
      let mes ={
        pseudo : Pseudo,
        message : Message,
        date : new Date(),
    };
     db.user.insert(mes);
     db.user.find({message: Message},{_id : 1},(err, docs)=>{
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

//   get(userid) {
//     return new Promise((resolve, reject) => {
//       db.user.find({},{message : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
//         if(userid == 1) {
//           resolve(docs);
//         } else {
//           reject(err);
//         }
//       })
//     });
//   }
  
}

exports.default = Users;


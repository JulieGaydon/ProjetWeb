const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Messages {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }
  
  create(Pseudo, Message) {
    console.log("create message")
    return new Promise((resolve, reject) => {
      let mes ={
        pseudo : Pseudo,
        message : Message,
        date : new Date(),
    };
     db.message.insert(mes,(err, docs)=>{
        if(err){
          console.log("erreur")
          reject(err);
        }else{
          console.log("okk")
          console.log(docs)
          resolve(docs);
        }
        })
    });
  }

  get(Pseudo) {
    return new Promise((resolve, reject) => {
      db.message.find({pseudo: Pseudo},{pseudo:1, message : 1, _id : 1, date :1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(err) {
          console.log("err",err)
          reject(err);
        } else {
          console.log("get pseudo")
          console.log("docs message",docs)
          resolve(docs);
        }
      })
    });
  }

  getAllM(Pseudo) {
    return new Promise((resolve, reject) => {
      db.message.find({},{pseudo:1, message : 1, _id : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(err) {
          console.log("err",err)
          reject(err);
        } else {
          console.log("get all")
          console.log("docs message",docs)
          resolve(docs);
        }
      })
    });
  }
  
}

exports.default = Messages;


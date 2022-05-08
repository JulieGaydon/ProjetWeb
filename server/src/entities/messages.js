const { bdd } = require("mocha/lib/interfaces");

class Messages {
  constructor(db) {
    this.db = db
  }
  
  create(Pseudo, Message) {
    return new Promise((resolve, reject) => {
      let mes ={
        pseudo : Pseudo,
        message : Message,
        date : new Date(),
    };
     db.message.insert(mes,(err, docs)=>{
        if(err){
          console.log("erreur create message")
          reject(err);
        }else{
          console.log("create message ",docs)
          resolve(docs);
        }
        })
    });
  }

  get(Pseudo) {
    return new Promise((resolve, reject) => {
      db.message.find({pseudo: Pseudo},{pseudo:1, message : 1, _id : 1, date :1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(err) {
          console.log("err get message",err)
          reject(err);
        } else {
          console.log("get message",docs)
          resolve(docs);
        }
      })
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      db.message.remove(({_id : id}),(err, docs)=>{
        if(err){
          console.log("erreur delete message")
          reject(false);
        }else{
          console.log("delete message",docs)
          resolve(true);
        }
      })
    })
  }

  getAllM(Pseudo) {
    return new Promise((resolve, reject) => {
      db.message.find({},{pseudo:1, message : 1, _id : 1},(err, docs)=>{  
        if(err) {
          console.log("err getAll message",err)
          reject(err);
        } else {
          console.log("get all message",docs)
          resolve(docs);
        }
      })
    });
  }
  
}

exports.default = Messages;


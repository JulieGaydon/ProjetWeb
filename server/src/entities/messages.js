const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Messages {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }
  
  //mettre le pesudo + user id ?
  create(Pseudo, Message) {
    console.log("create message")
    return new Promise((resolve, reject) => {
      let mes ={
        pseudo : Pseudo,
        message : Message,
        date : new Date(),
    };
     db.message.insert(mes);
     console.log("message insere")
     db.message.find({message: Message},{pseudo : 1,message : 1,_id : 1},(err, docs)=>{
        if(err){
          console.log("erreur")
          reject(err);
        }else{
          console.log("okk")
          console.log(docs[0].message, docs[0].pseudo)
          resolve(docs[0]._id);
        }
        })
    });
  }

  get(Pseudo) {
    return new Promise((resolve, reject) => {
      console.log("pseudo",Pseudo)
      db.message.find({/*pseudo : Pseudo*/},{pseudo:1, message : 1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
        if(err) {
          console.log("err",err)
          reject(err);
        } else {
          console.log("docs message",docs)
          resolve(docs);
        }
      })
    });
  }
  
}

exports.default = Messages;


const { bdd } = require("mocha/lib/interfaces");

// db.user.loadDatabase(); 

class Amities {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }
  
  create(Pseudo, Pami) {
    console.log("create lien amitie")
    return new Promise((resolve, reject) => {
      let lienA ={
        pseudo : Pseudo,
        pami : Pami,
    };
     db.amitie.insert(lienA,(err, docs)=>{
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
      db.amitie.find({pseudo: Pseudo},{pami : 1, _id:1},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
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

  delete(id){
    return new Promise((resolve, reject) => {
      db.amitie.remove(({_id : id}),(err, docs)=>{
        if(err){
          console.log("erreur")
          reject(false);
        }else{
          console.log("res docs delete",docs)
          console.log(docs)
          resolve(true);
        }
      })
    })
  }

}


exports.default = Amities;


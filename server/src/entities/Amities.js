const { bdd } = require("mocha/lib/interfaces");

class Amities {
  constructor(db) {
    this.db = db
  }
  
  create(Pseudo, Pami) {
    return new Promise((resolve, reject) => {
      let lienA ={
        pseudo : Pseudo,
        pami : Pami,
    };
     db.amitie.insert(lienA,(err, docs)=>{
        if(err){
          console.log("erreur create lien amitie")
          reject(err);
        }else{
          console.log(docs)
          resolve(docs);
        }
        })
    });
  }

  get(Pseudo) {
    return new Promise((resolve, reject) => {
      db.amitie.find({pseudo: Pseudo},{pami : 1, _id:1},(err, docs)=>{ 
        if(err) {
          console.log("err get pseudo ami",err)
          reject(err);
        } else {
          console.log("get pseudo ami",docs)
          resolve(docs);
        }
      })
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      db.amitie.remove(({_id : id}),(err, docs)=>{
        if(err){
          console.log("erreur delete")
          reject(false);
        }else{
          console.log("delete",docs)
          console.log(docs)
          resolve(true);
        }
      })
    })
  }

}


exports.default = Amities;


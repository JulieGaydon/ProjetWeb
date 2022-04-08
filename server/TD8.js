console.log("Hello word");

const { bdd } = require('mocha/lib/interfaces');
//Q3

var Datastore = require('nedb');        
// db = new Datastore();                  // creer base de donnees consistante

db = {};
db.messages =  new Datastore();
db.user =  new Datastore();

db.messages.loadDatabase();               // initialisation

// Q4, Q5
mes ={
    id_auteur : 155,
    message : 'Mon message',
    date : new Date(),
    likes : [
        {id_liker : 28},
        {id_liker : 103}
    ]
};

db.messages.insert(mes);

mes ={
    id_auteur : 103,
    message : 'Deuxieme message',
    date : new Date(),
    likes : []
};

db.messages.insert(mes);
mes ={
    id_auteur : 198,
    message : 'Troisieme message',
    date : new Date(),
    likes : [
        {id_liker : 28},
        {id_liker : 103}
    ]
};

db.messages.insert(mes);

// Q6   --Requete sur une base--

db.messages.find({},(err, docs)=>{   //on ecrit un JSON : renvoi erreur ou liste de renseignement
    if(err){
        console.log(err);
    }else{
        console.log(docs);
        console.log(docs[1].likes);         // recuperer qu'une partie
    }
})
// ne sort pas forcement l'ordre d'insertion

// Q7
db.messages.find({},{message : 1, _id : 1},(err, docs)=>{   // on veut afficher message et id --> mettre a 1
    console.log("---Q7---");
    console.log(docs);
})

// Q8 : trois parties : ce qu'on cherche, ce qu'on veut afficher, fonction executee
db.messages.find({id_auteur : 155 },{message : 1, _id : 0},(err, docs)=>{   // on veut afficher message de l'auteur ayant id 155
    console.log("---Q8---");
    console.log(docs);
})

//Q9 : asynchrone
const getDocumentID = function(id_a,texte){
    return new Promise( (resolve, reject) => {
        db.messages.find({id_auteur : id_a, message : texte},
            {_id : 1},
            (err,docs) => {
                if(err){
                    reject(err);
                }else{
                    resolve(docs[0]._id);
                }
        });
    });
}; 

//renvoie une promesse, then permet de faire traitement sur la promesse
getDocumentID(155,'Mon message').then((res)=>{
    console.log("---Q9---");
    console.log(res);
});

//Q10
getDocumentID(155,'Mon message').then((res)=>{
    db.messages.find({_id : res}, {message : 1, _id : 0},(err,docs)=>{
        console.log("---Q10---");
        console.log(docs);
    })
})

//Q11 : gt : plus grand que
db.messages.find({date : {$gt : new Date(Date.now( )-1000 *60 *60)}},
    (err,docs)=>{
        console.log("Q11");
        console.log(docs);
    }
    )
    
    console.log(new Date());
    
    //Q12
    
    db.messages.find({id_auteur : {$in : [155,198] }},
        (err,docs)=>{
            console.log("Q12");
            console.log(docs);
    })
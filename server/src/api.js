const express = require("express");
const Users = require("./entities/users.js");
const Messages = require("./entities/messages.js");
const Amities = require("./entities/Amities.js");

function init(db) {
    const router = express.Router();
    // On utilise JSON
    router.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        next();
    });
    const users = new Users.default(db.user);
    router.post("/user/login", async (req, res) => {
        try {
            const { login, password } = req.body;
            // Erreur sur la requête HTTP
            if (!login || !password) {
                console.log("pas de psswd")
                res.status(400).json({
                    status: 400,
                    message: "Requête invalide : login et password nécessaires"
                });
                return;
            }
            if(! await users.exists(login)) {
                console.log("utilisateur inconnu")
                res.status(401).json({
                    status: 401,
                    message: "Utilisateur inconnu"
                });
                return;
            }
            let userid = await users.checkpassword(login, password);
            console.log("user",userid)
            if (userid) {
                // Avec middleware express-session
                req.session.regenerate(function (err) {
                    if (err) {
                        res.status(500).json({
                            status: 500,
                            message: "Erreur interne"
                        });
                    }
                    else {
                        // C'est bon, nouvelle session créée
                        req.session.userid = userid;
                        res.status(200).json({
                            status: 200,
                            message: "Login et mot de passe accepté"
                        });
                    }
                });
                return;
            }
            // Faux login : destruction de la session et erreur
            req.session.destroy((err) => { });
            res.status(403).json({
                status: 403,
                message: "login et/ou le mot de passe invalide(s)"
            });
            return;
        }
        catch (e) {
            // Toute autre erreur
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (e || "Erreur inconnue").toString()
            });
        }
    })

    router
        .route("/user/:user")
        .get(async (req, res) => {
        console.log("get user api")
        try {
            const user = await users.get(req.params.user);
            if (!user)
            res.sendStatus(404);
            else
            console.log("get user api okk !",user)
                res.send(user);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
        .delete((req, res, next) => res.send(`delete user ${req.params.user}`));

    router.put("/user", async (req, res) => {
        const { Nom, Prenom, Pseudo, Password , AdresseM, ConfirmMDP } = req.body;
        if (!Nom || !Prenom || !Pseudo || !Password || !AdresseM || !ConfirmMDP) {
            console.log("missing fileds")
            res.status(400).send("Missing fields");
        }
        else if(Password !== ConfirmMDP){
            console.log("mot de passe differents")
            res.status(401).send("Mot de passe differents");
        }
        //utilisateur exist, on ne cree pas de nouvel utilisateur
        else if(await users.exists(Pseudo)) {
            console.log("Utilisateur deja utilise")
            res.status(401).json({
                status: 401,
                message: "Utilisateur deja utilise"
            });
            return;
        }
        else {
            console.log("okk ! creation utilisateur")
            users.create(Nom, Prenom, Pseudo, Password , AdresseM, ConfirmMDP)
                .then((user_id) => res.status(201).send({ id: user_id }))
                .catch((err) => res.status(500).send(err));
        }
    });

    // -- Messages --

    const messages = new Messages.default(db.message);
    router.put("/message", (req, res) => {
        const { Pseudo,message } = req.body;
        console.log("Message: ",message,req.body)
        if(!message){
            console.log("Message if: ",message)
            console.log("missing message")
            res.status(401).send("Missing message");
        }else{
            messages.create(Pseudo,message)
            .then((_id) => res.status(201).send({ id: _id }))
            .catch((err) => res.status(500).send(err));
        }
    });
    
    router
        .route("/message/:pseudo")
        .get(async (req, res) => {
        try {
            console.log("pseudo message :",req.params.pseudo)
            const message = await messages.get(req.params.pseudo);
            if (!message){
                console.log("message pas trouve")
                res.sendStatus(404);
            }
            else{
                console.log("message trouve")
                res.send(message);
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
    .delete(async (req, res) => {
        await messages.delete(req.params.pseudo)
        .then((data) => res.send(data))
        .catch((err) => res.send(err));
        
    })


    router
        .route("/message/All/:pseudo")
        .get(async (req, res) => {
        try {
            console.log("pseudo message :",req.params.pseudo)
            const message = await messages.getAllM(req.params.pseudo);
            if (!message){
                console.log("message pas trouve")
                res.sendStatus(404);
            }
            else{
                console.log("message trouve")
                res.send(message);
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
        .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));
    
    // --- Lien Ami ---

    const amities = new Amities.default(db.amitie);
    router.put("/ami", (req, res) => {
        const { Pseudo,Pami } = req.body;
        console.log("Message: ",Pami,req.body)
        if(!Pami || !Pseudo){
            console.log("missing message")
            res.status(401).send("Missing message");
        }else{
            amities.create(Pseudo,Pami)
            .then((_id) => res.status(201).send({ id: _id }))
            .catch((err) => res.status(500).send(err));
        }
    });

    router
        .route("/ami/:pseudo")
        .get(async (req, res) => {
        try {
            console.log("pseudo message :",req.params.pseudo)
            const Pami = await amities.get(req.params.pseudo);
            if (!Pami){
                res.sendStatus(404);
            }
            else{
                res.send(Pami);
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
        })
        .delete(async (req, res) => {
            await amities.delete(req.params.pseudo)
            .then((data) => res.send(data))
            .catch((err) => res.send(err));
            
        })
    
    return router;
}
exports.default = init;
// Set up
var express  = require('express');
var parser  = require('body-parser');
var server   = express();                               
var mongoose = require('mongoose');                   
//var AutoIncrement = require('mongoose-sequence')(mongoose);

 
// Configuration

var promise=mongoose.connect('mongodb://localhost/contactsdb', {
    useMongoClient: true,
    /* other options */
  });
server.use(parser.json())
server.use(parser.urlencoded())
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
  

// Models
var user = promise.model('user', {
    userId:Number,
    name: String,
    email: String,
    password:String,
    phone: String
});

var contact = promise.model('contact', {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    city: String,
    address: String,
    service: String,
    owner:String
});
 


//ItemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'contactId'});

    server.get('/api/user', function(req, res) {
    
           console.log("recuperation des utilisateurs");
           user.findOne({'email': req.param('email'), 'password': req.param('password')},function(err, users) {
            if (err) return handleError(err);
            else{
            console.log(req.param('email'));
            console.log(users);
            return(res.json(users)); // format JSON 
           
        }});
       });
    
    //Get users
    server.get('/api/users', function(req, res) {
               console.log("recuperation des utilisateurs");
               user.find(function(err, users) {
                if (err) return handleError(err);
                res.json(users); // format JSON 
               });
           });
     
    
    // Get user contacts

     server.get('/api/userContacts', function(req, res) {
        console.log("recuperation des contacts de l'utilisateur "+req.param('owner'));
        contact.find({'owner': req.param('owner')},function(err, contacts)  {
         if (err) return handleError(err);
         res.json(contacts); // format JSON 
        });
    });

    // Get  contacts
     server.get('/api/contacts', function(req, res) {
        
               console.log("recuperation des contacts");
               contact.find({'service': req.param('service')},function(err, contacts) {
                   if (err)
                       res.send(err)
        
                   res.json(contacts); // format  JSON 
               });
           });
           
    // Get contacts
     server.get('/api/allcontacts', function(req, res) {
        
               console.log("recuperation des contacts");
               contact.find(function(err, contacts) {
                   if (err)
                       res.send(err)
        
                   res.json(contacts); // format  JSON 
               });
           });
 
    // ajouter un nouvel utilisateur 
    server.post('/api/users', function(req, res) {
 
        console.log("creation d'un nouvel utilisateur ",req.body);
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        },  function(err, contact) {
            if (err){
                res.send(err);
            }
             else{
                 res.sendStatus(200)

             }
 
           
        });
 
    });

      // ajouter un nouveau contact 
      server.post('/api/contacts', function(req, res) {
        
               console.log("creation d'un nouveau contact ");
               contact.create({
                   firstname: req.body.firstname,
                   lastname: req.body.lastname,
                   email: req.body.email,
                   phone: req.body.phone,
                   city: req.body.city,
                   address: req.body.address,
                   service: req.body.service,
                   owner: req.body.owner
               }, function(err, contact) {
                   if (err){
                       res.send(err);
                   }
                    else{
                        res.sendStatus(200)

                    }
        
                  
               });
        
           });
       
    // delete 
    server.delete("/api/deleteContact",function(req,res){      
        contact.remove({ _id: req.body.email }, function(err) {    
         if(err){    
             res.send(err);    
         }    
         else{      
            console.log("Supression : ",req.body.email);

                res.send({data:"Record has been Deleted..!!"});               
            }    
     }
     
     );    
       })  
      
    //update
    server.put('/api/modifyContact', function(req, res) {
        contact.findOneAndUpdate({_id:req.body.contactId}, {  
             contactId: req.body.contactId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            address: req.body.address,
            service: req.body.service,
            owner: req.body.owner
        },  function(err, contact) {
            if (err){
                res.send(err);
            }
             else{
                 res.sendStatus(200)

             }
 
           
        });
            console.log("modification contact ");

 
    });
// demarrer le serveur dans un port 
server.listen(8080);
console.log("App listening on port 8080");
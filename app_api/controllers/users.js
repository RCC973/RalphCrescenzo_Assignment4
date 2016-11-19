/**
 * Created by Ralph on 11/2/2016.
 */
var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ObjectId = require('mongodb').ObjectId;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('Assignment4', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'Assignment4' database");
        db.collection('notesList', {strict:true}, function(err,collection){
            if(err){
                console.log("The 'notesList' collection doesn't exist.");
            }
        });
    }
});


module.exports.usersFindAll = function(req, res) {
    console.log("Finding All Notes for a user");
    db.collection('notesList', function(err,collection) {
        collection.find().toArray(function(err, items) {
            res.status(200);
            res.send(items);
        });
    });
};

module.exports.usersFindById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving customer: ' + id);

    db.collection('notesList', function(err, collection) {
        collection.findOne({'_id': id}, function(err, item) {
            res.status(200);
            res.send(item);
        });
    });
};


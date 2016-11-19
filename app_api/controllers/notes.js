/**
 * Created by Ralph on 11/2/2016.
 */

var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ObjectId = require('mongodb').ObjectId;

var dbURI = 'mongodb://localhost/Assignment4';

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('Assignment4', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'Assignment4' database");
        db.collection('notesList', {strict:true}, function(err,collection){
            if(err){
                console.log("The 'notesList' collection does not exist");
            }
        });
    }
});


module.exports.notesCreateOne = function (req, res){
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.notesFindAll = function (req, res){
    var id = req.params.id;
    console.log("Grabbing all notes for User " + id );
    db.collection('notesList', function(err, collection) {
        collection.findOne({'_id': id},function(err, item) {
            res.status(200);
            res.send(item.notes);
        });
    });
};

module.exports.notesUpdateOne = function (req, res){
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.notesDeleteOne = function (req, res){
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.notesFindById = function (req, res) {
    var id = req.params.id;
    var title = req.params.title;
    console.log("Grabbing " + title +  " note for User " + id );
    db.collection('notesList', function(err, collection) {
        collection.findOne({'_id': id},function(err, item) {
            var oneNote;
            for(var x = 0; x < item.notes.length; x++){
                console.log(item.notes[x].title)
                if (item.notes[x].title == title){oneNote = item.notes[x]}
            }
            res.status(200);
            res.send(oneNote);
        });
    });
}
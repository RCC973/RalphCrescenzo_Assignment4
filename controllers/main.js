/**
 * Created by Ralph on 10/11/2016.
 */
var request = require('request');

/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Home'});
};

/* editor page render variable*/
var renderEditorpage = function(req, res, responseBody){
    res.render('editor', {
        title: 'Edit Note',
        notes: responseBody
    });
};
/* GET editor page function*/
module.exports.editor = function(req, res){
    //Call API
    var path = req.params.title;
    var options = {
        url: 'http://localhost:3000/api/users/1/notes/' + path,
        method: 'GET',
        json: {},
        qs: {
            offset: 20
        }
    };

    request(options, function(err, response, body){
        if (err){
            console.log(err);
            res.render('error', {
                message: 'Error',
                error: err
            });
        } else if (response.statusCode === 200){
            renderEditorpage(req, res, body);
        } else {
            console.log(response.statusCode);
        }
    });
};
/* GET defaultNote page */
module.exports.defaultNote = function(req, res){
    res.render('defaultNote', { title: 'Default'});
};

/* list page render variable*/
var renderListpage = function(req, res, responseBody){
    res.render('list', {
        title: 'Note List',
        notes: responseBody
    });
};

/* GET 'list' page function*/
module.exports.list = function(req, res){
    //Call API
    var options = {
        url: 'http://localhost:3000/api/users/1/notes',
        method: 'GET',
        json: {},
        qs: {
            offset: 20
        }
    };

    request(options, function(err, response, body){
        if (err){
            console.log(err);
            res.render('error', {
                message: 'Error',
                error: err
            });
        } else if (response.statusCode === 200){
            renderListpage(req, res, body);
        } else {
            console.log(response.statusCode);
        }
    });
};
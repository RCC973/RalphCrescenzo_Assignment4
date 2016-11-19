/**
 * Created by Ralph on 10/11/2016.
 */
/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Home'});
};
/* GET list page */
module.exports.list = function(req, res){
    res.render('list', { title: 'Note List'});
};
/* GET editor page */
module.exports.editor = function(req, res){
    res.render('editor', { title: 'Note Editor'});
};
/* GET defaultNote page */
module.exports.defaultNote = function(req, res){
    res.render('defaultNote', { title: 'Default'});
};
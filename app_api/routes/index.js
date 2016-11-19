/**
 * Created by Ralph on 11/2/2016.
 */
var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');
var ctrlNotes = require('../controllers/notes');
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.userList);

//API

//users
router.get('/users', ctrlUsers.usersFindAll);
router.get('/users/:id', ctrlUsers.usersFindById);

// notes
router.get('/users/:id/notes', ctrlNotes.notesFindAll);
router.get('/users/:id/notes/:title', ctrlNotes.notesFindById);
router.post('/users/:id/notes/:title', ctrlNotes.notesCreateOne);
router.put('/users/:id/notes/:title', ctrlNotes.notesUpdateOne);
router.delete('/users/:id/notes/:title', ctrlNotes.notesDeleteOne);

module.exports = router;
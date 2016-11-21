var express = require('express');
var router = express.Router();
var ctrlMain = require ('../controllers/main');

/* GET pages. */
router.get('/', ctrlMain.index);
router.get('/list/default', ctrlMain.defaultNote);
router.get('/list/editor/:title', ctrlMain.editor);
router.post('/list/editor/:title', ctrlMain.editorSave);
router.get('/list', ctrlMain.list);



module.exports = router;

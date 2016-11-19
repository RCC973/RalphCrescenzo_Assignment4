var express = require('express');
var router = express.Router();
var ctrlMain = require ('../controllers/main');

/* GET pages. */
router.get('/', ctrlMain.index);
router.get('/list/default', ctrlMain.defaultNote);
router.get('/list/editor', ctrlMain.editor);
router.get('/list', ctrlMain.list);

module.exports = router;

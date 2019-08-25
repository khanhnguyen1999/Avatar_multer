var express = require('express');
var multer  = require('multer');

var router = express.Router();
var validate = require('../validate/user.validate')
var controller = require('../controllers/user.controller');
var authMiddleware = require('../middleware/auth.middleware')

var upload = multer({ dest: './public/uploads/' });

router.get('/',controller.index);
router.get('/search',controller.seach);
router.get('/product',controller.myProduct);
router.get('/create',function(req,res){
   res.render('users/create') 
});
router.get('/createproduct',function(req,res){
	res.render('users/createproduct')
})
router.get('/:id',controller.id);
router.post('/create',
	upload.single('avatar'),
	validate.create,
	controller.postCreate
);
module.exports = router;
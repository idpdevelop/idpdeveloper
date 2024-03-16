const express = require('express');

const MitraController = require('../controller/mitras.js');

const router = express.Router();

//CREATE
// router.post('/', UserController.createNewUser);
// router.post('/byadmin/', UserController.createNewUserByAdmin)

// READ 
router.get('/', MitraController.getAllMitras);

// // UPDATE 
// router.patch('/:idUser', UserController.updateUser);

// // DELETE 
// router.delete('/:idUser', UserController.deleteUser);

module.exports = router;
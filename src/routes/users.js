const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

//CREATE
router.post('/', UserController.createNewUser);
router.post('/byadmin/', UserController.createNewUserByAdmin)

// READ 
router.get('/', UserController.getAllUsers);
router.get('/:idUser', UserController.getFindUsers);
router.get('/byadmin/:idUser', UserController.getFindUsersByAdmin);
router.get('/login/:email/:password', UserController.getIdUser);



// UPDATE 
router.patch('/:idUser', UserController.updateUser);
router.patch('/byadmin/:idUser', UserController.updateUserByAdmin);

// DELETE 
router.delete('/:idUser', UserController.deleteUser);

module.exports = router;
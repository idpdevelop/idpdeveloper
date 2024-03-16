const express = require('express');

const JurusanController = require('../controller/jurusans.js');

const router = express.Router();

//CREATE
router.post('/', JurusanController.createNewJurusan);

// READ 
router.get('/', JurusanController.getAllJurusans);

// UPDATE 
router.patch('/:idJurusan', JurusanController.updateJurusan);

// DELETE 
router.delete('/:idJurusan', JurusanController.deleteJurusan);

module.exports = router;
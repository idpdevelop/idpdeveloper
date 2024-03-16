
const express = require('express');
const multer = require('multer');
const crypto = require('crypto');

const TaskController = require('../controller/tasks.js');

const router = express.Router();


// ==================================================
// const TYPE_IMAGE = {
//     "image/jpg": "jpg",
//     "image/jpeg": "jpeg",
//     "image/png": "png"
// }
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "./public/documents")
    },
    filename(req, file, cb) {
        const uuid = crypto.randomUUID();
        cb(null, uuid + file.originalname);
    }
});
const upload = multer({ storage: storage });
// ==================================================

//CREATE
router.post('/:idUser', TaskController.createNewTask);

// READ 
router.get('/', TaskController.getAllTask);
router.get('/:idUser', TaskController.getUserTask);
router.get('/:idTask/:idUser', TaskController.getTheTask);

// // UPDATE 
router.patch('/admincek/:idTask/:idUser', TaskController.updateApproveTask);
router.patch('/update/:idTask/:idUser', upload.single('tasks'), TaskController.updateTask);

// // DELETE 
// router.delete('/:idUser', UserController.deleteUser);

module.exports = router;
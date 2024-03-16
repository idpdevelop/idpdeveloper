const TasksModel = require('../models/tasks.js');
const fs = require('fs');

// READ 
const getAllTask = async (req, res) => {
    try {
        const [data] = await TasksModel.getAllTask();
        res.json({
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const getUserTask = async (req, res) => {
    const { idUser } = req.params;
    try {
        const [data] = await TasksModel.getUserTask(idUser);
        res.json({
            id_user: idUser,
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const getTheTask = async (req, res) => {
    const { idTask, idUser } = req.params;
    try {
        const [data] = await TasksModel.getTheTask(idTask, idUser);
        res.json({
            id_user: idUser,
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

//CREATE
const createNewTask = async (req, res) => {
    const { idUser } = req.params;
    try {
        await TasksModel.createNewTask(idUser);
        res.json({
            message: 'CREATE new Tasks successfully',
            data: idUser,
        });
    } catch (error) {
        console.log("error");
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// // UPDATE 

const updateTask = async (req, res) => {
    const { idTask, idUser } = req.params;
    const url = `${req.file.path}`;
    try {
        const tasklist = await TasksModel.getTheTask(idTask, idUser);
        if (tasklist[0][0].url != null) {
            fs.unlinkSync(tasklist[0][0].url);
        }
        await TasksModel.updateTask(url, idTask, idUser);
        res.json({
            message: 'UPDATE the Task successfully',
            data: {
                id_task: idTask,
                id_user: idUser,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateApproveTask = async (req, res) => {
    const { idTask, idUser } = req.params;
    const { body } = req;
    try {
        await TasksModel.updateApproveTask(idTask, idUser, body);
        const tasklist = await TasksModel.getTheTask(idTask, idUser);
        if (tasklist[0][0].status == null) {
            fs.unlinkSync(tasklist[0][0].url);
        }
        res.json({
            message: 'UPDATE the Task successfully',
            data: {
                id_task: idTask,
                id_user: idUser,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// // DELETE 
// const deleteTask = async (req, res) => {
//     fs.unlinkSync(filepath)
// }


module.exports = {
    getAllTask,
    getUserTask,
    getTheTask,
    createNewTask,
    updateTask,
    updateApproveTask,
}
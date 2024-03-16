const UsersModel = require('../models/users.js');
const TasksModel = require('../models/tasks.js');
const fs = require('fs');

// READ 
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
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
const getFindUsers = async (req, res) => {
    const { idUser } = req.params;
    try {
        const [data] = await UsersModel.getFindUsers(idUser);
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

const getFindUsersByAdmin = async (req, res) => {
    const { idUser } = req.params;
    try {
        const [data] = await UsersModel.getFindUsersByAdmin(idUser);
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

const getIdUser = async (req, res) => {
    const { email, password } = req.params;
    try {
        const [data] = await UsersModel.getIdUser(email, password);
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

//CREATE
const createNewUser = async (req, res) => {
    const { body } = req;
    try {
        await UsersModel.createNewUser(body);
        console.log(req.body);
        res.json({
            message: 'CREATE new users successfully',
            data: body,
        });
    } catch (error) {
        console.log("error");
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const createNewUserByAdmin = async (req, res) => {
    const { body } = req;
    try {
        await UsersModel.createNewUserByAdmin(body);
        // generate task  =============
        const userIdResult = await UsersModel.getIdUser(req.body.email, req.body.password_user);
        const userId = userIdResult[0][0].id_user;
        const [listtask] = await TasksModel.getAllTask();
        for (let index = 0; index < listtask.length; index++) {
            await TasksModel.createNewTask(listtask[index]["id_task"], userId);
        }

        // response =============
        res.json({
            message: 'CREATE new users successfully',
            data: body,
        });
    } catch (error) {
        console.log("error");
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}



// UPDATE 
const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE the users successfully',
            data: {
                id: idUser,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateUserByAdmin = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
        await UsersModel.updateUserByAdmin(body, idUser);
        res.json({
            message: 'UPDATE the users successfully',
            data: {
                id: idUser,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// DELETE 
const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {

        const tasklist = await TasksModel.getUserTask(idUser);
        if (tasklist[0][0].ijazah_s2 != null) {
            fs.unlinkSync(tasklist[0][0].ijazah_s2);
        }
        if (tasklist[0][0].transkrip_nilai != null) {
            fs.unlinkSync(tasklist[0][0].transkrip_nilai);
        }
        if (tasklist[0][0].transkrip_nilai != null) {
            fs.unlinkSync(tasklist[0][0].transkrip_nilai);
        }
        if (tasklist[0][0].akte != null) {
            fs.unlinkSync(tasklist[0][0].akte);
        }
        if (tasklist[0][0].ktp != null) {
            fs.unlinkSync(tasklist[0][0].ktp);
        }
        if (tasklist[0][0].foto_latarputih != null) {
            fs.unlinkSync(tasklist[0][0].foto_latarputih);
        }

        // ${req.protocol}://${req.get("host")}/
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user successfully',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}


module.exports = {
    getAllUsers,
    getFindUsers,
    getFindUsersByAdmin,
    getIdUser,
    createNewUser,
    createNewUserByAdmin,
    updateUser,
    updateUserByAdmin,
    deleteUser,
}
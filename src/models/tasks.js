const dbPool = require('../config/database');

// GET 
const getAllTask = () => {
    const SQLQuery = 'SELECT * FROM tasks';
    return dbPool.query(SQLQuery);
}

const getUserTask = (idUser) => {
    // const SQLQuery = 'SELECT * FROM task_details WHERE id_user = ' + idUser;
    const SQLQuery = 'SELECT id_task,nama_task,url,status FROM task_details join tasks USING(id_task) WHERE id_user = ' + idUser;
    return dbPool.query(SQLQuery);
}

const getTheTask = (idTask, idUser) => {
    // const SQLQuery = 'SELECT * FROM task_details WHERE id_user = ' + idUser;
    const SQLQuery = 'SELECT * FROM task_details WHERE id_user = ' + idUser + ' AND id_task = ' + idTask;
    return dbPool.query(SQLQuery);
}

// POST 
const createNewTask = (idtask, idUser) => {
    const SQLQuery = `INSERT INTO task_details (id_task,id_user) VALUES('${idtask}','${idUser}')`;
    return dbPool.query(SQLQuery);
}

// UPDATE
const updateTask = (url, idTask, idUser) => {
    const SQLQuery = `UPDATE task_details SET url='${url}',status=false WHERE id_user='${idUser}' AND id_task='${idTask}' `;
    return dbPool.query(SQLQuery);
}

const updateApproveTask = (idTask, idUser, body) => {
    // const SQLQuery = "";
    // if (body.status == null) {
    //     SQLQuery = `UPDATE task_details SET url=${body.status}, status=${body.status} WHERE id_user='${idUser}' AND id_task='${idTask}' `;
    //     console.log(body.status);
    // } else {
    // }
    if (body.status == null) {
        SQLQuery = `UPDATE task_details SET url=${body.status} ,status=${body.status} WHERE id_user='${idUser}' AND id_task='${idTask}' `;
    } else {
        SQLQuery = `UPDATE task_details SET status=${body.status} WHERE id_user='${idUser}' AND id_task='${idTask}' `;
    }
    return dbPool.query(SQLQuery);
}


module.exports = {
    getAllTask,
    getUserTask,
    getTheTask,
    createNewTask,
    updateTask,
    updateApproveTask,
}
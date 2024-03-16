const dbPool = require('../config/database');

// READ 
const getAllUsers = () => {
    const SQLQuery = 'SELECT u.id_user,nama_user, password_user, email, alamat, nohp, nama_jurusan, pekerjaan, tgllahir, jenis_kelamin, id_level,SUM(CASE WHEN td.status IS NULL THEN 1 ELSE 0 END) AS jumlah_status_null, SUM(CASE WHEN td.status = true THEN 1 ELSE 0 END) AS jumlah_status_true, SUM(CASE WHEN td.status = false THEN 1 ELSE 0 END) AS jumlah_status_false FROM users u LEFT JOIN jurusans USING(id_jurusan) LEFT JOIN task_details td ON( u.id_user = td.id_user) WHERE id_level=1 GROUP BY id_user  ORDER BY jumlah_status_false DESC, jumlah_status_null DESC, jumlah_status_true ASC';
    return dbPool.query(SQLQuery);
}

const getFindUsers = (idUser) => {
    const SQLQuery = `SELECT nama_user,nama_jurusan, jenis_kelamin, DATE_FORMAT(tgllahir, '%Y-%m-%d') as tgllahir, nohp, email, alamat, pekerjaan, url as foto_latarputih FROM users join jurusans USING(id_jurusan) join task_details USING (id_user) join tasks USING(id_task) WHERE id_user = ` + idUser + ` AND nama_task = 'foto_latarputih'`;
    return dbPool.query(SQLQuery);
}

const getFindUsersByAdmin = (idUser) => {
    const SQLQuery = `SELECT nama_user, email, password_user, id_jurusan FROM users WHERE id_user = ` + idUser;
    return dbPool.query(SQLQuery);
}

const getIdUser = async (email, password_user) => {
    const SQLQuery = `SELECT id_user FROM users WHERE email = '${email}' AND password_user = '${password_user}'`;
    return dbPool.query(SQLQuery);
}

// POST
const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (nama_user, password_user, email, alamat, nohp,	 id_jurusan, pekerjaan, tgllahir, jenis_kelamin, id_level) VALUES('${body.nama_user}', '${body.password_user}', '${body.email}','${body.alamat}','${body.nohp}','${body.id_jurusan}','${body.pekerjaan}','${body.tgllahir}','${body.jenis_kelamin}','${body.id_level}')`;
    return dbPool.query(SQLQuery);
}
const createNewUserByAdmin = async (body) => {
    const SQLQuery = `INSERT INTO users (nama_user,email, password_user, id_jurusan,id_level) VALUES('${body.nama_user}','${body.email}', '${body.password_user}','${body.id_jurusan}','${body.id_level}')`;
    return dbPool.query(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET jenis_kelamin='${body.jenis_kelamin}', tgllahir='${body.tgllahir}', nohp='${body.nohp}' ,alamat='${body.alamat}', pekerjaan='${body.pekerjaan}' WHERE id_user='${idUser}' `;
    return dbPool.query(SQLQuery);
}

const updateUserByAdmin = (body, idUser) => {
    const SQLQuery = `UPDATE users SET nama_user='${body.nama_user}', email='${body.email}', password_user='${body.password_user}' ,id_jurusan='${body.id_jurusan}' WHERE id_user='${idUser}' `;
    return dbPool.query(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id_user='${idUser}' `;
    return dbPool.query(SQLQuery);
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
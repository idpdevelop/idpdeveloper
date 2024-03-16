const dbPool = require('../config/database');

const getAllMitras = () => {
    const SQLQuery = 'SELECT * FROM mitras';
    return dbPool.query(SQLQuery);
}

// const createNewJurusan = (body) => {
//     const SQLQuery = `INSERT INTO jurusans (nama_jurusan, foto_jurusan, detail_jurusan, id_mitra) VALUES('${body.nama_jurusan}', '${body.foto_jurusan}', '${body.detail_jurusan}','${body.id_mitra}')`;
//     return dbPool.query(SQLQuery);
// }

// const updateJurusan = (body, idJurusan) => {
//     const SQLQuery = `UPDATE jurusans SET nama_jurusan='${body.nama_jurusan}', foto_jurusan='${body.foto_jurusan}',detail_jurusan='${body.detail_jurusan}',id_mitra='${body.id_mitra}' WHERE id_jurusan='${idJurusan}' `;
//     return dbPool.query(SQLQuery);
// }

// const deleteJurusan = (idJurusan) => {
//     const SQLQuery = `DELETE FROM jurusans WHERE id_jurusan='${idJurusan}' `;
//     return dbPool.query(SQLQuery);
// }

module.exports = {
    getAllMitras,
}
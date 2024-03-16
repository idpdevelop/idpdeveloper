const MitrasModel = require('../models/mitras.js');

// READ 
const getAllMitras = async (req, res) => {
    try {
        const [data] = await MitrasModel.getAllMitras();
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
// const createNewUser = async (req, res) => {
//     const { body } = req;
//     try {
//         await UsersModel.createNewUser(body);
//         console.log(req.body);
//         res.json({
//             message: 'CREATE new users successfully',
//             data: body,
//         });
//     } catch (error) {
//         console.log("error");
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         })
//     }
// }

// const createNewUserByAdmin = async (req, res) => {
//     const { body } = req;
//     try {
//         await UsersModel.createNewUserByAdmin(body);
//         console.log(req.body);
//         res.json({
//             message: 'CREATE new users successfully',
//             data: body,
//         });
//     } catch (error) {
//         console.log("error");
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         })
//     }
// }

// // UPDATE 
// const updateUser = async (req, res) => {
//     const { idUser } = req.params;
//     const { body } = req;
//     try {
//         await UsersModel.updateUser(body, idUser);
//         res.json({
//             message: 'UPDATE the users successfully',
//             data: {
//                 id: idUser,
//                 ...body,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         })
//     }
// }

// // DELETE 
// const deleteUser = async (req, res) => {
//     const { idUser } = req.params;
//     try {
//         await UsersModel.deleteUser(idUser);
//         res.json({
//             message: 'DELETE user successfully',
//             data: null,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         })
//     }
// }


module.exports = {
    getAllMitras,
}
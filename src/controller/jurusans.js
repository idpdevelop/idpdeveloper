const JurusanModel = require('../models/jurusans.js');

// READ 
const getAllJurusans = async (req, res) => {
    try {
        const [data] = await JurusanModel.getAllJurusans();
        res.json({
            message: "GET all jurusan successfully",
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
const createNewJurusan = async (req, res) => {
    const { body } = req;
    try {
        await JurusanModel.createNewJurusan(body);
        console.log(req.body);
        res.json({
            message: 'CREATE new jurusan successfully',
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
const updateJurusan = async (req, res) => {
    const { idJurusan } = req.params;
    const { body } = req;
    try {
        await JurusanModel.updateJurusan(body, idJurusan);
        res.json({
            message: 'UPDATE the jurusans successfully',
            data: {
                id: idJurusan,
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
const deleteJurusan = async (req, res) => {
    const { idJurusan } = req.params;
    try {
        await JurusanModel.deleteJurusan(idJurusan);
        res.json({
            message: 'DELETE jurusans successfully',
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
    getAllJurusans,
    createNewJurusan,
    updateJurusan,
    deleteJurusan,
}
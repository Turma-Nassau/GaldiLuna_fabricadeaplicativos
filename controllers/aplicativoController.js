const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const appModel = require('../models/aplicativo')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarAplicativo = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await appModel.create({
        nome_aplicativo: req.body.nome,
        descricao_aplicativo: req.body.descricao,
        valor_aplicativo: req.body.valor,
        userId: req.body.userId,
    }).then((result) => {
        res.status(201).json({
            message: "Aplicativo criado com sucesso!",
            aplicativo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar aplicativo",	
            error: err
        });
    });
}

exports.verAplicativoPorId = async (req, res) => {
    console.log('GET');
    await appModel.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Aplicativo encontrado",
            aplicativo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar aplicativo",
            error: err
        });
    });
}

exports.verAplicativosPorUsuario = async (req, res) => {
    console.log('GET');
    await appModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Aplicativos encontrados",
            aplicativos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar aplicativos",
            error: err
        });
    });
}

exports.verTodosAplicativos = async (req, res) => {
    console.log('GET');
    await appModel.findAll().then((result) => {
        res.status(200).json({
            message: "Aplicativos encontrados",
            aplicativos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar aplicativos",
            error: err
        });
    });
}

exports.atualizarAplicativo = async (req, res) => {
    console.log('PATCH');
    await appModel.update({
        nome_aplicativo: req.body.nome,
        descricao_aplicativo: req.body.descricao,
        valor_aplicativo: req.body.valor,
        userId: req.body.userId,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Aplicativo atualizado",
            aplicativo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar aplicativo",
            error: err
        });
    });
}

exports.deletarAplicativo = async (req, res) => {
    console.log('DELETE');
    await appModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Aplicativo deletado",
            aplicativo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar aplicativo",
            error: err
        });
    });
}
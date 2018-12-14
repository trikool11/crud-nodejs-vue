const UserModel = require('../models/UserModel')

module.exports = {
    users: (req, res, next) => {
        UserModel.findAll().then(result => {//, limit: 10 { where: { state: '1' }}
            res.json(result)
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        })
    },
    getUserById: (req, res, next) => {
        UserModel.findOne({ where: { id: req.body.id } }).then(result => {
            res.json(result)
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
    },
    updateuser: (req, res, next) => {       
        UserModel.update({ name: req.body.name, last_name: req.body.last_name, user: req.body.user, password: req.body.password }, { where: { id: req.body.id }}).then((result) => {
            res.json(result);            
        }).catch((err) => {
            res.json(err);            
        });
    },
    deleteuser: (req, res, next) => {
        UserModel.destroy({ where: { id: req.body.id }}).then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
    },
    changeStateUser: (req, res, next) => {
        UserModel.update({ state: req.body.state }, { where: { id: req.body.id }}).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)
        });
    }
}
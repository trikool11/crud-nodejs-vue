const UserModel = require('../models/UserModel')

module.exports = {
    users: (req, res, next) => {
        UserModel.findAll({ where: { state: '1' }, limit: 10 }).then(result => {
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
    actualizar: (req, res, next) => {
        UserModel.update(req.body).then((result) => {
            res.json(result);            
        }).catch((err) => {
            res.json(err);            
        });
    }
}
const{ Sequelize, sequelize } = require('../config/db')

const UserModel = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    user: { type: Sequelize.STRING},
    name: { type: Sequelize.STRING},
    last_name: { type: Sequelize.STRING},
    full_name: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING},
    phone: { type: Sequelize.STRING},
    user_category_id: { type: Sequelize.INTEGER },
    category: { type: Sequelize.STRING},
    password: { type: Sequelize.STRING},
    password_bcrypt: { type: Sequelize.STRING},
    gender: { type: Sequelize.STRING},
    birthdate: { type: Sequelize.DATE, defaultValue: '' },
    dni: { type: Sequelize.STRING},
    avatar: { type: Sequelize.STRING},
    state: { type: Sequelize.INTEGER },
    adress: { type: Sequelize.STRING},
    department: { type: Sequelize.STRING},
    province: { type: Sequelize.STRING},
    company: { type: Sequelize.STRING},
    nivel: { type: Sequelize.STRING},
    curso: { type: Sequelize.STRING},
    terms_conditions: { type: Sequelize.INTEGER },
    alias: { type: Sequelize.STRING},
    role: { type: Sequelize.STRING},
    createdAt: { type: Sequelize.DATE, defaultValue: '' },
    updatedAt: { type: Sequelize.DATE, defaultValue: '' }
})

module.exports = UserModel
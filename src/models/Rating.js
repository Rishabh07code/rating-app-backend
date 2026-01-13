import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db.js';
import User from './User.js';
import Store from './Store.js';

const Rating = sequelize.define('Rating', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
}, {
    timestamps: true,
});

export default Rating;

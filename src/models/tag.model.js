import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Tag extends Model{};

Tag.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true // sql : UNIQUE
  },
  color: {
    type: DataTypes.CHAR(7)
  }
}, {
  sequelize,
  tableName: 'tag'
});
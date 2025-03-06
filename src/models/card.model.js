import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class Card extends Model{};

Card.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  color: {
    type: DataTypes.CHAR(7)
  }
}, {
  sequelize,
  tableName: 'card'
});
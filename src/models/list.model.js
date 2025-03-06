import { Model, DataTypes } from "sequelize";
import { sequelize } from './client.js';

export class List extends Model{};

List.init({
  // Avant d'interpreter ma configuration de colonnes, sequelize va ajouter automatiquement une colonne id de type INTEGER, PRIMARY KEY et GENERATED ALWAYS AS IDENTITY. Et également les colonnes created_at et updated_at de type TIMESTAMPTZ dont j'ai defini le nom dans la configuration de sequelize
  title: {
    type: DataTypes.TEXT,
    allowNull: false // sql : NOT NULL
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1 // sql : DEFAULT 1
  }
}, {
  sequelize, // sequelize: sequelize
  tableName: 'list'
});
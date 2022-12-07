'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.teacher.hasMany(models.students, {
        foreignKey: {
          name:'teacher_id'
        }
      })
    }
  }
  teacher.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teacher',
  });
  return teacher;
};
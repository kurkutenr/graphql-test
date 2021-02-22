import bcrypt from 'bcrypt';

const retailer = (sequelize, DataTypes) => {
  const Retailer = sequelize.define('retailer', {
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    retailerId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  });

  return Retailer;
};

export default retailer;

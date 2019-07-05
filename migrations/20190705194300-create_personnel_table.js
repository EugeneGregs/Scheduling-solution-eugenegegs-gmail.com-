'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('personnel', {
      personnel_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    personnel_onames: Sequelize.STRING(45),
    personnel_fname: {
        type: Sequelize.STRING(20),
        allowNull: false 
    },
    personnel_email: Sequelize.STRING(45),
    personnel_phone: Sequelize.STRING(45),
    personnel_password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: 'e10adc3949ba59abbe56e057f20f883e'
    },
    personnel_status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
    },
    last_login: Sequelize.DATE,
    personnel_type_id: {
        type: Sequelize.INTEGER(11),
        defaultValue: 1
    },
    reset_password: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('personnel');
  }
};

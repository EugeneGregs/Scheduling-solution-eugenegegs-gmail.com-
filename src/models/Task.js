const Sequelize = require('sequelize');

module.exports = sequelize.define("Task", {
    task_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    personnel_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    task_status_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    modified_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    last_modified: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    in_progress: Sequelize.DATE,
    completed: Sequelize.DATE,
    defered: Sequelize.DATE,
    customer_first_name: Sequelize.STRING(100),
    customer_last_name: Sequelize.STRING(100),
    customer_city: Sequelize.STRING(100),
    customer_username: Sequelize.STRING(100),
    inserted: Sequelize.DATE,
    personnel_first_name: Sequelize.STRING(100),
    personnel_other_name: Sequelize.STRING(100),
    personnel_phone: Sequelize.STRING(50),
    task_status_name: Sequelize.STRING(50),
    customer_location: Sequelize.STRING(200),
    customer_gender: Sequelize.STRING(10),
    customer_age: Sequelize.INTEGER(11),
    customer_access_code: Sequelize.TINYINT(1),
    customer_splash_page: Sequelize.TINYINT(1),
    customer_mpesa: Sequelize.TINYINT(1),
    customer_autoplay: Sequelize.TINYINT(1),
    customer_comments: Sequelize.TEXT,
    customer_updated: Sequelize.DATE,
    customer_updated_by: Sequelize.INTEGER(11),
    agentId: Sequelize.INTEGER(11),
    customerId: Sequelize.BIGINT(20)


})
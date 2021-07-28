'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Database_Connections', [
            {
                name: "homewor",
                description: "Tabla de Homework",
                port: '5432',
                host: 'localhost',
                user: 'postgres',
                password: '12345678',
            }
        ])

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Database_Connections');
    }
};

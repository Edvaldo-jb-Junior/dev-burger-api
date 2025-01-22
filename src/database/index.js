/*'use strict';

/** @type {import('sequelize-cli').Migration} */
/**module.exports = {
  async up (queryInterface, Sequelize) {
     
     await queryInterface.createTable('users', { 
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
     });
  },

   async down  ( queryInterface)  {
    await queryInterface.dropTable('users');
     
  }
};*/


import Sequelize from "sequelize";

import configDatabase from "../config/database";

import User from "../app/models/User";

const models = [User];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(configDatabase);
        models.map((model) => model.init(this.connection));

    }
};

export default new Database()
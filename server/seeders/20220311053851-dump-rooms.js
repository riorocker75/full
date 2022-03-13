'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert("rooms", [
      {
        roomName: "Confrence Room",
        costPerHour: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Discussion Room",
        costPerHour: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Event Space",
        costPerHour: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("rooms", null, {});

  }
};

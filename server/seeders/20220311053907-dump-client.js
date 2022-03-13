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
    return queryInterface.bulkInsert("clients", [
      {
        name: "James Bond",
        email: "james.bond@email.com",
        phone: "+112345678",
        credit: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wonder Woman",
        email: "wonder.woman@email.com",
        phone: "+1123456789 	",
        credit: 10,
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
    return queryInterface.bulkDelete("clients", null, {});

  }
};

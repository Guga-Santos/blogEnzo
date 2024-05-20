'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', 
    [{
      id: 1,
      displayName: "Enzo da Hora",
      email: "enzodahora@email.com",
      password: "123456",
      image: "https://pbs.twimg.com/profile_images/1668065793039368193/Y7KxpZNE_400x400.jpg"
      
    },
    {
      id: 2,
      displayName: "Oscar Agra",
      email: "oscar@email.com",
      password: "019283",
      image: "https://i1.sndcdn.com/avatars-000028594048-p0mjf9-t240x240.jpg"
      
    },
    {
      id: 3,
      displayName: "Aldo de Moura",
      email: "aldoritmos@email.com",
      password: "x23x24",
      image: "https://www.unit.br/hubfs/_MGL6500.jpg"
      
    }

  ], { timestamp: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

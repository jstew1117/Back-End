'use strict';

/** @type {import('sequelize-cli').Migration} */
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

     let teacher = [];

     for (let i = 1; i < 1; i++) {
   
       teacher.push({
         name: `teacher: ${i}`,
         email: `email ${i}@yahoo.com`,
         subject: `subject ${i}`,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString()
       });
     };

     let students = [];

     for (let i = 1; i < 10; i++) {
   
       students.push({
         name: `student ${i}`,
         grade: `grade ${i}`,
         teacher_id: 1,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString()
       });
     };

     for (let i = 1; i < 10; i++) {
   
       students.push({
         name: `student ${i}`,
         grade: `grade ${i}`,
         teacher_id: 2,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString()
       });
     };


     await queryInterface.bulkInsert('teachers', teachers);
     await queryInterface.bulkInsert('students', students);
  },

  


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

/**
 * student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    lastname: { type: 'string', required: true },
    gender: { type: 'string', required: true },
    birthDate: { type: 'ref', columnType: 'datetime' },
    room: {
      model: 'Room',
      columnName: 'roomId',
    },
  },
};

/**
 * student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    level: { type: 'number', required: true },
    division: { type: 'string', required: true },
  },
};

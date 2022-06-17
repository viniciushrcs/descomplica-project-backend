const knex = require('knex')

const { postgres } = require('../../../config')

const connection = knex(postgres)

module.exports = connection

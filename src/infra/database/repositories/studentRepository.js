const knex = require('./connection')

class StudentRepository {
  constructor() {
    this.knex = knex
  }
}

module.exports = StudentRepository

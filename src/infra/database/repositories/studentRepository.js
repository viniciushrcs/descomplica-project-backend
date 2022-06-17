const knex = require('./connection')

class StudentRepository {
  constructor() {
    this.knex = knex
  }

  async getAll() {
    try {
      const response = await this.knex('student')
      if (!response || response.length === 0) return null
      return response
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to get all registers from student table'
      )
    }
  }
}

module.exports = StudentRepository

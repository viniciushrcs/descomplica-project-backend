const { v4: generateNewUUID } = require('uuid')
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

  async getStudent(filter) {
    try {
      const { name = null, cpf = null, email = null } = filter
      const response = await this.knex('student').where((query) => {
        if (name) {
          query.where('name', name)
        }

        if (cpf) {
          query.where('cpf', cpf)
        }

        if (email) {
          query.where('email', email)
        }
      })

      if (!response[0]) return null
      return response[0]
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to get one register from student table'
      )
    }
  }

  async createStudent({ name = null, email = null, cpf = null }) {
    try {
      const response = await this.knex('student').insert({
        id: generateNewUUID(),
        name,
        email,
        cpf,
      })

      if (!response) return null
      return {
        name,
        email,
        cpf,
      }
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to insert one register in student table'
      )
    }
  }

  async editStudent({ name = null, email = null, cpf = null }) {
    try {
      const response = await this.knex('student')
        .where('cpf', cpf)
        .orWhere('email', email)
        .update({
          name,
          email,
          cpf,
        })

      if (!response) return null
      return {
        name,
        email,
        cpf,
      }
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to edit one register in student table'
      )
    }
  }
}

module.exports = StudentRepository

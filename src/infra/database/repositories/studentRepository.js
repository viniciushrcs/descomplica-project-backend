const { v4: generateNewUUID } = require('uuid')

class StudentRepository {
  constructor(db) {
    this.db = db
  }

  async getAll() {
    try {
      const response = await this.db('student').returning('*')

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
      const { name, cpf, email } = filter
      const response = await this.db('student')
        .returning('*')
        .where((query) => {
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

  async createStudent(newStudent) {
    try {
      const { name, email, cpf } = newStudent
      const response = await this.db('student').insert({
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

  async editStudent(student) {
    try {
      const { name, email, cpf } = student
      const response = await this.db('student').where('cpf', cpf).update({
        name,
        email,
        cpf,
      })

      if (!response) return null
      return student
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to edit one register in student table'
      )
    }
  }

  async deleteStudent(cpf) {
    try {
      const response = await this.db('student').where('cpf', cpf).delete()

      if (!response) return null
      return true
    } catch (error) {
      throw new Error(
        'An error ocurred while trying to delete one register in student table'
      )
    }
  }
}

module.exports = StudentRepository

const { ApolloError } = require('apollo-server')
const StudentRepository = require('../../../infra/database/repositories/studentRepository')

class StudentService {
  constructor() {
    this.studentRepository = new StudentRepository()
  }

  async getStudents() {
    try {
      const students = await this.studentRepository.getAll()
      return students
    } catch (error) {
      throw new ApolloError(error)
    }
  }

  async getStudent({ name = null, cpf = null, email = null }) {
    try {
      const student = await this.studentRepository.getStudent({
        name,
        cpf,
        email,
      })
      return student
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}

module.exports = StudentService

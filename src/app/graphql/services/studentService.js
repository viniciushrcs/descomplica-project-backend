const { ApolloError, UserInputError } = require('apollo-server')
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

  async createStudent(newStudent) {
    const { name = null, cpf = null, email = null } = newStudent
    if (!name || !cpf || !email)
      throw new UserInputError('All parameters must be passed')

    const isStudentRegistered = await this.getStudent({
      cpf,
    })

    if (isStudentRegistered)
      throw new ApolloError('User already registered, try to edit')

    try {
      const newStudentResponse = await this.studentRepository.createStudent({
        name,
        cpf,
        email,
      })

      return newStudentResponse
    } catch (error) {
      throw new ApolloError(error)
    }
  }

  async editStudent(student) {
    const { name = null, cpf = null, email = null } = student
    if (!name || !cpf || !email)
      throw new UserInputError('All parameters must be passed')

    const studentExists = await this.getStudent({
      cpf,
    })

    if (!studentExists)
      throw new ApolloError('User does not exist, try to create a new student')

    try {
      const editStudentResponse = await this.studentRepository.editStudent(
        student
      )

      return editStudentResponse
    } catch (error) {
      throw new ApolloError(error)
    }
  }

  async deleteStudent(studentCPF) {
    const { cpf } = studentCPF
    if (!cpf) throw new UserInputError('CPF must be passed')

    const studentExists = await this.getStudent({
      cpf,
    })

    if (!studentExists)
      throw new ApolloError('User cannot be deleted since it does not exist')

    try {
      await this.studentRepository.deleteStudent(cpf)

      return true
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}

module.exports = StudentService

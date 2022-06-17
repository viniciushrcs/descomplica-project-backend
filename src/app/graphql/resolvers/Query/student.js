const StudentRepository = require('../../../../infra/database/repositories/studentRepository')

const studentRepository = new StudentRepository()

const queries = {
  async getStudents() {
    const students = await studentRepository.getAll()
    return students
  },

  async getStudent(_, { name, cpf, email }) {
    const student = await studentRepository.getStudent({
      name,
      cpf,
      email,
    })
    return student
  },
}

module.exports = queries

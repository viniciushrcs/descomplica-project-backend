const StudentRepository = require('../../../../infra/database/repositories/studentRepository')

const studentRepository = new StudentRepository()

const queries = {
  async getStudents() {
    const students = await studentRepository.getAll()
    return students
  },
}

module.exports = queries

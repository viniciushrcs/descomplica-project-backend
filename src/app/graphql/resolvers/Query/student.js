const StudentService = require('../../services/studentService')

const studentService = new StudentService()

const queries = {
  async getStudents() {
    const students = await studentService.getStudents()
    return students
  },

  async getStudent(_, filter) {
    const student = await studentService.getStudent(filter)
    return student
  },
}

module.exports = queries

const StudentService = require('../../services/studentService')

const studentService = new StudentService()

const mutations = {
  async createStudent(_, newStudent) {
    const newStudentResponse = await studentService.createStudent(newStudent)

    return newStudentResponse
  },

  async editStudent(_, student) {
    const editStudentResponse = await studentService.editStudent(student)

    return editStudentResponse
  },

  async deleteStudent(_, cpf) {
    const deleteStudentResponse = await studentService.deleteStudent(cpf)

    return deleteStudentResponse
  },
}

module.exports = mutations

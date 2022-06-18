const StudentRepository = require('../../../../infra/database/repositories/studentRepository')

const studentRepository = new StudentRepository()

const mutations = {
  async createStudent(_, newStudent) {
    const { name, cpf, email } = newStudent
    if (!name || !cpf || !email)
      throw new Error('All parameters must be passed')

    const newStudentResponse = await studentRepository.createStudent({
      name,
      cpf,
      email,
    })

    return newStudentResponse
  },

  async editStudent(_, updateStudent) {
    const { name, cpf, email } = updateStudent
    if (!name || !cpf || !email)
      throw new Error('All parameters must be passed')

    const editStudentResponse = await studentRepository.editStudent({
      name,
      cpf,
      email,
    })

    return editStudentResponse
  },
}

module.exports = mutations

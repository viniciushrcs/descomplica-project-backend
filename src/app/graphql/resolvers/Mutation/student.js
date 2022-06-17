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
}

module.exports = mutations

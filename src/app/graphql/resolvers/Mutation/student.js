const StudentRepository = require('../../../../infra/database/repositories/studentRepository')

const studentRepository = new StudentRepository()

const mutations = {
  async createStudent(_, { name, cpf, email }) {
    const newStudent = await studentRepository.createStudent({
      name,
      cpf,
      email,
    })

    return newStudent
  },
}

module.exports = mutations

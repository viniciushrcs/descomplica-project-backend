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

  async deleteStudent(_, { cpf }) {
    if (!cpf) throw new Error('CPF must be passed as parameter')

    const studentToBeDeleted = await studentRepository.getStudent({
      cpf,
    })

    if (!studentToBeDeleted)
      throw new Error(`Could not find a student with cpf: ${cpf}`)

    await studentRepository.deleteStudent({
      cpf,
      name: studentToBeDeleted.name,
      email: studentToBeDeleted.email,
    })

    return true
  },
}

module.exports = mutations

const { studentMutationMocks } = require('../mutations')

const {
  createStudentValidReturn,
  createStudentEmptyVariableError,
  editStudentEmptyVariableError,
  editStudentValidReturn,
  deleteStudentEmptyVariableError,
  deleteStudentValidReturn,
} = studentMutationMocks

module.exports = {
  Mutation: {
    createStudent: (_, { email, name, cpf }) => {
      if (!email || !name || !cpf) throw createStudentEmptyVariableError
      return createStudentValidReturn
    },
    editStudent: (_, { email, name, cpf }) => {
      if (!email || !name || !cpf) throw editStudentEmptyVariableError
      return editStudentValidReturn
    },
    deleteStudent: (_, { cpf }) => {
      if (!cpf) throw deleteStudentEmptyVariableError
      return deleteStudentValidReturn
    },
  },
}

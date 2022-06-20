const { UserInputError } = require('apollo-server')

const getStudentsValidReturn = [
  {
    cpf: 'cpf1',
    name: 'name1',
    email: 'email1',
  },
  {
    cpf: 'cpf2',
    name: 'name2',
    email: 'email12',
  },
]

const getStudentValidReturn = {
  cpf: 'cpf3',
  name: 'name3',
  email: 'email3',
}

const getStudentsErrorReturn = new Error(
  'Error: An error ocurred while trying to get all registers from student table'
)

const getStudentErrorReturn = new Error(
  'Error: An error ocurred while trying to get one register from student table'
)

const createStudentErrorNoParameterReturn = new UserInputError(
  'All parameters must be passed'
)

const editStudentErrorNoParameterReturn = new UserInputError(
  'All parameters must be passed'
)

const deleteStudentErrorNoParameterReturn = new UserInputError(
  'CPF must be passed'
)

const createStudentErrorReturn = new Error(
  'Error: An error ocurred while trying to insert one register in student table'
)

const createStudentErrorAlreadyExistsReturn = new Error(
  'Student already registered, try to edit'
)

const editStudentErrorNotExistsReturn = new Error(
  'Student does not exist, try to create a new student'
)

const createStudentValidReturn = {
  cpf: 'cpf4',
  name: 'name4',
  email: 'email4',
}

const editStudentValidReturn = {
  cpf: 'cpf5',
  name: 'name5',
  email: 'email5',
}

const editStudentErrorReturn = new Error(
  'An error ocurred while trying to edit one register in student table'
)

const deleteStudentValidReturn = true

const deleteStudentErrorNotExistsReturn = new Error(
  'Student cannot be deleted since it does not exist'
)

const deleteStudentErrorReturn = new Error(
  'An error ocurred while trying to delete one register in student table'
)

module.exports = {
  getStudentsValidReturn,
  getStudentValidReturn,
  getStudentsErrorReturn,
  getStudentErrorReturn,
  createStudentErrorReturn,
  createStudentValidReturn,
  editStudentValidReturn,
  editStudentErrorReturn,
  deleteStudentValidReturn,
  deleteStudentErrorReturn,
  createStudentErrorNoParameterReturn,
  createStudentErrorAlreadyExistsReturn,
  editStudentErrorNoParameterReturn,
  editStudentErrorNotExistsReturn,
  deleteStudentErrorNotExistsReturn,
  deleteStudentErrorNoParameterReturn,
}

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

const createStudentErrorReturn = new Error(
  'Error: An error ocurred while trying to insert one register in student table'
)

const createStudentErrorAlreadyExistsReturn = new Error(
  'User already registered, try to edit'
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
}

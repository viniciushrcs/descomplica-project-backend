const { UserInputError } = require('apollo-server')

const getStudents = {
  validReturn: [
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
  ],
  errorReturn: new Error(
    'Error: An error ocurred while trying to get all registers from student table'
  ),
}

const getStudent = {
  validReturn: {
    cpf: 'cpf3',
    name: 'name3',
    email: 'email3',
  },
  errorReturn: new Error(
    'Error: An error ocurred while trying to get one register from student table'
  ),
}

const createStudent = {
  validReturn: {
    cpf: 'cpf4',
    name: 'name4',
    email: 'email4',
  },
  noParameterErrorReturn: new UserInputError('All parameters must be passed'),
  errorReturn: new Error(
    'Error: An error ocurred while trying to insert one register in student table'
  ),
  alreadyExistsErrorReturn: new Error(
    'Student already registered, try to edit'
  ),
}

const editStudent = {
  validReturn: {
    cpf: 'cpf5',
    name: 'name5',
    email: 'email5',
  },
  noParameterErrorReturn: new UserInputError('All parameters must be passed'),
  studentNotExistsErrorReturn: new Error(
    'Student does not exist, try to create a new student'
  ),
  errorReturn: new Error(
    'An error ocurred while trying to edit one register in student table'
  ),
}

const deleteStudent = {
  noParameterErrorReturn: new UserInputError('CPF must be passed'),
  validReturn: true,
  errorReturn: new Error(
    'An error ocurred while trying to delete one register in student table'
  ),
  studentNotExistsErrorReturn: new Error(
    'Student cannot be deleted since it does not exist'
  ),
}

module.exports = {
  getStudent,
  getStudents,
  createStudent,
  editStudent,
  deleteStudent,
}

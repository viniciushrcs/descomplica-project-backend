const getAllValidReturn = [
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

const getAllErrorReturn = new Error(
  'An error ocurred while trying to get all registers from student table'
)

const getStudentErrorReturn = new Error(
  'An error ocurred while trying to get one register from student table'
)

const createStudentErrorReturn = new Error(
  'An error ocurred while trying to insert one register in student table'
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
  getAllValidReturn,
  getStudentValidReturn,
  getAllErrorReturn,
  getStudentErrorReturn,
  createStudentErrorReturn,
  createStudentValidReturn,
  editStudentValidReturn,
  editStudentErrorReturn,
  deleteStudentValidReturn,
  deleteStudentErrorReturn,
}

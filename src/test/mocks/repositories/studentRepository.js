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

const errorReturn = new Error(
  'An error ocurred while trying to get all registers from student table'
)

module.exports = {
  getAllValidReturn,
  getStudentValidReturn,
  errorReturn,
}

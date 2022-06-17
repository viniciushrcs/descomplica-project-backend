const validReturn = [
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

const errorReturn = new Error(
  'An error ocurred while trying to get all registers from student table'
)

module.exports = {
  validReturn,
  errorReturn,
}

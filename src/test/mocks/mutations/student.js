const createStudentValidReturn = {
  cpf: 'cpf1',
  name: 'name1',
  email: 'email1',
}

const createStudentNoVariableError = (variable) =>
  `Variable "$${variable}" of required type "String!" was not provided.`

const createStudentEmptyVariableError = new Error(
  'All parameters must be passed'
)

module.exports = {
  createStudentValidReturn,
  createStudentNoVariableError,
  createStudentEmptyVariableError,
}

const createStudentValidReturn = {
  cpf: 'cpf1',
  name: 'name1',
  email: 'email1',
}

const createStudentNoVariableError = (variable) =>
  `Variable "$${variable}" of required type "String!" was not provided.`

module.exports = {
  createStudentValidReturn,
  createStudentNoVariableError,
}

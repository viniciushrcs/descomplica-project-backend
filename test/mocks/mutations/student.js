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

const editStudentNoVariableError = (variable) =>
  `Variable "$${variable}" of required type "String!" was not provided.`

const editStudentEmptyVariableError = new Error('All parameters must be passed')

const editStudentValidReturn = {
  cpf: 'cpf2',
  name: 'name2',
  email: 'email2',
}

const deleteStudentValidReturn = true

const deleteStudentNoVariableError = `Variable "$cpf" of required type "String!" was not provided.`

const deleteStudentEmptyVariableError = new Error(
  'CPF must be passed as parameter'
)

const deleteStudentNotFound = new Error(
  'Could not find a student with cpf: cpf'
)

module.exports = {
  createStudentValidReturn,
  createStudentNoVariableError,
  createStudentEmptyVariableError,
  editStudentNoVariableError,
  editStudentEmptyVariableError,
  editStudentValidReturn,
  deleteStudentValidReturn,
  deleteStudentEmptyVariableError,
  deleteStudentNoVariableError,
  deleteStudentNotFound,
}

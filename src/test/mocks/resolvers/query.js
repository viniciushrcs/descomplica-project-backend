const { studentQueryMocks } = require('../queries')

const { getStudentValidReturn, getStudentsValidReturn } = studentQueryMocks

module.exports = {
  Query: {
    getStudents: () => getStudentsValidReturn,
    getStudent: () => getStudentValidReturn,
  },
}

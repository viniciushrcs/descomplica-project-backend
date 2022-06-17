const typeDefs = `
  type Mutation {
  }

  type Query {
    getStudent(cpf: String, name: String, email: String): Student
    getStudents: [Student]
  }

  type Student {
    id: ID
    name: String
    cpf: String
    email: String
  }
`

module.exports = typeDefs

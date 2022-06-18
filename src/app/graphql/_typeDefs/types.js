const typeDefs = `
  type Mutation {
    createStudent(cpf: String!, name: String!, email: String!): Student
    editStudent(cpf: String!, name: String!, email: String!): Student
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

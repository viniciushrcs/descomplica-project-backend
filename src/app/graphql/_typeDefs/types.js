const typeDefs = `
  type Mutation {
  }

  type Query {
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

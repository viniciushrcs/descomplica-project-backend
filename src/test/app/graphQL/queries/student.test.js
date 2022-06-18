const { ApolloServer } = require('apollo-server')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const typeDefs = require('../../../../app/graphql/_typeDefs/types')
const { queriesMock } = require('../../../mocks')
const { queryResolverMock } = require('../../../mocks/resolvers')

const {
  studentQueryMocks: { getStudentValidReturn, getStudentsValidReturn },
} = queriesMock

const testServer = new ApolloServer({
  typeDefs,
  resolvers: queryResolverMock,
  mockEntireSchema: false,
})

describe('Student queries', () => {
  it('Should return all students in getStudents query', async () => {
    const result = await testServer.executeOperation({
      query: `query getStudents {
        getStudents {
          cpf
          name
          email
        }
      }`,
    })

    expect(result.data.getStudents[0]).to.haveOwnProperty('cpf')
    expect(result.data.getStudents[0]).to.haveOwnProperty('name')
    expect(result.data.getStudents[0]).to.haveOwnProperty('email')
    expect(result.data.getStudents).to.be.deep.equal(getStudentsValidReturn)
  })

  it('Should return one student in getStudent query', async () => {
    const result = await testServer.executeOperation({
      query: `query getStudent {
        getStudent(name: "nome" cpf: "111111111" email: "email@email.com") {
          cpf
          name
          email
        }
      }
      `,
    })

    expect(result.data.getStudent).to.haveOwnProperty('cpf')
    expect(result.data.getStudent).to.haveOwnProperty('name')
    expect(result.data.getStudent).to.haveOwnProperty('email')
    expect(result.data.getStudent).to.be.deep.equal(getStudentValidReturn)
  })
})

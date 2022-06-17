const { ApolloServer } = require('apollo-server')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const typeDefs = require('../../../app/graphql/_typeDefs/types')
const { queriesMock } = require('../../mocks')

const {
  studentQueryMocks: { validReturn },
} = queriesMock

const resolversMock = {
  Query: {
    getStudents: () => validReturn,
  },
}

const testServer = new ApolloServer({
  typeDefs,
  resolvers: resolversMock,
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
    expect(result.data.getStudents).to.be.deep.equal(validReturn)
  })
})

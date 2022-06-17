const { ApolloServer } = require('apollo-server')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const typeDefs = require('../../../app/graphql/_typeDefs/types')
const { mutationsMock } = require('../../mocks')

const {
  studentMutationMocks: {
    createStudentValidReturn,
    createStudentNoVariableError,
  },
} = mutationsMock

const resolversMock = {
  Mutation: {
    createStudent: () => createStudentValidReturn,
  },
}

const testServer = new ApolloServer({
  typeDefs,
  resolvers: resolversMock,
  mockEntireSchema: false,
})

describe('Student mutations', () => {
  it('Should throws an error when createStudent is called without passing cpf', async () => {
    const result = await testServer.executeOperation({
      query: `mutation($cpf: String!, $name: String!, $email: String!) {
        createStudent(cpf: $cpf, name: $name, email: $email) {
          cpf
          name
          email
        }
      }`,
      variables: {
        name: 'name1',
        email: 'email1',
      },
    })

    expect(result.errors[0].message).to.be.equal(
      createStudentNoVariableError('cpf')
    )
  })

  it('Should throws an error when createStudent is called without passing name', async () => {
    const result = await testServer.executeOperation({
      query: `mutation($cpf: String!, $name: String!, $email: String!) {
        createStudent(cpf: $cpf, name: $name, email: $email) {
          cpf
          name
          email
        }
      }`,
      variables: {
        cpf: 'cpf1',
        email: 'email1',
      },
    })

    expect(result.errors[0].message).to.be.equal(
      createStudentNoVariableError('name')
    )
  })

  it('Should throws an error when createStudent is called without passing email', async () => {
    const result = await testServer.executeOperation({
      query: `mutation($cpf: String!, $name: String!, $email: String!) {
        createStudent(cpf: $cpf, name: $name, email: $email) {
          cpf
          name
          email
        }
      }`,
      variables: {
        cpf: 'cpf1',
        name: 'name1',
      },
    })

    expect(result.errors[0].message).to.be.equal(
      createStudentNoVariableError('email')
    )
  })
})

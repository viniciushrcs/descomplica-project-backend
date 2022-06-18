const { ApolloServer } = require('apollo-server')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const typeDefs = require('../../../../app/graphql/_typeDefs/types')
const { mutationsMock } = require('../../../mocks')

const {
  studentMutationMocks: {
    createStudentValidReturn,
    createStudentNoVariableError,
    editStudentNoVariableError,
    createStudentEmptyVariableError,
    editStudentEmptyVariableError,
    editStudentValidReturn,
  },
} = mutationsMock

const resolversMock = {
  Mutation: {
    createStudent: (_, { email, name, cpf }) => {
      if (!email || !name || !cpf) throw createStudentEmptyVariableError
      return createStudentValidReturn
    },
    editStudent: (_, { email, name, cpf }) => {
      if (!email || !name || !cpf) throw editStudentEmptyVariableError
      return editStudentValidReturn
    },
  },
}

const testServer = new ApolloServer({
  typeDefs,
  resolvers: resolversMock,
  mockEntireSchema: false,
})

describe('Student mutations', () => {
  describe('createStudent', () => {
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

    it('Should throws an error when createStudent is called with cpf empty', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          createStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          cpf: '',
          name: 'name1',
          email: 'email1',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should throws an error when createStudent is called with name empty', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          createStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          name: '',
          cpf: 'cpf1',
          email: 'email1',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should throws an error when createStudent is called with email empty', async () => {
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
          cpf: 'cpf1',
          email: '',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should create and return one student when createStudent is called properly', async () => {
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
          email: 'email1',
        },
      })

      expect(result.data.createStudent).to.haveOwnProperty('cpf')
      expect(result.data.createStudent).to.haveOwnProperty('name')
      expect(result.data.createStudent).to.haveOwnProperty('email')
      expect(result.data.createStudent).to.be.deep.equal(
        createStudentValidReturn
      )
    })
  })

  describe('editStudent', () => {
    it('Should throws an error when editStudent is called without passing cpf', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
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
        editStudentNoVariableError('cpf')
      )
    })

    it('Should throws an error when editStudent is called without passing name', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
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
        editStudentNoVariableError('name')
      )
    })

    it('Should throws an error when editStudent is called without passing email', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
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
        editStudentNoVariableError('email')
      )
    })

    it('Should throws an error when editStudent is called with cpf empty', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          cpf: '',
          name: 'name1',
          email: 'email1',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should throws an error when editStudent is called with name empty', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          name: '',
          cpf: 'cpf1',
          email: 'email1',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should throws an error when editStudent is called with email empty', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          name: 'name1',
          cpf: 'cpf1',
          email: '',
        },
      })

      expect(result.errors[0].message).to.be.equal(
        'All parameters must be passed'
      )
    })

    it('Should edit and return one student when editStudent is called properly', async () => {
      const result = await testServer.executeOperation({
        query: `mutation($cpf: String!, $name: String!, $email: String!) {
          editStudent(cpf: $cpf, name: $name, email: $email) {
            cpf
            name
            email
          }
        }`,
        variables: {
          cpf: 'cpf1',
          name: 'name1',
          email: 'email1',
        },
      })

      expect(result.data.editStudent).to.haveOwnProperty('cpf')
      expect(result.data.editStudent).to.haveOwnProperty('name')
      expect(result.data.editStudent).to.haveOwnProperty('email')
      expect(result.data.editStudent).to.be.deep.equal(editStudentValidReturn)
    })
  })
})

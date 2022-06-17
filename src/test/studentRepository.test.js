const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const StudentRepository = require('../infra/database/repositories/studentRepository')
const { repositoriesMock } = require('./mocks')

describe('Student Repository', () => {
  const studentRepository = new StudentRepository()

  it('Must return all students when getAll is called', async () => {
    const {
      studentRepositoryMocks: { validReturn },
    } = repositoriesMock

    const stub = sinon.stub(studentRepository, 'getAll')
    stub.resolves(validReturn)

    const response = await studentRepository.getAll()

    expect(response).to.be.deep.equal(validReturn)
  })
})

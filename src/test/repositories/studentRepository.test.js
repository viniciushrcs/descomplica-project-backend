const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const StudentRepository = require('../../infra/database/repositories/studentRepository')
const { repositoriesMock } = require('../mocks')

describe('Student Repository', () => {
  it('Must return all students when getAll is called', async () => {
    const {
      studentRepositoryMocks: { getAllValidReturn },
    } = repositoriesMock

    const studentRepository = new StudentRepository()

    const stub = sinon.stub(studentRepository, 'getAll')
    stub.resolves(getAllValidReturn)

    const response = await studentRepository.getAll()

    expect(response).to.be.deep.equal(getAllValidReturn)
  })

  it('Must throws an error when getAll throws an error', async () => {
    const {
      studentRepositoryMocks: { errorReturn },
    } = repositoriesMock

    const studentRepository = new StudentRepository()

    const stub = sinon.stub(studentRepository, 'getAll')
    stub.throws(errorReturn)

    expect(() => studentRepository.getAll()).to.throw(errorReturn)
  })

  it('Must return one student when getStudent is called', async () => {
    const {
      studentRepositoryMocks: { getStudentValidReturn },
    } = repositoriesMock

    const studentRepository = new StudentRepository()

    const stub = sinon.stub(studentRepository, 'getStudent')
    stub.resolves(getStudentValidReturn)

    const response = await studentRepository.getStudent()

    expect(response).to.be.deep.equal(getStudentValidReturn)
  })
})

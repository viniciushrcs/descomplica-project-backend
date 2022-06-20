const { expect } = require('chai')
const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')
const StudentService = require('../../../../src/app/graphql/services/studentService')
const StudentRepository = require('../../../../src/infra/database/repositories/studentRepository')
const { repositoriesMock } = require('../../../mocks')

describe('Student Service', () => {
  let studentService = {}
  let sandbox = {}
  const studentRepositoryStub = sinon.createStubInstance(StudentRepository)
  before(() => {
    studentService = new StudentService()
    studentService.studentRepository = studentRepositoryStub
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAll', () => {
    it('Must return all students when getStudents is called', async () => {
      const {
        studentRepositoryMocks: { getAllValidReturn },
      } = repositoriesMock

      studentService.studentRepository.getAll.resolves(getAllValidReturn)

      const response = await studentService.getStudents()

      expect(response).to.be.deep.equal(getAllValidReturn)
    })
  })
})

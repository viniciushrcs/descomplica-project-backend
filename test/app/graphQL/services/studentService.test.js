const { expect } = require('chai')
const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')
const StudentService = require('../../../../src/app/graphql/services/studentService')
const StudentRepository = require('../../../../src/infra/database/repositories/studentRepository')
const { servicesMock } = require('../../../mocks')

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

  describe('getStudents', () => {
    it('Must return all students when getStudents is called', async () => {
      const {
        studentServiceMock: { getStudentsValidReturn },
      } = servicesMock

      studentService.studentRepository.getAll.resolves(getStudentsValidReturn)

      const response = await studentService.getStudents()

      expect(response).to.be.deep.equal(getStudentsValidReturn)
    })

    it('Must throw an error when getStudents throws', async () => {
      const {
        studentServiceMock: { getStudentsErrorReturn },
      } = servicesMock

      studentService.studentRepository.getAll.rejects(getStudentsErrorReturn)

      studentService
        .getStudents()
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(getStudentsErrorReturn)
        )
    })
  })

  describe('getStudent', () => {
    const filter = {
      cpf: 'cpf3',
      name: 'name3',
      email: 'email3',
    }
    it('Must return one student when getStudent is called', async () => {
      const {
        studentServiceMock: { getStudentValidReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves(
        getStudentValidReturn
      )

      const response = await studentService.getStudent(filter)

      expect(response).to.be.deep.equal(getStudentValidReturn)
    })

    it('Must throw an error when getStudent throws', async () => {
      const {
        studentServiceMock: { getStudentErrorReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.rejects(getStudentErrorReturn)

      studentService
        .getStudent(filter)
        .then()
        .catch((value) => expect(value).to.be.deep.equal(getStudentErrorReturn))
    })
  })

  describe('createStudent', () => {
    const newStudent = {
      cpf: 'cpf4',
      name: 'name4',
      email: 'email4',
    }
    it('Must create a new student when createStudent is called', async () => {
      const {
        studentServiceMock: { createStudentValidReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves()

      studentService.studentRepository.createStudent.resolves(
        createStudentValidReturn
      )

      const response = await studentService.createStudent(newStudent)

      expect(response).to.be.deep.equal(newStudent)
    })

    it('Must throw an error when createStudent is called without any parameter', async () => {
      const {
        studentServiceMock: { createStudentErrorNoParameterReturn },
      } = servicesMock

      studentService
        .createStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudentErrorNoParameterReturn)
        )
    })
  })
})

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
    const {
      studentServiceMock: { getStudents },
    } = servicesMock
    it('Must return all students when getStudents is called', async () => {
      studentService.studentRepository.getAll.resolves(getStudents.validReturn)

      const response = await studentService.getStudents()

      expect(response).to.be.deep.equal(getStudents.validReturn)
    })

    it('Must throw an error when getStudents throws', async () => {
      studentService.studentRepository.getAll.rejects(getStudents.errorReturn)

      studentService
        .getStudents()
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(getStudents.errorReturn)
        )
    })
  })

  describe('getStudent', () => {
    const filter = {
      cpf: 'cpf3',
      name: 'name3',
      email: 'email3',
    }
    const {
      studentServiceMock: { getStudent },
    } = servicesMock
    it('Must return one student when getStudent is called', async () => {
      studentService.studentRepository.getStudent.resolves(
        getStudent.validReturn
      )

      const response = await studentService.getStudent(filter)

      expect(response).to.be.deep.equal(getStudent.validReturn)
    })

    it('Must throw an error when getStudent throws', async () => {
      studentService.studentRepository.getStudent.rejects(
        getStudent.errorReturn
      )

      studentService
        .getStudent(filter)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(getStudent.errorReturn)
        )
    })
  })

  describe('createStudent', () => {
    const newStudent = {
      cpf: 'cpf4',
      name: 'name4',
      email: 'email4',
    }
    const {
      studentServiceMock: { createStudent },
    } = servicesMock
    it('Must create a new student when createStudent is called', async () => {
      studentService.studentRepository.getStudent.resolves()

      studentService.studentRepository.createStudent.resolves(
        createStudent.validReturn
      )

      const response = await studentService.createStudent(newStudent)

      expect(response).to.be.deep.equal(newStudent)
    })

    it('Must throw an error when createStudent is called without any parameter', async () => {
      studentService
        .createStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudent.noParameterErrorReturn)
        )
    })

    it('Must throw an error when student is already registered', async () => {
      studentService.studentRepository.getStudent.resolves(true)

      studentService
        .createStudent(newStudent)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudent.alreadyExistsErrorReturn)
        )
    })

    it('Must throw an error when studentRepository.createStudent throws', async () => {
      studentService.studentRepository.getStudent.resolves()
      studentService.studentRepository.createStudent.rejects()

      studentService
        .createStudent(newStudent)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudent.errorReturn)
        )
    })
  })

  describe('editStudent', () => {
    const student = {
      cpf: 'cpf5',
      name: 'name5',
      email: 'email5',
    }
    const {
      studentServiceMock: { editStudent },
    } = servicesMock
    it('Must edit a student when editStudent is called', async () => {
      studentService.studentRepository.getStudent.resolves(student)

      studentService.studentRepository.editStudent.resolves(
        editStudent.validReturn
      )

      const response = await studentService.editStudent(student)

      expect(response).to.be.deep.equal(student)
    })

    it('Must throw an error when editStudent is called without any parameter', async () => {
      studentService
        .editStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(editStudent.noParameterErrorReturn)
        )
    })

    it('Must throw an error when student is not registered', async () => {
      studentService.studentRepository.getStudent.resolves()

      studentService
        .editStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(
            editStudent.studentNotExistsErrorReturn
          )
        )
    })
    it('Must throw an error when studentRepository.editStudent throws', async () => {
      studentService.studentRepository.getStudent.resolves(student)
      studentService.studentRepository.editStudent.rejects()

      studentService
        .editStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(editStudent.errorReturn)
        )
    })
  })

  describe('deleteStudent', () => {
    const student = {
      cpf: 'cpf5',
      name: 'name5',
      email: 'email5',
    }
    const {
      studentServiceMock: { deleteStudent },
    } = servicesMock
    it('Must delete a student when deleteStudent is called', async () => {
      studentService.studentRepository.getStudent.resolves(student)

      studentService.studentRepository.deleteStudent.resolves(true)

      const response = await studentService.deleteStudent(student)

      expect(response).to.be.equal(deleteStudent.validReturn)
    })

    it('Must throw an error when deleteStudent is called without CPF as a parameter', async () => {
      studentService
        .deleteStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(deleteStudent.noParameterErrorReturn)
        )
    })

    it('Must throw an error when student is not registered', async () => {
      studentService.studentRepository.getStudent.resolves()

      studentService
        .deleteStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(
            deleteStudent.studentNotExistsErrorReturn
          )
        )
    })

    it('Must throw an error when studentRepository.deleteStudent throws', async () => {
      studentService.studentRepository.getStudent.resolves(student)
      studentService.studentRepository.deleteStudent.rejects()

      studentService
        .deleteStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(deleteStudent.errorReturn)
        )
    })
  })
})

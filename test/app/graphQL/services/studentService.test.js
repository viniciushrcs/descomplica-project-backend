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

    it('Must throw an error when student is already registered', async () => {
      const {
        studentServiceMock: { createStudentErrorAlreadyExistsReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves(true)

      studentService
        .createStudent(newStudent)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudentErrorAlreadyExistsReturn)
        )
    })

    it('Must throw an error when studentRepository.createStudent throws', async () => {
      const {
        studentServiceMock: { createStudentErrorReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves()
      studentService.studentRepository.createStudent.rejects()

      studentService
        .createStudent(newStudent)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(createStudentErrorReturn)
        )
    })
  })

  describe('editStudent', () => {
    const student = {
      cpf: 'cpf5',
      name: 'name5',
      email: 'email5',
    }
    it('Must edit a student when editStudent is called', async () => {
      const {
        studentServiceMock: { editStudentValidReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves(student)

      studentService.studentRepository.editStudent.resolves(
        editStudentValidReturn
      )

      const response = await studentService.editStudent(student)

      expect(response).to.be.deep.equal(student)
    })

    it('Must throw an error when editStudent is called without any parameter', async () => {
      const {
        studentServiceMock: { editStudentErrorNoParameterReturn },
      } = servicesMock

      studentService
        .editStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(editStudentErrorNoParameterReturn)
        )
    })

    it('Must throw an error when student is not registered', async () => {
      const {
        studentServiceMock: { editStudentErrorNotExistsReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves()

      studentService
        .editStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(editStudentErrorNotExistsReturn)
        )
    })
    it('Must throw an error when studentRepository.editStudent throws', async () => {
      const {
        studentServiceMock: { editStudentErrorReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves(student)
      studentService.studentRepository.editStudent.rejects()

      studentService
        .editStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(editStudentErrorReturn)
        )
    })
  })

  describe('deleteStudent', () => {
    const student = {
      cpf: 'cpf5',
      name: 'name5',
      email: 'email5',
    }
    it('Must delete a student when deleteStudent is called', async () => {
      const {
        studentServiceMock: { deleteStudentValidReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves(student)

      studentService.studentRepository.deleteStudent.resolves(true)

      const response = await studentService.deleteStudent(student)

      expect(response).to.be.equal(deleteStudentValidReturn)
    })

    it('Must throw an error when deleteStudent is called without CPF as a parameter', async () => {
      const {
        studentServiceMock: { deleteStudentErrorNoParameterReturn },
      } = servicesMock

      studentService
        .deleteStudent({})
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(deleteStudentErrorNoParameterReturn)
        )
    })

    it('Must throw an error when student is not registered', async () => {
      const {
        studentServiceMock: { deleteStudentErrorNotExistsReturn },
      } = servicesMock

      studentService.studentRepository.getStudent.resolves()

      studentService
        .deleteStudent(student)
        .then()
        .catch((value) =>
          expect(value).to.be.deep.equal(deleteStudentErrorNotExistsReturn)
        )
    })
  })
})

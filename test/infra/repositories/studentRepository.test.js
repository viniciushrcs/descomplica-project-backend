const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const StudentRepository = require('../../../infra/database/repositories/studentRepository')
const { repositoriesMock } = require('../../mocks')

describe('Student Repository', () => {
  describe('getAll', () => {
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

    it('Must throw an error when getAll throws an error', async () => {
      const {
        studentRepositoryMocks: { getAllErrorReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'getAll')
      stub.throws(getAllErrorReturn)

      expect(() => studentRepository.getAll()).to.throw(getAllErrorReturn)
    })
  })

  describe('getStudent', () => {
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

    it('Must throw an error when getStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { getStudentErrorReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'getAll')
      stub.throws(getStudentErrorReturn)

      expect(() => studentRepository.getAll()).to.throw(getStudentErrorReturn)
    })
  })

  describe('createStudent', () => {
    it('Must create one student when createStudent is called', async () => {
      const {
        studentRepositoryMocks: { createStudentValidReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'createStudent')
      stub.resolves(createStudentValidReturn)

      const response = await studentRepository.createStudent()

      expect(response).to.be.deep.equal(createStudentValidReturn)
    })

    it('Must throw an error when createStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { createStudentErrorReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'createStudent')
      stub.throws(createStudentErrorReturn)

      expect(() => studentRepository.createStudent()).to.throw(
        createStudentErrorReturn
      )
    })
  })

  describe('editStudent', () => {
    it('Must edit and return one student when editStudent is called', async () => {
      const {
        studentRepositoryMocks: { editStudentValidReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'editStudent')
      stub.resolves(editStudentValidReturn)

      const response = await studentRepository.editStudent()

      expect(response).to.be.deep.equal(editStudentValidReturn)
    })

    it('Must throw an error when editStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { editStudentErrorReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'editStudent')
      stub.throws(editStudentErrorReturn)

      expect(() => studentRepository.editStudent()).to.throw(
        editStudentErrorReturn
      )
    })
  })

  describe('deleteStudent', () => {
    it('Must delete one student when deleteStudent is called', async () => {
      const {
        studentRepositoryMocks: { deleteStudentValidReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'deleteStudent')
      stub.resolves(deleteStudentValidReturn)

      const response = await studentRepository.deleteStudent()

      expect(response).to.be.deep.equal(deleteStudentValidReturn)
    })

    it('Must throw an error when deleteStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { deleteStudentErrorReturn },
      } = repositoriesMock

      const studentRepository = new StudentRepository()

      const stub = sinon.stub(studentRepository, 'deleteStudent')
      stub.throws(deleteStudentErrorReturn)

      expect(() => studentRepository.deleteStudent()).to.throw(
        deleteStudentErrorReturn
      )
    })
  })
})

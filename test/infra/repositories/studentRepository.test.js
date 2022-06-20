const { expect } = require('chai')
const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')
const StudentRepository = require('../../../src/infra/database/repositories/studentRepository')
const knex = require('../../../src/infra/database/repositories/connection')
const { repositoriesMock } = require('../../mocks')

describe('Student Repository', () => {
  let studentRepository = {}
  let sandbox = {}
  const knexStub = sinon.stub(knex)
  before(() => {
    studentRepository = new StudentRepository(knexStub)
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAll', () => {
    it('Must return all students when getAll is called', async () => {
      const {
        studentRepositoryMocks: { getAllValidReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        returning: knexStub.returning.resolves(getAllValidReturn),
      }))
      const response = await studentRepository.getAll()

      expect(response).to.be.deep.equal(getAllValidReturn)
    })

    it('Must return null when it does not exist a register in database', async () => {
      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        returning: knexStub.returning.resolves(),
      }))
      const response = await studentRepository.getAll()

      expect(response).to.be.deep.equal(null)
    })

    it('Must throw an error when getAll throws an error', async () => {
      const {
        studentRepositoryMocks: { getAllErrorReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        returning: knexStub.returning.rejects(),
      }))

      studentRepository
        .getAll()
        .then()
        .catch((value) => {
          expect(value).to.be.equal(getAllErrorReturn)
        })
    })
  })

  describe('getStudent', () => {
    it('Must return one student when getStudent is called', async () => {
      const {
        studentRepositoryMocks: { getStudentValidReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        returning: knexStub.returning.returnsThis(),
        where: knexStub.where.resolves([getStudentValidReturn]),
      }))
      const filter = {
        cpf: 'cpf3',
      }
      const response = await studentRepository.getStudent(filter)

      expect(response).to.be.deep.equal(getStudentValidReturn)
    })

    it('Must throw an error when getStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { getStudentErrorReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        returning: knexStub.returning.returnsThis(),
        where: knexStub.where.rejects(),
      }))
      const filter = {
        cpf: 'cpf3',
      }

      studentRepository
        .getStudent(filter)
        .then()
        .catch((value) => expect(value).to.be.equal(getStudentErrorReturn))
    })
  })

  describe('createStudent', () => {
    const newStudent = {
      cpf: 'cpf4',
      name: 'name4',
      email: 'email4',
    }
    it('Must create one student when createStudent is called', async () => {
      const {
        studentRepositoryMocks: { createStudentValidReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        insert: knexStub.insert.resolves(1),
      }))

      const response = await studentRepository.createStudent(newStudent)

      expect(response).to.be.deep.equal(createStudentValidReturn)
    })

    it('Must throw an error when createStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { createStudentErrorReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        insert: knexStub.insert.rejects(),
      }))

      studentRepository
        .createStudent(newStudent)
        .then()
        .catch((value) => expect(value).to.be.equal(createStudentErrorReturn))
    })
  })

  describe('editStudent', () => {
    const student = {
      cpf: 'cpf5',
      name: 'name5',
      email: 'email5',
    }
    it('Must edit and return one student when editStudent is called', async () => {
      const {
        studentRepositoryMocks: { editStudentValidReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        where: knexStub.where.returnsThis(),
        update: knexStub.update.resolves(1),
      }))

      const response = await studentRepository.editStudent(student)

      expect(response).to.be.deep.equal(editStudentValidReturn)
    })

    it('Must throw an error when editStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { editStudentErrorReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        where: knexStub.where.returnsThis(),
        update: knexStub.update.rejects(),
      }))

      studentRepository
        .editStudent(student)
        .then()
        .catch((value) => expect(value).to.be.equal(editStudentErrorReturn))
    })
  })

  describe('deleteStudent', () => {
    const cpf = 'cpf5'

    it('Must delete one student when deleteStudent is called', async () => {
      const {
        studentRepositoryMocks: { deleteStudentValidReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        where: knexStub.where.returnsThis(),
        delete: knexStub.update.resolves(1),
      }))

      const response = await studentRepository.deleteStudent(cpf)

      expect(response).to.be.deep.equal(deleteStudentValidReturn)
    })

    it('Must throw an error when deleteStudent throws an error', async () => {
      const {
        studentRepositoryMocks: { deleteStudentErrorReturn },
      } = repositoriesMock

      sandbox.stub(studentRepository, 'db').callsFake(() => ({
        where: knexStub.where.returnsThis(),
        delete: knexStub.update.rejects(),
      }))

      studentRepository
        .deleteStudent(cpf)
        .then()
        .catch((value) => expect(value).to.be.equal(deleteStudentErrorReturn))
    })
  })
})

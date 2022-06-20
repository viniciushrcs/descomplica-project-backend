const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { mutationsMock } = require('../../../mocks')

const {
  studentMutationMocks: {
    createStudentValidReturn,
    editStudentValidReturn,
    deleteStudentValidReturn,
  },
} = mutationsMock

describe('Student mutations', () => {
  const studentServiceStub = sinon.stub()

  const mutation = proxyquire(
    '../../../../src/app/graphql/resolvers/Mutation/student',
    {
      '../../services/studentService': studentServiceStub,
    }
  )
  it('Should create one student in createStudent mutation', async () => {
    studentServiceStub.prototype.createStudent = sinon
      .stub()
      .resolves(createStudentValidReturn)

    const response = await mutation.createStudent()

    expect(response).to.be.deep.equal(createStudentValidReturn)
  })

  it('Should edit one student in editStudent mutation', async () => {
    studentServiceStub.prototype.editStudent = sinon
      .stub()
      .resolves(editStudentValidReturn)

    const response = await mutation.editStudent()

    expect(response).to.be.deep.equal(editStudentValidReturn)
  })

  it('Should delete one student in deleteStudent mutation', async () => {
    studentServiceStub.prototype.deleteStudent = sinon
      .stub()
      .resolves(deleteStudentValidReturn)

    const response = await mutation.deleteStudent()

    expect(response).to.be.deep.equal(deleteStudentValidReturn)
  })
})

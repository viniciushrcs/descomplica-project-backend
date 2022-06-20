const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { queriesMock } = require('../../../mocks')

const {
  studentQueryMocks: { getStudentValidReturn, getStudentsValidReturn },
} = queriesMock

describe('Student queries', () => {
  const studentServiceStub = sinon.stub()

  const query = proxyquire(
    '../../../../src/app/graphql/resolvers/Query/student',
    {
      '../../services/studentService': studentServiceStub,
    }
  )
  it('Should return all students in getStudents query', async () => {
    studentServiceStub.prototype.getStudents = sinon
      .stub()
      .resolves(getStudentsValidReturn)

    const response = await query.getStudents()

    expect(response).to.be.deep.equal(getStudentsValidReturn)
  })

  it('Should return one student in getStudent query', async () => {
    studentServiceStub.prototype.getStudent = sinon
      .stub()
      .resolves(getStudentValidReturn)

    const response = await query.getStudent()

    expect(response).to.be.deep.equal(getStudentValidReturn)
  })
})

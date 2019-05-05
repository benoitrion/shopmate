// const { expect } = require('chai')
// const { match, stub } = require('sinon')
// const proxyquire = require('proxyquire')

// const { makeMockModels } = require('sequelize-test-helpers')

// const mockModels = makeMockModels({ Category: { findAll: stub() } })

// const save = proxyquire('../../../src/utils/save', { '../models': mockModels })

// const fakeUser = { update: stub() }

// describe('src/save', () => {
//   const data = {
//     firstname: 'Testy',
//     lastname: 'McTestface',
//     email: 'testy.mctestface.test.tes',
//     token: 'some-token'
//   }

//   const resetStubs = () => {
//     mockModels.User.findOne.resetHistory()
//     fakeUser.update.resetHistory()
//   }

//   let result

//   context('user does not exist', () => {
//     before(async () => {
//       mockModels.User.findOne.resolves(undefined)
//       result = await save(data)
//     })

//     after(resetStubs)

//     it('called User.findOne', () => {
//       expect(mockModels.User.findOne).to.have.been.called
//     })

//     it("didn't call user.update", () => {
//       expect(fakeUser.update).not.to.have.been.called
//     })

//     it('returned null', () => {
//       expect(result).to.be.null
//     })
//   })

//   context('user exists', () => {
//     before(async () => {
//       fakeUser.update.resolves(fakeUser)
//       mockModels.User.findOne.resolves(fakeUser)
//       result = await save(data)
//     })

//     after(resetStubs)

//     it('called User.findOne', () => {
//       expect(mockModels.User.findOne).to.have.been.called
//     })

//     it('called user.update', () => {
//       expect(fakeUser.update).to.have.been.calledWith(match(data))
//     })

//     it('returned the user', () => {
//       expect(result).to.deep.equal(fakeUser)
//     })
//   })
// })
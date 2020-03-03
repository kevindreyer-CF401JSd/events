//https://jestjs.io/docs/en/mock-functions.html
jest.mock('fs')
const files = require('../lib/files')

describe('files module', () => {
  it('can load a file', () => {
    return files.loadFile('foo.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy()
      })
  })
  it('can save a file', () => {
    // return files.saveFile()

  })
  it('raises an error if a file is invalid', () => {

  })
  it('can uppercase a buffer of text', () => {

  })
  it('can alter a file', () => {

  })
})
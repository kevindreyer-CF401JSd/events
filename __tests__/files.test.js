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
    const buffer = Buffer.from('test')
    return files.saveFile('test_file.txt', buffer)
     .then(success => {
       expect(success).toBeUndefined()
     })
     .catch(err => {
       expect(err.message).toEqual('Invalid file')
    })
  })

  it('raises an error if a file is invalid', () => {
    const buffer = Buffer.from('test')
    return files.saveFile(null, buffer)
     .then(success => {
       expect(success).toBeUndefined()
     })
     .catch(err => {
       expect(err.message).toEqual('Invalid file')
    })
  })

  it('can uppercase a buffer of text', () => {
    const lowercase = "abcdef"
    const uppercase = "ABCDEF"
    expect(files.convertBuffer(lowercase)).toEqual(uppercase)
  })

  it('can alter a file', () => {
    return files.alterFile('good_filename.txt')
      .then(success => {
        expect(success).toBeUndefined()
      })
      .catch(err => {
        expect(err).toBeUndefined()
      })
  })

  it('can alter a file fails on null', () => {
    return files.alterFile(null)
      .then(success => {
        expect(success).toBeFalsy()
      })
      .catch(err => {
        expect(err).toEqual('Invalid file')
    })
  })

})
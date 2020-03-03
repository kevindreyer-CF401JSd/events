const fs = require('fs')
const util = require('util')

const events = require('./events')
require('./logger')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const files = {}

//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
files.loadFile = file => readFile(file)

//https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
files.saveFile = (file, buffer) => writeFile(file, buffer)

files.convertBuffer = buffer => {
  // do some stuff
  return Buffer.from(buffer).toString().trim().toUpperCase()
}

files.alterFile = async file => {
  try {
    // do some other stuff using the 3 methods above
    const fileBuffer = await files.loadFile(file)
    const uppercasedBuffer = files.convertBuffer(fileBuffer)

    // save file
    await files.saveFile(file, uppercasedBuffer)
    const status = {
      status: 0,
      file: file,
      message: 'saved properly'
    }
    
    events.emit('save-file', status)
  } catch (e) {
    const status = {
      status: 1,
      file: file,
      message: e.message
    }
    events.emit('readwrite-error', status)

  }
  
}

module.exports = files
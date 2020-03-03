const fs = require('fs')
const util = require('util')

require('./logger')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const files = {}

//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
files.loadFile = async file => await readFile(file)

//https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
files.saveFile = (file, butter) => writeFile(file, butter)

files.convertBuffer = buffer => {
  // do some stuff
}

files.alterFile = async file => {
  // do some other stuff
}

module.exports = files
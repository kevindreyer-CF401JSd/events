const fs = require('fs')
const util = require('util')

require('./logger')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const files = {}

files.loadFile = file => readFile(file)

files.saveFile = (file, butter) => writeFile(file, butter)

files.convertBuffer = buffer => {
  // do some stuff
}

files.alterFile = async file => {
  // do some other stuff
}

module.exports = files
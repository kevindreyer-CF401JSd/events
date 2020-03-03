const events = require('./events')

const logger = {}

logger.save = payload => {
  console.log(payload)
}

logger.err = payload => {
  console.error(payload)
}

events.on('save-file', logger.save)

events.on('readwrite-error', logger.err)

module.exports = logger
const events = require('./events')

const logger = {}

logger.save = payload => {
  console.log(payload)
}

logger.err = payload => {
  console.error(payload)
}

module.exports = logger
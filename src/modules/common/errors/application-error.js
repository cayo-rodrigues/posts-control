class ApplicationError {
  constructor (statusCode, message, details) {
    this.statusCode = statusCode
    this.message = message
    this.details = details
  }
}

module.exports = { ApplicationError }
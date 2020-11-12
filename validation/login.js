const Validator = require('validator')
const isEmpty = require('./isEmpty')
module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.userName = !isEmpty(data.userName) ? data.userName : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if(Validator.isEmpty(data.userName)) {
        errors.userName = 'Username is required'
    }

    if(Validator.isEmpty(data.password)) {
        errors.userName = 'Password is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

function validatePIN (pin) {
    let validate = /^(\d{4}|\d{6})$/.test(pin)
    return validate
  }
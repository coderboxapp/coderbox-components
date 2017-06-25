
const Validators = {
  email: value => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(value)
  },

  minLength: value => {
    return value && value.length >= 3
  },

  name: value => {
    if (!value) {
      return false
    }

    let tmp = value.split(' ')

    if (tmp.length < 2) {
      return false
    }

    return tmp[0].length >= 3 && tmp[1].length >= 3
  }
}

export default Validators

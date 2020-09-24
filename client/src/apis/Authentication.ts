import Api from './Api'

export default {
  getUsers (user: object) {
    return Api.post('auth/login', user)
      .catch(function (error) {
        console.log(error)
      })
  },
  regUser (reguser: object) {
    return Api.post('auth/register', reguser)
      .catch(function (error) {
        console.log(error)
      })
  }
}

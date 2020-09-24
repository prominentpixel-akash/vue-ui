import Api from './Api'

export default {
  all () {
    return Api.get('lambda/all')
  },
  getById (id: number) {
    return Api.get('lambda/' + id)
  },
  getUsers (user: object) {
    return Api.post('/auth/login', user)
      .catch(function (error) {
        console.log(error)
      })
  },
  regUser (reguser: object) {
    return Api.post('/auth/register', reguser)
      .catch(function (error) {
        console.log(error)
      })
  }
}

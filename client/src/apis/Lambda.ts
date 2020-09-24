import Api from './Api'

const lambdaUrl = 'api/'

export default {
  all () {
    return Api.get(lambdaUrl + 'lambda/all')
  },
  getById (id: number) {
    return Api.get(lambdaUrl + 'lambda/' + id)
  },
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

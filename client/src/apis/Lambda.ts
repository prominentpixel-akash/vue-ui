import Api from './Api'

export default {
  all () {
    return Api.get('lambda/all')
  },
  getById (id: number) {
    return Api.get('lambda/' + id)
  },
  getLoginByUsernamePassword (username: string, password: string) {
    return Api.get('auth/login/' + username + ' ' + password)
  }
}

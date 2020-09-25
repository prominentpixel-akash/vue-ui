import Lambda from '../apis/Lambda'
import Authentication from '../apis/Authentication'
import axios from 'axios'

export const fetchAllLambdas = ({ commit }: { commit: Function }) => {
  Lambda.all()
    .then(response => {
      commit('SET_LAMBDA', response.data)
    })
}

export const getLambdaById = ({ commit }: { commit: Function }, id: number) => {
  return new Promise((resolve, reject) => {
    Lambda.getById(id)
      .then(response => {
        resolve(response)
        commit('SET_LAMBDA', response.data)
      }).catch(err => {
        reject(err)
      })
  })
}

export const users = ({ commit }: { commit: Function }, user: object) => {
  return new Promise((resolve, reject) => {
    Authentication.getUsers(user)
      .then((response: any) => {
        if (typeof response.data !== 'object') {
          localStorage.setItem('token', response.data)
          axios.defaults.headers.common.Authorization = response.data
        }
        commit('SET_LOGIN', response.data)
        resolve(response)
      }).catch(err => {
        reject(err)
      })
  })
}

export const registerUser = ({ commit }: { commit: Function }, reguser: object) => {
  return new Promise((resolve, reject) => {
    Authentication.regUser(reguser)
      .then((response: any) => {
        resolve(response)
        commit('SET_REGISTRATION', response.data)
      }).catch(err => {
        reject(err)
      })
  })
}

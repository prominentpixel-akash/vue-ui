import Lambda from '../apis/Lambda'
import Authentication from '../apis/Authentication'

export const fetchAllLambdas = ({ commit }: {commit: Function}) => {
  Lambda.all()
    .then(response => {
      commit('SET_LAMBDA', response.data)
    })
}

export const getLambdaById = ({ commit }: {commit: Function}, id: number) => {
  Lambda.getById(id)
    .then(response => {
      commit('SET_LAMBDA', response.data)
    })
}

export const users = ({ commit }: {commit: Function}, user: object) => {
  Authentication.getUsers(user)
    .then(response => {
      commit('SET_LOGIN', response.data)
    })
}

export const registerUser = ({ commit }: {commit: Function}, reguser: object) => {
  Authentication.regUser(reguser)
    .then(response => {
      commit('SET_LOGIN', response.data)
    })
}

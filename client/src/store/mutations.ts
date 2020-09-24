export const SET_LAMBDA = (state: any, lambda: any) => {
  state.lambda = lambda
}

export const SET_LOGIN = (state: any, login: any) => {
  state.snackbar = true
  state.snackbarText = login.message
  state.login = login
}

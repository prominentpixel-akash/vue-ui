export const SET_LAMBDA = (state: any, lambda: any) => {
  state.snackbar = true
  state.snackbarText = lambda.data
  state.lambda = lambda
}

export const SET_LOGIN = (state: any, login: any) => {
  state.snackbar = true
  state.isLoggedIn = typeof login !== 'object'
  state.snackbarText = login.message ? login.message : (typeof login === 'object' ? 'Error While Login.' : 'Login Successfull.')
  state.login = login
}

export const SET_REGISTRATION = (state: any, login: any) => {
  state.snackbar = true
  state.snackbarText = login.username ? 'User Created SuccessFully. Now Please Verify Email And Login.' : (login.message ? login.message : 'Error While Signup.')
  state.login = login
}

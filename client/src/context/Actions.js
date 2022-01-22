export const LoginStart = (userCreadentials) => {
  return {
    type: "LOGIN_START"
  }
}


export const LoginSuccess = (user) => {
    return {
      type: "LOGIN_SUCCESS",
      payload: user
    }
}


export const LoginFailure = () => {
  return {
    type: "LOGIN_FAILURE"
  }
}



export const Logout = () => {
  return {
    type: "LOGOUT"
  }
}



export const updateStart = (userCreadentials) => {
  return {
    type: "UPDATE_START"
  }
}


export const updateSuccess = (user) => {
    return {
      type: "UPDATE_SUCCESS",
      payload: user
    }
}


export const updateFailure = () => {
  return {
    type: "UPDATE_FAILURE"
  }
}

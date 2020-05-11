const userReducer = (state = {signed_in: false, auth_token: '', message: '', userId: ''},action) => {
    switch(action.type){
      case 'SIGN IN USER':
        return{
          signed_in: true,
          userId: action.userId,
          auth_token: action.auth_token,
          message: ''
        }
      case 'UPDATE ERRORS':
        return{
          ...state,
          message: action.message
        }
      case 'LOGOUT':
        return{
          signed_in: false,
          auth_token: '',
          message: ''
        }
      default:
        return state
    }
  }
  
  export default userReducer
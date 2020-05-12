import {path} from '../../helpers.js';

export const login = (object) => {
    
    return (dispatch) =>
    {
      const url = path + '/users/login'
      fetch(url, object)
      .then(resp => resp.json())
      .then(json => {
        
        if (json.status === "error"){
          dispatch ({
            type: "UPDATE ERRORS",
            message: json.message
          })
        }
        else if(json.token){
          dispatch( {
            type: "SIGN IN USER",
            userId: json._id,
            auth_token: json.token,
            message: ''
          })
        }
      }
  
      )}
      
  }
  
  export const newAccount = (object) => {
    return (dispatch) =>
    {
      const url = path + '/users'
      fetch(url, object)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        if (json.status === "error"){
          dispatch ({
            type: "UPDATE ERRORS",
            message: json.message
          })
        }
        else if(json.token){
          dispatch( {
            type: "SIGN IN USER",
            auth_token: json.token,
            message: ''
          })
        }
      }
  
      )}
  }
  
  export const logout = () => {
    return {
      type: "LOGOUT"
    }
  }
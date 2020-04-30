import {path} from '../helpers.js';

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
        else if(json.auth_token){
          dispatch( {
            type: "SIGN IN USER",
            auth_token: json.auth_token,
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
        if (json.status === "error"){
          dispatch ({
            type: "UPDATE ERRORS",
            message: json.message
          })
        }
        else if(json.auth_token){
          dispatch( {
            type: "SIGN IN USER",
            auth_token: json.auth_token,
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
export const login = (object) => {
    console.log("c")
    return (dispatch) =>
    {
      fetch("http://localhost:4000/authenticate", object)
      .then(resp => resp.json())
      .then(json => {
        console.log("d")
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
      console.log("e")
  }
  
  export const newAccount = (object) => {
    return (dispatch) =>
    {
      fetch("http://localhost:4000/user", object)
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
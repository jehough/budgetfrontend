export const makeObject = (method, formData) => {
    return  {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Action": "application/json"
      },
      body: JSON.stringify(formData)
    };
  }

export const makeGetObject = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Action": "application/json",
      "Authorization": `${token}`
    }
  }
}
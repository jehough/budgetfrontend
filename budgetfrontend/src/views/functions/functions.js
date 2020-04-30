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
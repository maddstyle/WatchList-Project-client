


export const signup = user => {
  return fetch(`http://localhost:3001/createUser`, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
};

export const signin = user => {
  return fetch(`http://localhost:3001/session`, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
};
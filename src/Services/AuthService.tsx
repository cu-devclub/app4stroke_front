interface LoginProps {
  email: string;
  password: string;
}

export const login = (props: LoginProps): Promise<any> => {
  const { email, password } = props;
  //const token = localStorage.getItem("token");
  return fetch("http://localhost:8100/api/user/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      //Authorization: `token ${token}`
    },
    body: JSON.stringify({ email: email, password: password }), // body data type must match "Content-Type" header
  }).then((response) => {
    return response.json();
  });
};
export const isUserLogin = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

interface LoginProps {
  email: string;
  password: string;
}

export const login = (props: LoginProps): Promise<any> => {
  const { email, password } = props;
  //const token = localStorage.getItem("token");
  return fetch("http://203.159.92.226:3000/api/user/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }), // body data type must match "Content-Type" header
  }).then((response) => {
    return response.json();
  });
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};

export const getUserInfo = (): {userName: string | null, institute: string | null} => {
  // const userName = localStorage.getItem("userName");
  // const institute = localStorage.getItem("institute");
  const userName = "Dr. Sawasdee";
  const institute = "Chulalongkorn Stroke Center";
  return {userName: userName, institute: institute};
};

export const isUserLogin = () => {
  return getToken() !== null;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

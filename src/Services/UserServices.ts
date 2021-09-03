import { FormProps } from "../interfaces";

export const postForm = ({
  body,
  token,
}: {
  body: FormProps;
  token: string;
}): Promise<any> => {
  return fetch("http://203.159.92.226:3000/api/submitPatient", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};

import { FormProps } from "../interfaces";

const backendHost = "http://sern.xyz:48921";

const genForm = (data: any) => {

  const formData = new FormData();

  for (const dataKey in data) {
    if (data[dataKey] instanceof Object) {
      // append nested object
      for (const previewKey in data[dataKey]) {

        if (data[dataKey][previewKey] instanceof Object && dataKey !== 'file') { 

          for (const previewKey2 in data[dataKey][previewKey]){
              formData.append(`${dataKey}_${previewKey}_${previewKey2}`, data[dataKey][previewKey][previewKey2]);

          }

        }
        else {

          let k;

          if (dataKey !== 'file') {
            k = `${dataKey}_${previewKey}`;
          } else {
            k = `${dataKey}`;
          }

          const v = data[dataKey][previewKey];
          console.log(k);
          console.log(v);
          formData.append(k, v);

        }
      }
    }
    else {
      console.log(dataKey);
      console.log(data[dataKey]);
      formData.append(dataKey, data[dataKey]);
    }
  }

  return formData;
};

export const postForm = ({
  body,
  token,
}: {
  body: FormProps;
  token: string;
}): Promise<any> => {
  const newBody = JSON.parse(JSON.stringify(body));
  console.log('start');
  console.log(body);
  console.log(JSON.stringify(body));
  console.log(newBody);
  console.log('end');
  delete newBody.PatientInformation.file;
  newBody.file = body.PatientInformation.file;
  const formBody = genForm(newBody);
  console.log(formBody);


  for (const pair of <Array<[string, FormDataEntryValue]>><unknown>formBody.entries()) {
    console.log(pair);
  }

  return fetch(`${backendHost}/api/submitPatient`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      // "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      // "Content-Type": "undefined",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(newBody),
    body: formBody,
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};

export const getResults = ({
  testId,
  token,
}: {
  testId: string;
  token: string;
}): Promise<any> => {
  return fetch(`${backendHost}/api/getresult/${testId}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};

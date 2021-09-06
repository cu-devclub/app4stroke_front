import { FormProps } from "../interfaces";
import JSZip from "jszip";

// const backendHost = "http://sern.xyz:48921";
const backendHost = "http://203.159.92.226:3000";

const zipForm = async (files: Array<any> | null) => {

  const zip = new JSZip();

  if (files !== null) {
    for (const file of files) {
      zip.file(file.name, file);
    }
  }

  return await zip.generateAsync({ type: 'blob' }).then((blobdata) => {
    return new File([blobdata], "files.zip");
  });

};

const genForm = (data: any) => {

  const formData = new FormData();

  for (const dataKey in data) {
    if (data[dataKey] instanceof Object) {
      // append nested object
      for (const previewKey in data[dataKey]) {

        if (data[dataKey][previewKey] instanceof Object && dataKey !== 'file') {

          for (const previewKey2 in data[dataKey][previewKey]) {
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
          formData.append(k, v);

        }
      }
    }
    else {
      formData.append(dataKey, data[dataKey]);
    }
  }

  return formData;
};

export const postForm = async ({
  body,
  token,
}: {
  body: FormProps;
  token: string;
}): Promise<any> => {
  const newBody = JSON.parse(JSON.stringify(body));
  delete newBody.PatientInformation.file;
  newBody.file = [await zipForm(body.PatientInformation.file)];
  const formBody = genForm(newBody);

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

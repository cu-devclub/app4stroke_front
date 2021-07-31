import React from "react";

interface ValidateProps {
  ChiefComplaint: string;
  EKG12Leads: string;
}

const validate = (values: ValidateProps) => {
  const errors = { ChiefComplaint: "",EKG12Leads: ""};
  if (
    values.ChiefComplaint === null ||
    values.ChiefComplaint === undefined ||
    values.ChiefComplaint === ""
  ) {
    errors.ChiefComplaint = "Please select time course";
  }
  if (
    values.EKG12Leads === null ||
    values.EKG12Leads === undefined ||
    values.EKG12Leads === ""
  ) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  } 
  return errors;
};

export default validate;

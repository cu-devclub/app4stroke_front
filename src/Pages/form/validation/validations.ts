import React from "react";

interface ValidateProps {
  EKG12Leads: string;
  ChiefComplaint: string;
}

const validate = (values: ValidateProps) => {
  const errors = { EKG12Leads: "", ChiefComplaint: "" };

  if (
    values.EKG12Leads === null ||
    values.EKG12Leads === undefined ||
    values.EKG12Leads === ""
  ) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  } 
  if (
    values.ChiefComplaint === null ||
    values.ChiefComplaint === undefined ||
    values.ChiefComplaint === ""
  ) {
    errors.ChiefComplaint = "Please select time course";
  }
  return errors;
};

export default validate;

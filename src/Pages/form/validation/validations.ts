import React from "react";

interface ValidateProps {
  EKG12Leads: string;
}

const validate = (values: ValidateProps) => {
  const errors = { EKG12Leads: "" };

  if (
    values.EKG12Leads === null ||
    values.EKG12Leads === undefined ||
    values.EKG12Leads === ""
  ) {  
    errors.EKG12Leads = "Please select EKG 12 Leads";
  }
  return errors;
};

export default validate;

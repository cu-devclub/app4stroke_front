import { Button, createStyles, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { useScrollSection } from "react-scroll-section";
import styled from "styled-components";
import GoToTopButton from "../Components/GoToTopButton";

const Item = styled.li<{ selected: boolean }>`
  display: block;
  cursor: pointer;
  transition: all 0.25s;
  padding: 15px 10px;
  font-size: 16px;
  user-select: none;
  color: ${(props) => (props.selected ? "#EF5DA8" : "inherit")};
  border-left: 4px solid
    ${(props) => (props.selected ? "#EF5DA8" : "transparent")};
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    submitButton: {
      backgroundColor: "#EF5DA8",
      color: "#ffffff",
      textTransform: "none",
      borderRadius: "20px",
      fontSize: "18px",
      "&:hover": { backgroundColor: "#EF5DA8", color: "#ffffff" },
    },
  })
);

const SideBarProgress = () => {
  const classes = useStyle();

  //Section
  const PatientInformationSection = useScrollSection("PatientInformation");
  const ChiefComplaintSection = useScrollSection("ChiefComplaint");
  const UnderLyingDiseaseSection = useScrollSection("UnderLyingDisease");
  const VitalSignsSection = useScrollSection("VitalSigns");
  const EKG12LeadsSection = useScrollSection("EKG12Leads");
  const NIHSSSection = useScrollSection("NIHSS");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="80vh"
    >
      <Button
        type="submit"
        style={{
          width: "150px",
          height: "40px",
          marginBottom: "20px",
        }}
        className={classes.submitButton}
      >
        Submit
      </Button>
      <Box>
        <Item
          onClick={PatientInformationSection.onClick}
          selected={PatientInformationSection.selected}
        >
          Patient Information
        </Item>
        <Item
          onClick={ChiefComplaintSection.onClick}
          selected={ChiefComplaintSection.selected}
        >
          Chief Complaint
        </Item>
        <Item
          onClick={UnderLyingDiseaseSection.onClick}
          selected={UnderLyingDiseaseSection.selected}
        >
          Underlying Disease
        </Item>
        <Item
          onClick={VitalSignsSection.onClick}
          selected={VitalSignsSection.selected}
        >
          Vital Signs
        </Item>
        <Item
          onClick={EKG12LeadsSection.onClick}
          selected={EKG12LeadsSection.selected}
        >
          EKG12 Leads
        </Item>
        <Item onClick={NIHSSSection.onClick} selected={NIHSSSection.selected}>
          NIHSS
        </Item>
      </Box>
      <GoToTopButton />
    </Box>
  );
};
export default SideBarProgress;

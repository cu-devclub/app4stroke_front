import "date-fns";
import React, { useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import DateFnsUtils from "@date-io/date-fns";
import intervalToDuration from "date-fns/intervalToDuration";

export default function TimePicker(props: any) {
  const { label, onChange, value, className } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        label={label}
        variant="inline"
        autoOk={true}
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change time",
        }}
        className={className}
      />
    </MuiPickersUtilsProvider>
  );
}

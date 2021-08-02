import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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

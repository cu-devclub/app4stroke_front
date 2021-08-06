import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props: any) {
  const { label, onChange, value, className, error } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        format="dd/MM/yyyy"
        variant="inline"
        autoOk={true}
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        className={className}
        error={error}
      />
    </MuiPickersUtilsProvider>
  );
}

import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

// form
import { Controller, useFormContext } from "react-hook-form";

RHFDateInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFDateInput({
  name,
  label = "",
  placeholder = "",
  disabled = false,
  dateFormat = "dd/MM/yyyy",
  showTimeSelect = false,
  timeFormat = "HH:mm",
  timeIntervals = 15,
  filterDate = false,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="d-flex flex-column">
            {label ? (
              <Form.Label className="form-label">{label}</Form.Label>
            ) : (
              ""
            )}
            <DatePicker
              selected={field.value}
              disabled={disabled}
              onChange={(date) => field.onChange(date)}
              placeholderText={placeholder}
              showYearDropdown
              showTimeSelect={showTimeSelect}
              timeFormat={timeFormat}
              timeIntervals={timeIntervals}
              dateFormat={dateFormat}
              filterDate={filterDate}
            />
            <Form.Text className="text-danger">
              {error ? error?.message : ""}
            </Form.Text>
          </div>
        </>
      )}
      {...other}
    />
  );
}

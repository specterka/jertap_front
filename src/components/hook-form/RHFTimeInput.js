import { getDateFromTimeString } from "@/utils/formatTime";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

// form
import { Controller, useFormContext } from "react-hook-form";

RHFTimeInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFTimeInput({
  name,
  id,
  label = "",
  placeholder = "",
  min = "",
  max = "",
  ...other
}) {
  const { control } = useFormContext();

  const filterTimes = (time) => {
    const fromHour = min
      ? typeof min === "string"
        ? getDateFromTimeString(min)
        : min
      : "";

    const toHour = max
      ? typeof max === "string"
        ? getDateFromTimeString(max)
        : max
      : "";
    let isFlag = true;
    // Disable times that are less than or equal to the selected "to_hour"
    if (fromHour !== "") {
      isFlag = isFlag && time >= fromHour;
    }

    if (toHour !== "") {
      isFlag = isFlag && time < toHour;
    }

    return isFlag;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? (
            <Form.Label htmlFor={id} className="form-label">
              {label}
            </Form.Label>
          ) : (
            ""
          )}
          <DatePicker
            selected={
              typeof field.value === "string"
                ? getDateFromTimeString(field.value)
                : field.value
            }
            onChange={(date) => field.onChange(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption={placeholder}
            dateFormat="HH:mm:ss"
            timeFormat="HH:mm:ss"
            filterTime={(time) => filterTimes(time)}
          />
          <Form.Text id={id} className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </>
      )}
      {...other}
    />
  );
}

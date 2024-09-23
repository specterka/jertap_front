import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";

RHFCheckboxInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFCheckboxInput({
  name,
  label = "",
  disabled = false,
  inputProps = {},
  formControlClass = "",
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? <Form.Label className="form-label">{label}</Form.Label> : ""}
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            disabled={disabled}
            isInvalid={!!error}
            className={formControlClass}
            {...field}
            {...inputProps}
            checked={field.value}
          />
        </>
      )}
      {...other}
    />
  );
}

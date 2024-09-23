import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";

RHFSelectInput.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function RHFSelectInput({
  name,
  children,
  id,
  label = "",
  disabled = false,
  className = "form-label",
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? (
            <Form.Label htmlFor={id} className={className} sm={2}>
              {label}
            </Form.Label>
          ) : (
            ""
          )}
          <Form.Select
            aria-label={label}
            id={id}
            className="form-select mb-0"
            isInvalid={!!error}
            {...field}
            disabled={disabled}
          >
            {children}
          </Form.Select>
          <Form.Text id={id} className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </>
      )}
      {...other}
    />
  );
}

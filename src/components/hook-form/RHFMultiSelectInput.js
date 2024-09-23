import PropTypes from "prop-types";
import { Col, Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

RHFMultiSelectInput.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function RHFMultiSelectInput({
  name,
  id,
  label = "",
  disabled = false,
  multiple = false,
  loading = false,
  options = [],
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group as={Col} controlId="my_multiselect_field">
          {label ? (
            <Form.Label htmlFor={id} className="form-label">
              {label}
            </Form.Label>
          ) : (
            ""
          )}
          <Select
            value={field.value}
            isMulti={multiple}
            onChange={field.onChange}
            options={options}
            isDisabled={disabled}
            isSearchable
            isLoading={loading}
          />
          <Form.Text id={id} className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </Form.Group>
      )}
      {...other}
    />
  );
}

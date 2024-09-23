import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";
import { Tooltip } from "react-tooltip";

RHFTextInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextInput({
  name,
  label = "",
  placeholder = "",
  type = "text",
  disabled = false,
  inputProps = {},
  formControlClass = "",
  fieldHint = "",
  hideError = false,
  ...other
}) {
  const { control } = useFormContext();
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? <Form.Label className="form-label">{label}</Form.Label> : ""}
          <Form.Control
            type={type}
            placeholder={placeholder}
            className={formControlClass}
            {...field}
            {...inputProps}
            disabled={disabled}
          />
          {fieldHint ? (
            <div className="info-icon-block">
              <Tooltip id={`${name}-tooltip`} />
              <a
                data-tooltip-id={`${name}-tooltip`}
                data-tooltip-content={fieldHint}
                data-tooltip-place="top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50"
                  height="50"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
                </svg>
              </a>
            </div>
          ) : null}
          {!hideError && errors[name] && (
            <Form.Text className="text-danger">
              {error ? error?.message : ""}
            </Form.Text>
          )}
        </>
      )}
      {...other}
    />
  );
}

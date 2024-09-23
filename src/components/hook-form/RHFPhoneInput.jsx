import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

// form
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

RHFPhoneInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFPhoneInput({
  name,
  placeholder = "",
  disabled = false,
  label = "",
  onChangeCountryCode = () => {},
  ...other
}) {
  const { control } = useFormContext();
  const [showPlaceholder, setShowPlaceholder] = useState(true); // Custom placeholder visibility

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label ? <Form.Label className="form-label">{label}</Form.Label> : ""}
          {showPlaceholder && (
            <span
              style={{
                padding:"80px",
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#000",
                pointerEvents: "none",
                zIndex: 1,
                fontFamily: "Mulish",
                fontSize: "18px",
                fontWeight: 500,
                
              }}
            >
              {placeholder}
            </span>
          )}
          <PhoneInput
            inputStyle={{ width: "100%" }}
            country="in"
            // placeholder={placeholder}
            disabled={disabled}
            onChange={(e, data) => {
              const dialCodeLength = data.dialCode.length;
              const actualNumberLength = e.length - dialCodeLength;
              if (actualNumberLength > 0) {
                setShowPlaceholder(false);
              } else {
                setShowPlaceholder(true);
              }

              field.onChange(e);
              onChangeCountryCode(data);
            }}
            value={field.value}
          />
          <Form.Text className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </>
      )}
      {...other}
    />
  );
}

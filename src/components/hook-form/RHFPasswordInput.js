import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";
import { useToggle } from "@/hooks";
import Link from "next/link";
import { PasswordEye } from "@/assets/svgs";

RHFPasswordInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFPasswordInput({
  name,
  id,
  label = "",
  placeholder = "",
  ...other
}) {
  const { toggle, onToggle } = useToggle(false);

  const { control } = useFormContext();

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
          <Form.Control
            type={toggle ? "text" : "password"}
            placeholder={placeholder}
            {...field}
          />{" "}
          <div className={`eye-password ${toggle ? "show-eye-password" : ""}`}>
            <Link href={"javascript:void(0)"} onClick={onToggle}>
              <PasswordEye />
            </Link>
          </div>
          <Form.Text className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </>
      )}
      {...other}
    />
  );
}

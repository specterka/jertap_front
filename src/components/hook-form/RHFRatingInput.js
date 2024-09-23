import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";
import Rating from "react-rating";
import { YellowRatingStarCategories } from "@/assets/svgs";

RHFRatingInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFRatingInput({
  name,
  label = "",
  disabled = false,
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
          <Rating
            count={5}
            readonly={disabled}
            onChange={field.onChange}
            initialRating={field.value}
            fullSymbol={<YellowRatingStarCategories />}
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

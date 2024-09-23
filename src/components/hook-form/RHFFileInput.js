import { FileAddIcon } from "@/assets/svgs";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
// form
import { Controller, useFormContext } from "react-hook-form";

RHFFileInput.propTypes = {
  name: PropTypes.string,
};

export default function RHFFileInput({
  name,
  id,
  label = "",
  multiple = false,
  accept = "*",
  onChange = () => {},
  onRemoveFile = () => {},
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="upload-collection">
            {label ? (
              <Form.Label htmlFor={id} className="form-label">
                {label}
              </Form.Label>
            ) : (
              ""
            )}
            <div className="upload-detail">
              <span>
                <input
                  className="Input_input__lvORT"
                  type="file"
                  id={name}
                  name={name}
                  multiple={multiple}
                  accept={accept}
                  onChange={(e) => onChange(e.target.files)}
                />
              </span>
              <label className="file-input-label" htmlFor={name}>
                <p>+</p>
              </label>
            </div>
            <div className="d-flex gap-4 flex-wrap">
              {Array.isArray(field.value) && field.value.length > 0
                ? field.value?.map((file, index) => (
                    <figure key={index} className="delet-img position-relative">
                      <img
                        src={file?.preview || file}
                        alt="gallery1"
                        style={{
                          height: 100,
                          width: 100,
                          objectFit: "contain",
                        }}
                        className="rounded-2"
                      />
                      <button
                        className="bg-danger p-1 d-flex justify-content-center align-items-center position-absolute top-0 end-0 border-0 rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          onRemoveFile(index);
                        }}
                      >
                        x
                      </button>
                    </figure>
                  ))
                : null}
            </div>
          </div>
          <Form.Text id={id} className="text-danger">
            {error ? error?.message : ""}
          </Form.Text>
        </>
      )}
      {...other}
    />
  );
}

export const RHFBusinessProfileImage = ({
  name,
  label = "",
  multiple = false,
  accept = "*",
  onChange = () => {},
  onRemoveFile = () => {},
  ...other
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className='profile-img-block form-group profile-img-block-diff'>
            {label ? <label>{label}</label> : ""}
            <div className='file-input'>
              <input
                type='file'
                id={"file-input"}
                name={name}
                multiple={multiple}
                accept={accept}
                onChange={(e) => onChange(e.target.files)}
                className='file-input__input'
              />
              <label className='file-input__label' htmlFor={"file-input"}>
                <FileAddIcon />
              </label>
            </div>
            <div className='d-flex gap-4 flex-wrap'>
              {Array.isArray(field.value) && field.value.length > 0
                ? field.value?.map((file, index) => (
                    <figure key={index} className='delet-img position-relative'>
                      <img
                        src={file?.preview || file}
                        alt='gallery1'
                        style={{
                          height: 100,
                          width: 100,
                          objectFit: "contain"
                        }}
                        className='rounded-2'
                      />
                      <button
                        className='bg-danger p-1 d-flex justify-content-center align-items-center position-absolute top-0 end-0 border-0 rounded'
                        onClick={(e) => {
                          e.preventDefault();
                          onRemoveFile(index);
                        }}>
                        x
                      </button>
                    </figure>
                  ))
                : null}
            </div>
          </div>
          <Form.Text className='text-danger'>{error ? error?.message : ""}</Form.Text>
        </>
      )}
      {...other}
    />
  );
};

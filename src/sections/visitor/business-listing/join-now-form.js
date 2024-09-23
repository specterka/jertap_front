import { ArrowBusinessCrow } from "@/assets/svgs";
import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { useAuth } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { encodeData } from "@/utils/jwt";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const JoinNowForm = () => {
  const defaultValues = {
    email: "",
  };

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        email: yup
          .string()
          .email("Enter valid email address")
          .required("Email address is required"),
      })
      .required()
      .strict(true);
  }, []);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { push } = useRouter();
  const { logout } = useAuth();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmitForm = ({ email }) => {
    try {
      push(`${PATH_BUSINESS.register}/?email=${encodeData(email)}`);
      logout();
      reset();
    } catch (error) {}
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <div
          className="jt-send-email"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Form.Group>
            <RHFTextInput
              type="email"
              placeholder="Enter Your Email"
              name="email"
              hideError={true}
            />
          </Form.Group>
          <Button className="common-btn" disabled={isSubmitting} type="submit">
            Start Now
            <ArrowBusinessCrow />
          </Button>
        </div>
      </FormProvider>
      {errors.email && (
        <div className="text-danger">{errors.email.message}</div>
      )}
    </>
  );
};

export default JoinNowForm;

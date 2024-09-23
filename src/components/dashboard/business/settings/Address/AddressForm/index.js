import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosPatch } from "@/services/axiosHelper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const RestroAddress = ({ addressDetail }) => {
  // Hooks
  const { toaster } = useToaster();
  const { businessId } = useParams();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      address: addressDetail?.address || "",
      city: addressDetail?.city || "",
      country: addressDetail?.country || "",
      location: addressDetail?.location || "",
      state: addressDetail?.state || "",
      zipcode: addressDetail?.zipcode || "",
    }),
    [addressDetail]
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        address: yup
          .string()
          .trim("Enter valid address")
          .required("Address is required"),
        city: yup
          .string()
          .trim("Enter valid city")
          .required("City is required"),
        country: yup
          .string()
          .trim("Enter valid country")
          .required("Country is required"),
        location: yup.string().trim("Enter valid location"),
        state: yup.string().trim("Enter valid state"),
        country_code: yup.string(),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //Methods
  const onSubmitForm = async (formData) => {
    try {
      const { address, city, country, location, state, zipcode } = formData;
      const res = await axiosPatch(
        API_ROUTER.UPDATE_ADDRESS_DETAIL(businessId),
        {
          address,
          city,
          country,
          location,
          state,
          zipcode,
        }
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_ADDRESS_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <div className="profile-form">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
        <div className="d-block d-md-flex align-items-center">
          <Form.Group className="w-100 me-4">
            <RHFTextInput name="address" label="Address" />
          </Form.Group>
          <Form.Group className="w-100">
            <RHFTextInput name="location" label="Location" />
          </Form.Group>
        </div>
        <div className="d-block d-md-flex align-items-center">
          <Form.Group className="w-100 me-4">
            <RHFTextInput name="city" label="City" />
          </Form.Group>
          <Form.Group className="w-100">
            <RHFTextInput name="state" label="State" />
          </Form.Group>
        </div>
        <div className="d-block d-md-flex align-items-center">
          <Form.Group className="w-100 me-4">
            <RHFTextInput name="country" label="Country" />
          </Form.Group>
          <Form.Group className="w-100">
            <RHFTextInput name="zipcode" label="Zipcode" />
          </Form.Group>
        </div>
        <div className="text-left text-md-center">
          <Button type="submit" className="common-btn" disabled={isSubmitting}>
            Update
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};

export default RestroAddress;

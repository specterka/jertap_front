import {
  FormProvider,
  RHFMapInput,
  RHFSelectInput,
  RHFTextInput,
} from "@/components/hook-form";
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGeolocation, useMetaData } from "@/hooks";
import Loader from "@/components/shared/Loader";
import { useLocales, useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";
import { getTranslatedData } from "@/utils/helper";

const center = {
  lat: 51.1655,
  lng: 71.4272,
};

const AddressDetailForm = ({ onSave, businessDetails }) => {
  // Hooks
  const locationConfig = useGeolocation();
  const { t } = useTranslate();
  const [cities, isLoading] = useMetaData(API_ROUTER.GET_CITIES);
  const [states, isStateLoading] = useMetaData(API_ROUTER.GET_STATES);

  // Hook Form Config
  const defaultValues = useMemo(() => {
    return {
      address: businessDetails?.address || "",
      address_ru: businessDetails?.address_ru || "",
      location: businessDetails?.location || "",
      city: businessDetails?.city || "",
      state: businessDetails?.state || "",
      zipcode: businessDetails?.zipcode || "",
      locationConfig: {
        latitude:
          businessDetails?.latitude || locationConfig?.latitude || center.lat,
        longitude:
          businessDetails?.longitude || locationConfig?.longitude || center.lng,
      },
    };
  }, [
    businessDetails,
    locationConfig?.latitude,
    locationConfig?.longitude,
    center,
  ]);
  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        address: yup
          .string()
          .trim(
            t(
              "dashboard.business.address_detail.form.fields.address.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.address_detail.form.fields.address.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.minLength"
            )
          )
          .max(
            1000,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.regex"
            )
          ),
        address_ru: yup
          .string()
          .trim(
            t(
              "dashboard.business.address_detail.form.fields.address.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.address_detail.form.fields.address.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.minLength"
            )
          )
          .max(
            1000,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.address_detail.form.fields.address.errors.regex"
            )
          ),
        location: yup
          .string()
          .trim(
            t(
              "dashboard.business.address_detail.form.fields.location.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.address_detail.form.fields.location.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.address_detail.form.fields.location.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.address_detail.form.fields.location.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.address_detail.form.fields.location.errors.regex"
            )
          ),

        city: yup
          .string()
          .required(
            t(
              "dashboard.business.address_detail.form.fields.city.errors.required"
            )
          ),
        state: yup
          .string()
          .required(
            t(
              "dashboard.business.address_detail.form.fields.state.errors.required"
            )
          ),
        zipcode: yup
          .string()
          .required(
            t(
              "dashboard.business.address_detail.form.fields.zipcode.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.address_detail.form.fields.zipcode.errors.invalid"
            )
          )
          .matches(
            /^[0-9]{6}$/,
            t(
              "dashboard.business.address_detail.form.fields.zipcode.errors.regex"
            )
          ),
        locationConfig: yup.object().shape({
          latitude: yup
            .number()
            .required(
              t(
                "dashboard.business.address_detail.form.fields.locationConfig.errors.required"
              )
            ),
          longitude: yup
            .number()
            .required(
              t(
                "dashboard.business.address_detail.form.fields.locationConfig.errors.required"
              )
            ),
        }),
      })
      .required()
      .strict(true);
  }, [businessDetails]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { currentLang } = useLocales();

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  useEffect(() => {
    setValue(
      "locationConfig.latitude",
      businessDetails?.latitude || locationConfig?.latitude || center.lat
    );
    setValue(
      "locationConfig.longitude",
      businessDetails?.longitude || locationConfig?.longitude || center.lng
    );
  }, [businessDetails, locationConfig]);

  const onSubmitForm = (formData) => {
    const { locationConfig, ...restData } = formData;
    try {
      onSave({
        ...restData,
        latitude: locationConfig.latitude,
        longitude: locationConfig.longitude,
      });
    } catch (error) {}
  };

  // Return
  if (locationConfig.loading) return <Loader />;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-group">
        <RHFTextInput
          name="address"
          placeholder={t(
            "dashboard.business.address_detail.form.fields.address.placeholder"
          )}
        />
      </div>
      <div className="form-group">
        <RHFTextInput
          name="address_ru"
          placeholder={t(
            "dashboard.business.address_detail.form.fields.address_ru.placeholder"
          )}
        />
      </div>
      <div className="form-group-flex">
        <div className="form-group">
          <RHFTextInput
            name="location"
            placeholder={t(
              "dashboard.business.address_detail.form.fields.location.placeholder"
            )}
          />
        </div>
        <div className="form-group select-arrow-before">
          <RHFSelectInput
            name="city"
            placeholder={t(
              "dashboard.business.address_detail.form.fields.city.placeholder"
            )}
            disabled={isLoading}
          >
            <option value={""}>Select city</option>
            {cities &&
              cities.length > 0 &&
              cities.map((item) => (
                <option key={item.id} value={item.id}>
                  {getTranslatedData(currentLang, item, "city")}
                </option>
              ))}
          </RHFSelectInput>
        </div>
      </div>

      <div className="form-group-flex">
        <div className="form-group select-arrow-before">
          <RHFSelectInput
            name="state"
            placeholder={t(
              "dashboard.business.address_detail.form.fields.state.placeholder"
            )}
            disabled={isStateLoading}
          >
            <option value={""}>Select state</option>
            {states &&
              states.length > 0 &&
              states.map((item) => (
                <option key={item.id} value={item.id}>
                  {getTranslatedData(currentLang, item, "state")}
                </option>
              ))}
          </RHFSelectInput>
        </div>
        <div className="form-group">
          <RHFTextInput
            name="zipcode"
            placeholder={t(
              "dashboard.business.address_detail.form.fields.zipcode.placeholder"
            )}
          />
        </div>
      </div>

      <RHFMapInput name="locationConfig" label="Select Location" autocomplete />
      <button
        type="submit"
        className="common-btn btn btn-primary"
        disabled={isSubmitting}
      >
        {t("dashboard.business.address_detail.button.next")}
      </button>
    </FormProvider>
  );
};

export default AddressDetailForm;

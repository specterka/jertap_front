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
import { useGeolocation, useMetaData, useToaster } from "@/hooks";
import Loader from "@/components/shared/Loader";
import { Button } from "react-bootstrap";
import { axiosPatch } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useLocales, useTranslate } from "@/locales";
import { getTranslatedData } from "@/utils/helper";

const center = {
  lat: 51.1655,
  lng: 71.4272,
};

const BusinessAddressForm = ({ address, fetchAddress }) => {
  // Hooks
  const locationConfig = useGeolocation();

  // Hook Form Config
  const { t } = useTranslate();
  const defaultValues = useMemo(() => {
    return {
      address: address?.address || "",
      address_ru: address?.address_ru || "",
      location: address?.location || "",
      city: address?.city?.id || "",
      state: address?.state?.id || "",
      zipcode: address?.zipcode || "",
      locationConfig: {
        latitude: address?.latitude || locationConfig?.latitude || center.lat,
        longitude:
          address?.longitude || locationConfig?.longitude || center.lng,
      },
    };
  }, [address, locationConfig?.latitude, locationConfig?.longitude, center]);

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        address: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.regex"
            )
          ),
        address_ru: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.invalid"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.errors.regex"
            )
          ),
        location: yup
          .string()
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.errors.maxLength"
            )
          )
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.errors.required"
            )
          )
          .min(
            1,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.errors.minLength"
            )
          )
          .max(
            100,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.errors.maxLength"
            )
          )
          .matches(
            /^(?=.*[A-Za-z])[A-Za-z0-9&'.,\- ]{2,}$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.errors.regex"
            )
          ),
        city: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.city.errors.required"
            )
          ),
        state: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.state.errors.required"
            )
          ),
        zipcode: yup
          .string()
          .required(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.zipcode.errors.required"
            )
          )
          .trim(
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.zipcode.errors.invalid"
            )
          )
          .matches(
            /^[0-9]{6}$/,
            t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.zipcode.errors.regex"
            )
          ),
        locationConfig: yup.object().shape({
          latitude: yup
            .number()
            .required(
              t(
                "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.locationConfig.errors.required"
              )
            ),
          longitude: yup
            .number()
            .required(
              t(
                "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.locationConfig.errors.required"
              )
            ),
        }),
      })
      .required()
      .strict(true);
  }, [address, t]);

  // Hooks
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { currentLang } = useLocales();

  const { businessId } = useParams();
  const { toaster } = useToaster();
  const [cities, isLoading] = useMetaData(API_ROUTER.GET_CITIES);
  const [states, isStateLoading] = useMetaData(API_ROUTER.GET_STATES);

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    reset,
  } = methods;

  useEffect(() => {
    setValue(
      "locationConfig.latitude",
      address?.latitude || locationConfig?.latitude || center.lat
    );
    setValue(
      "locationConfig.longitude",
      address?.longitude || locationConfig?.longitude || center.lng
    );
  }, [address, locationConfig]);

  const onSubmitForm = async (formData) => {
    const { locationConfig, ...restData } = formData;
    try {
      const payload = {
        ...restData,
        latitude: locationConfig.latitude,
        longitude: locationConfig.longitude,
      };

      const res = await axiosPatch(
        API_ROUTER.UPDATE_ADDRESS_DETAIL(businessId),
        payload
      );
      if (!res.status) {
        return toaster(
          res.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_ADDRESS_UPDATE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchAddress();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  // Return
  if (locationConfig.loading) return <Loader />;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-group full-width-block">
        <RHFTextInput
          name="address"
          placeholder={t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.placeholder"
          )}
          label={t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.label"
          )}
        />
      </div>
      <div className="form-group full-width-block">
        <RHFTextInput
          name="address_ru"
          placeholder={t(
            "dashboard.business.address_detail.form.fields.address_ru.placeholder"
          )}
          label={t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.address.label"
          )}
        />
      </div>
      <div className="form-group-two">
        <div className="form-group">
          <RHFTextInput
            name="location"
            placeholder={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.location.label"
            )}
          />
        </div>
        <div className="form-group select-arrow-before">
          <RHFSelectInput
            name="city"
            placeholder={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.city.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.city.label"
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
      <div className="form-group-two">
        <div className="form-group">
          <RHFSelectInput
            name="state"
            placeholder={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.state.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.state.label"
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
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.zipcode.placeholder"
            )}
            label={t(
              "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.zipcode.label"
            )}
          />
        </div>
      </div>
      <div className="lang-lat-block form-group full-width-block">
        <RHFMapInput
          name="locationConfig"
          label={t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.form.fields.locationConfig.label"
          )}
          autocomplete
        />
      </div>
      <div className="btn-group-main">
        <Button variant="common-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? t(
                "dashboard.business.settings.businessProfile.tabs.addressDetail.form.button.updating"
              )
            : t(
                "dashboard.business.settings.businessProfile.tabs.addressDetail.form.button.update"
              )}
        </Button>
        <Button variant="btn-common-btn" onClick={onCancel}>
          {t(
            "dashboard.business.settings.businessProfile.tabs.addressDetail.form.button.cancel"
          )}
        </Button>
      </div>
    </FormProvider>
  );
};

export default BusinessAddressForm;

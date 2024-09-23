import { CONFIG } from "@/configs/environment";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Loader from "../shared/Loader";
import { Form } from "react-bootstrap";

const libraries = ["places"];

const RHFMapInput = ({
  name,
  label = "",
  disabled = true,
  autocomplete = false,
  ...other
}) => {
  // Hooks

  const [searchResult, setSearchResult] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: CONFIG.GOOGLE_MAP_KEY,
    libraries,
  });
  const { control } = useFormContext();

  // Return
  if (!isLoaded) return <Loader />;

  const onLoad = (autocomplete) => {
    setSearchResult(autocomplete);
  };

  const onPlaceChanged = (onChange) => {
    try {
      if (searchResult != null) {
        const place = searchResult.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        onChange({ latitude: latitude, longitude: longitude });
      }
    } catch (error) {}
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="profile-img-block">
          {label ? <h4>{label}</h4> : null}
          {autocomplete ? (
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={() => onPlaceChanged(field.onChange)}
            >
              <div className="form-group">
                <input type="search" placeholder="Search places" />
              </div>
            </Autocomplete>
          ) : null}
          <GoogleMap
            zoom={field.value.latitude ? 18 : 12}
            center={{
              lat: field.value.latitude,
              lng: field.value.longitude,
            }}
            mapContainerClassName="map"
          >
            <Marker
              position={{
                lat: field.value.latitude,
                lng: field.value.longitude,
              }}
              draggable={disabled}
              onDragEnd={(e) =>
                field.onChange({
                  latitude: e.latLng.lat(),
                  longitude: e.latLng.lng(),
                })
              }
            />
          </GoogleMap>
          {error ? (
            <Form.Text className="text-danger">
              {error?.latitude?.message}
            </Form.Text>
          ) : null}
        </div>
      )}
      {...other}
    />
  );
};

export default RHFMapInput;

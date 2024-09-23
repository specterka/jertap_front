import { useEffect, useRef, useState } from "react";

const useGeolocation = (options = {}) => {
  // States
  const [locationConfig, setLocationConfig] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  // Hooks
  const optionsRef = useRef(options);

  // Effects
  useEffect(() => {
    const onEvent = ({ coords, timestamp }) => {
      setLocationConfig({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
      });
    };

    const onEventError = (error) => {
      setLocationConfig((prev) => ({
        ...prev,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return locationConfig;
};

export default useGeolocation;

"use client";

import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  isSideNavigationOpen: true,
  isHomePageNavigationOpen: false,
  isRestaurantStatusOpen: false,
};

export const SettingContext = createContext({
  ...initialState,
  onToggleSideNavigation: () => {},
  onToggleHomePageSideNavigation: () => {},
  onToggleRestaurantStatusOpen: () => {},
});

export const SettingProvider = ({ children }) => {
  // States
  const [settings, setSettings] = useState({ ...initialState });

  // Methods
  const onToggleSideNavigation = (isOpen = null) =>
    setSettings((prev) => ({
      ...prev,
      isSideNavigationOpen:
        isOpen !== null ? isOpen : !prev?.isSideNavigationOpen,
    }));

  const onToggleHomePageSideNavigation = (isOpen = null) =>
    setSettings((prev) => ({
      ...prev,
      isHomePageNavigationOpen:
        isOpen !== null ? isOpen : !settings.isHomePageNavigationOpen,
    }));

  const onToggleRestaurantStatusOpen = (isOpen = null) =>
    setSettings((prev) => ({
      ...prev,
      isRestaurantStatusOpen:
        isOpen !== null ? isOpen : !settings.isRestaurantStatusOpen,
    }));

  return (
    <SettingContext.Provider
      value={{
        ...settings,
        onToggleSideNavigation,
        onToggleHomePageSideNavigation,
        onToggleRestaurantStatusOpen,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

SettingProvider.propTypes = {
  children: PropTypes.node,
};

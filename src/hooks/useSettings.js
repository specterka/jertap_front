import { SettingContext } from "@/contexts/SettingContext";
import { useContext } from "react";

const useSettings = () => {
  return useContext(SettingContext);
};

export default useSettings;

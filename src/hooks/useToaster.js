import { toast } from "react-toastify";

const useToaster = () => {
  // VARIANT success, info, error, warn
  const toaster = (message, variant, options = {}) => {
    toast[variant](message, options);
  };

  return { toaster };
};

export default useToaster;

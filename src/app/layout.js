// import "../styles/globals.scss";

// i18n
import "src/locales/i18n";

import "../../public/fonts/stylesheet.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "react-tabs/style/react-tabs.css";
import "../styles/globals.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-tooltip/dist/react-tooltip.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/contexts/AuthContext";
import { SettingProvider } from "@/contexts/SettingContext";
import ToastWrapper from "@/components/ToastContainer";
import StyledComponentsRegistry from "@/utils/registry";
import { NotificationProvider } from "@/contexts/NotificationContext";

export const metadata = {
  title: "Jertap",
  description: "Jertap is ready!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          {
            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
              <AuthProvider>
                <SettingProvider>
                  <NotificationProvider>
                    <ToastWrapper />
                    {children}
                  </NotificationProvider>
                </SettingProvider>
              </AuthProvider>
            </GoogleOAuthProvider>
          }
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}

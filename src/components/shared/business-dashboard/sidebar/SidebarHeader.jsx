import { SideBarCloseIcon } from "@/assets/svgs";
import { useSettings } from "@/hooks";
import Link from "next/link";
import React from "react";

const SidebarHeader = () => {
  // Hooks
  const { isSideNavigationOpen, onToggleSideNavigation } = useSettings();

  return (
    <div className="logo-detail">
      <i className="small-logo">
        <svg
          className={isSideNavigationOpen ? "side-open" : "side-close"}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5485 15.685C25.5507 16.165 25.3065 16.3216 24.9211 16.128C24.2356 15.7839 23.5524 15.4343 22.8839 15.0592C22.5778 14.8875 22.3304 14.8635 22.0117 15.0473C21.3597 15.4235 20.6852 15.7622 20.0079 16.0932C19.8606 16.165 19.6017 16.2145 19.507 16.1373C19.3887 16.041 19.323 15.7942 19.346 15.6279C19.4577 14.8211 19.6203 14.0214 19.7314 13.2147C19.7533 13.0565 19.6723 12.8325 19.5584 12.7156C19.0148 12.1573 18.4344 11.6343 17.8897 11.0771C17.7583 10.9428 17.6017 10.6748 17.6554 10.559C17.7282 10.4025 17.9811 10.2714 18.176 10.2372C18.9447 10.1018 19.7238 10.023 20.4924 9.88927C20.654 9.861 20.8489 9.7202 20.9266 9.57668C21.2912 8.90638 21.606 8.20944 21.9707 7.53913C22.072 7.35267 22.2893 7.09879 22.4432 7.10586C22.609 7.11292 22.8111 7.36408 22.9135 7.55381C23.2704 8.21379 23.5989 8.88898 23.9203 9.56689C24.0227 9.7838 24.1563 9.87785 24.3972 9.90667C25.1724 9.99963 25.9466 10.1056 26.7158 10.2383C26.9019 10.2704 27.1609 10.3894 27.214 10.5318C27.2638 10.6656 27.1297 10.9249 27.0016 11.057C26.4387 11.6338 25.8414 12.1769 25.2759 12.751C25.1784 12.8499 25.1149 13.0478 25.1352 13.1853C25.2605 14.0416 25.4149 14.8956 25.5485 15.685Z"
            fill="url(#paint0_linear_36_174)"
          />
          <path
            d="M33.4201 9.36635C32.3104 3.35919 26.4457 -0.619136 20.3767 0.492054C15.1093 1.45266 11.2544 6.07084 11.2451 11.8807C11.2643 13.7638 11.9421 15.9014 13.3026 17.8079C16.0619 21.6824 18.8312 25.5525 21.5949 29.427C22.0783 30.1001 22.7802 30.1001 23.2636 29.4319C26.0285 25.5569 28.807 21.6916 31.5521 17.8123C33.3583 15.261 33.989 12.4265 33.4201 9.36635ZM22.4342 19.2882C18.2426 19.2882 14.8443 15.9144 14.8443 11.7524C14.8443 7.5903 18.2421 4.21595 22.4342 4.21595C26.6258 4.21595 30.0241 7.58975 30.0241 11.7524C30.0235 15.9139 26.6258 19.2882 22.4342 19.2882Z"
            fill="url(#paint1_linear_36_174)"
          />
          <path
            d="M3.73211 29.9505C3.21527 29.4677 2.74936 28.8936 2.37433 28.25C2.06007 27.7368 1.39103 27.5655 0.864348 27.8678C0.347516 28.1695 0.175056 28.8442 0.479461 29.3574C0.965633 30.1826 1.56404 30.9274 2.23253 31.5509C2.4455 31.7423 2.7187 31.8429 2.98259 31.8429C3.27659 31.8429 3.5706 31.7222 3.78302 31.4906C4.19802 31.0475 4.17776 30.3631 3.73211 29.9505Z"
            fill="url(#paint2_linear_36_174)"
          />
          <path
            d="M19.6129 30.5546C18.9439 30.3132 18.3258 30.1724 17.7175 30.1219C17.4136 30.1018 17.1092 30.0817 16.7955 30.0817C16.1977 30.0615 15.6907 30.5448 15.6808 31.1483C15.6704 31.7523 16.1571 32.2453 16.7654 32.2551C17.0189 32.2649 17.2822 32.2752 17.5357 32.2953C17.9513 32.3356 18.3871 32.4361 18.8634 32.6074C18.9953 32.6476 19.1169 32.6677 19.2384 32.6677C19.6945 32.6677 20.11 32.3959 20.2721 31.9534C20.4741 31.3799 20.1801 30.7558 19.6129 30.5546Z"
            fill="url(#paint3_linear_36_174)"
          />
          <path
            d="M13.471 30.3736C12.6804 30.5248 11.9002 30.6955 11.1403 30.877L10.958 30.9173C10.37 31.0581 10.0054 31.6419 10.1373 32.2252C10.2589 32.7286 10.7149 33.0706 11.2115 33.0706C11.2925 33.0706 11.3736 33.0603 11.465 33.0402L11.6473 32.9999C12.4072 32.8189 13.1272 32.658 13.8564 32.527C14.4543 32.4161 14.8496 31.8425 14.7384 31.2592C14.6366 30.6656 14.059 30.273 13.471 30.3736Z"
            fill="url(#paint4_linear_36_174)"
          />
          <path
            d="M8.02845 31.4901C7.3293 31.5608 6.64001 31.4901 5.98138 31.289C5.40378 31.1079 4.78566 31.4298 4.6132 32.0033C4.43089 32.5768 4.74515 33.1808 5.3326 33.3619C6.03175 33.5831 6.77141 33.694 7.51162 33.694C7.7547 33.694 7.99779 33.6837 8.24142 33.6636C8.83928 33.6032 9.28549 33.0699 9.22472 32.4659C9.16395 31.8728 8.63671 31.4298 8.02845 31.4901Z"
            fill="url(#paint5_linear_36_174)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_36_174"
              x1="17.6445"
              y1="7.10571"
              x2="27.2246"
              y2="7.10571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_36_174"
              x1="11.2451"
              y1="0.305908"
              x2="33.6228"
              y2="0.305908"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_36_174"
              x1="0.329102"
              y1="27.7185"
              x2="4.08086"
              y2="27.7185"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_36_174"
              x1="15.6807"
              y1="30.0811"
              x2="20.3358"
              y2="30.0811"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_36_174"
              x1="10.1104"
              y1="30.3579"
              x2="14.7572"
              y2="30.3579"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_36_174"
              x1="4.56152"
              y1="31.2385"
              x2="9.23026"
              y2="31.2385"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
          </defs>
        </svg>
      </i>
      <i className="logo-icon">
        <svg
          className={isSideNavigationOpen ? " side-close" : "side-open"}
          width="130"
          height="40"
          viewBox="0 0 130 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5488 18.685C28.551 19.165 28.3068 19.3216 27.9213 19.128C27.2359 18.7839 26.5526 18.4343 25.8841 18.0592C25.5781 17.8875 25.3306 17.8635 25.012 18.0473C24.3599 18.4235 23.6854 18.7622 23.0082 19.0932C22.8609 19.165 22.6019 19.2145 22.5072 19.1373C22.389 19.041 22.3233 18.7942 22.3462 18.6279C22.4579 17.8211 22.6205 17.0214 22.7317 16.2147C22.7536 16.0565 22.6726 15.8325 22.5587 15.7156C22.015 15.1573 21.4347 14.6343 20.8899 14.0771C20.7585 13.9428 20.6019 13.6748 20.6556 13.559C20.7284 13.4025 20.9814 13.2714 21.1763 13.2372C21.9449 13.1018 22.724 13.023 23.4927 12.8893C23.6542 12.861 23.8491 12.7202 23.9269 12.5767C24.2915 11.9064 24.6063 11.2094 24.9709 10.5391C25.0722 10.3527 25.2896 10.0988 25.4434 10.1059C25.6093 10.1129 25.8113 10.3641 25.9137 10.5538C26.2707 11.2138 26.5992 11.889 26.9205 12.5669C27.0229 12.7838 27.1565 12.8779 27.3974 12.9067C28.1726 12.9996 28.9468 13.1056 29.716 13.2383C29.9022 13.2704 30.1611 13.3894 30.2142 13.5318C30.2641 13.6656 30.1299 13.9249 30.0018 14.057C29.439 14.6338 28.8417 15.1769 28.2761 15.751C28.1787 15.8499 28.1152 16.0478 28.1354 16.1853C28.2608 17.0416 28.4152 17.8956 28.5488 18.685Z"
            fill="url(#paint0_linear_1_166)"
          />
          <path
            d="M36.4206 12.3664C35.3109 6.35919 29.4461 2.38086 23.3772 3.49205C18.1098 4.45266 14.2549 9.07084 14.2456 14.8807C14.2648 16.7638 14.9426 18.9014 16.3031 20.8079C19.0624 24.6824 21.8316 28.5525 24.5954 32.427C25.0788 33.1001 25.7807 33.1001 26.2641 32.4319C29.029 28.5569 31.8075 24.6916 34.5526 20.8123C36.3588 18.261 36.9895 15.4265 36.4206 12.3664ZM25.4347 22.2882C21.2431 22.2882 17.8448 18.9144 17.8448 14.7524C17.8448 10.5903 21.2425 7.21595 25.4347 7.21595C29.6263 7.21595 33.0245 10.5898 33.0245 14.7524C33.024 18.9139 29.6263 22.2882 25.4347 22.2882Z"
            fill="url(#paint1_linear_1_166)"
          />
          <path
            d="M6.73235 32.9505C6.21552 32.4677 5.7496 31.8936 5.37457 31.25C5.06031 30.7368 4.39128 30.5655 3.86459 30.8678C3.34776 31.1695 3.1753 31.8442 3.47971 32.3574C3.96588 33.1826 4.56429 33.9274 5.23277 34.5509C5.44575 34.7423 5.71894 34.8429 5.98283 34.8429C6.27684 34.8429 6.57084 34.7222 6.78327 34.4906C7.19826 34.0475 7.17801 33.3631 6.73235 32.9505Z"
            fill="url(#paint2_linear_1_166)"
          />
          <path
            d="M22.6129 33.5546C21.9439 33.3132 21.3258 33.1724 20.7175 33.1219C20.4136 33.1018 20.1092 33.0817 19.7955 33.0817C19.1977 33.0615 18.6907 33.5448 18.6808 34.1483C18.6704 34.7523 19.1571 35.2453 19.7654 35.2551C20.0189 35.2649 20.2822 35.2752 20.5357 35.2953C20.9513 35.3356 21.3871 35.4361 21.8634 35.6074C21.9953 35.6476 22.1169 35.6677 22.2384 35.6677C22.6945 35.6677 23.11 35.3959 23.2721 34.9534C23.4741 34.3799 23.1801 33.7558 22.6129 33.5546Z"
            fill="url(#paint3_linear_1_166)"
          />
          <path
            d="M16.4711 33.3736C15.6805 33.5248 14.9004 33.6955 14.1404 33.877L13.9581 33.9173C13.3701 34.0581 13.0055 34.6419 13.1374 35.2252C13.259 35.7286 13.715 36.0706 14.2116 36.0706C14.2927 36.0706 14.3737 36.0603 14.4651 36.0402L14.6474 35.9999C15.4073 35.8189 16.1273 35.658 16.8566 35.527C17.4544 35.4161 17.8497 34.8425 17.7386 34.2592C17.6367 33.6656 17.0591 33.273 16.4711 33.3736Z"
            fill="url(#paint4_linear_1_166)"
          />
          <path
            d="M11.0291 34.4901C10.3299 34.5608 9.64062 34.4901 8.98199 34.289C8.40439 34.1079 7.78627 34.4298 7.61381 35.0033C7.4315 35.5768 7.74576 36.1808 8.33321 36.3619C9.03236 36.5831 9.77202 36.694 10.5122 36.694C10.7553 36.694 10.9984 36.6837 11.242 36.6636C11.8399 36.6032 12.2861 36.0699 12.2253 35.4659C12.1646 34.8728 11.6373 34.4298 11.0291 34.4901Z"
            fill="url(#paint5_linear_1_166)"
          />
          <path
            d="M48.2579 26.5519C46.7989 26.5519 45.0274 26.1639 43.282 25.2585L44.9362 22.0639C45.861 22.7106 46.7598 23.0598 47.7889 23.0598C49.3259 23.0598 50.1075 22.1415 50.1075 19.9555V7.60352H54.0152V20.6797C54.0152 24.5082 51.6706 26.5519 48.2579 26.5519ZM70.6876 19.4512L70.6486 20.3436H60.7229C60.8793 22.5553 62.3642 23.6159 64.1488 23.6159C65.4905 23.6159 66.5325 22.9951 67.0405 21.8181L70.4793 22.3226C69.5936 25.0129 67.1838 26.5521 64.1748 26.5521C59.8502 26.5521 57.0237 24.0169 57.0237 19.6453C57.0237 15.2738 59.9284 12.7127 64.0575 12.7127C67.848 12.7127 70.6746 14.795 70.6876 19.4512ZM64.0842 15.3511C62.3778 15.3511 61.1925 16.1401 60.8278 17.9121H66.976C66.7806 16.2177 65.6213 15.3511 64.0842 15.3511ZM77.136 15.1053C77.8133 13.9283 79.5718 12.8418 81.5127 12.8418V16.1659C78.6731 16.1659 77.3185 16.9937 77.3185 19.8133V26.2933H73.541V12.9972H77.1361L77.136 15.1053ZM95.1249 7.60405V11.0186H90.657V26.2934H86.7884V11.0186H82.2945V7.60405H95.1249ZM108.567 22.6847C108.567 24.3144 108.723 25.3491 108.893 25.9312V26.2933H105.389L105.089 24.8446C104.086 26.0475 102.354 26.552 100.791 26.552C98.6805 26.552 96.6224 25.6207 96.6224 22.8528C96.6224 20.0978 98.6934 19.1666 101.494 18.5587L103.695 18.0672C104.646 17.8473 104.985 17.524 104.985 16.9808C104.985 15.6744 103.787 15.3122 102.731 15.3122C101.377 15.3122 100.348 15.8425 100.113 17.3429L96.7916 16.7479C97.3518 13.9929 99.3838 12.7384 102.94 12.7384C105.623 12.7384 108.567 13.5274 108.567 17.5369L108.567 22.6847ZM101.963 24.0298C103.748 24.0298 105.18 22.8528 105.18 20.2142L102.002 21.1067C100.96 21.3524 100.204 21.7145 100.204 22.607C100.204 23.5641 100.999 24.0298 101.963 24.0298ZM120.069 12.7389C123.599 12.7389 126.517 15.3128 126.517 19.6716C126.517 24.0303 123.599 26.6042 120.069 26.6042C118.323 26.6042 116.76 25.9317 115.966 24.7159V32.7608H112.214V12.9974H115.77L115.875 14.7824C116.617 13.4631 118.245 12.7389 120.069 12.7389ZM119.222 23.5125C121.189 23.5125 122.765 22.0898 122.765 19.6711C122.765 17.2524 121.189 15.8296 119.222 15.8296C117.216 15.8296 115.653 17.3429 115.653 19.6711C115.653 21.9992 117.216 23.5125 119.222 23.5125Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_166"
              x1="20.6448"
              y1="10.1057"
              x2="30.2249"
              y2="10.1057"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_166"
              x1="14.2456"
              y1="3.30591"
              x2="36.6233"
              y2="3.30591"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_166"
              x1="3.32935"
              y1="30.7185"
              x2="7.08111"
              y2="30.7185"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_166"
              x1="18.6807"
              y1="33.0811"
              x2="23.3358"
              y2="33.0811"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_166"
              x1="13.1105"
              y1="33.3579"
              x2="17.7573"
              y2="33.3579"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_166"
              x1="7.56213"
              y1="34.2385"
              x2="12.2309"
              y2="34.2385"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D141D" />
              <stop offset="1" stopColor="#FF1E27" />
            </linearGradient>
          </defs>
        </svg>
      </i>
      {isSideNavigationOpen ? (
        <Link
          className="toggle-btn"
          href={"javascript:void(0)"}
          onClick={() => onToggleSideNavigation(false)}
        >
          <SideBarCloseIcon />
        </Link>
      ) : null}
    </div>
  );
};

export default SidebarHeader;

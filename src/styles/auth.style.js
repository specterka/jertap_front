import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const LoginMain = styled.div`
  height: auto;
  position: relative;
  display: block;
  background-image: url(../../images/login-banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  @media ${MinDevice.mobileSm} {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${MinDevice.mobileXxl} {
    padding: 80px 0;
    background-size: 100%;
  }
  .social-login-btn {
    margin-top: 25px;
    > div {
      margin-bottom: 10px;
    }
    @media ${MinDevice.mobileLg} {
      margin-top: 50px;
    }
    .social-login-button {
      background-color: #587ac3;
      width: 180px;
      height: 40px;
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      border-radius: 4px;
      overflow: hidden;
      margin-right: 10px;
      .icon-button {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #405da2;
      }
      .text-button {
        padding-left: 22px;
        color: #ffffff;
        font-size: 18px;
        font-family: "Mulish";
        font-weight: 400;
      }
      &.google-btn {
        background-color: #db4337;
        .icon-button {
          background-color: #c54035;
        }
      }
    }
  }
  .login-left {
    padding: 0;
    width: 100%;
    margin-bottom: 15px;
    padding: 20px;
    @media ${MinDevice.mobileSm} {
      width: 55%;
      margin-bottom: 0;
    }
    @media ${MinDevice.mobileLg} {
      padding: 60px;
    }
    .jt-logo {
      margin: 30px 0 28px;
      display: block;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
    }
    /* a {
      svg {
        display: none;
        @media ${MinDevice.mobileSm} {
          display: block;
        }
      }
    } */

    h1 {
      font-size: 30px;
      line-height: 40px;
      color: #fff;
      margin-bottom: 15px;
      font-weight: 500;

      @media ${MinDevice.mobileLg} {
        font-size: 60px;
        line-height: 82px;
      }
    }
    p {
      font-size: 20px;
      line-height: 30px;
      color: #fff;
      font-weight: 300;
    }
    .social-login-btn {
      display: none;
      @media ${MinDevice.mobileSm} {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  .login-right {
    padding: 0;
    width: 100%;
    @media ${MinDevice.mobileSm} {
      width: 45%;
      padding: 15px;
    }
    @media ${MinDevice.mobileLg} {
      padding: 0px 60px 0px 30px;
    }
    .login-right-inner {
      padding: 20px 18px;
      @media ${MinDevice.mobileLg} {
        padding: 35px 42px;
      }
      background-color: #fff;
      .login-right-inner-link {
        a {
          display: flex;
          justify-content: center;
          svg {
            display: none;
            @media ${MinDevice.mobileSm} {
              display: block;
            }
          }
        }
        h2 {
          color: #0f4da2;
          font-size: 30px;
          line-height: 34px;
          font-weight: 500;
          margin: 30px 0 50px;
          @media ${MinDevice.mobileSm} {
            margin: 20px 0px 60px;
            display: block;
          }
        }
        .nav-tabs {
          border-bottom: 1px solid #000;
          font-family: "Nunito";
          padding-bottom: 1px;
          margin-bottom: 30px !important;
          .nav-item {
            button {
              font-size: 18px;
              line-height: 24px;
              color: #000;
              font-weight: 600;
              border: none;
              padding: 9px;
              border-radius: 10px 10px 0px 0px;
              @media ${MinDevice.mobileLg} {
                padding: 11px 17px;
              }
              &.active {
                background-color: rgba(15, 77, 162, 0.1);
                color: #0f4da2;
              }
            }
          }
        }
        .form-group {
          position: relative;
          margin-bottom: 30px;
          &.select-arrow-before {
            &::before {
              content: "";
              position: absolute;
              right: 0px;
              top: 20px;
              background: url('data:image/svg+xml,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2427_2)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17389 1.23247C1.05473 1.3584 0.98847 1.52526 0.988779 1.69862C0.989087 1.87198 1.05594 2.03861 1.17555 2.16411L6.44415 7.60392C6.56029 7.72569 6.69998 7.82257 6.85474 7.88866C7.00949 7.95475 7.17606 7.98868 7.34434 7.98838C7.51261 7.98808 7.67907 7.95356 7.83358 7.88692C7.9881 7.82027 8.12745 7.7229 8.24315 7.60071L13.5311 2.10265C13.7756 1.84767 13.7781 1.4353 13.5358 1.17737C13.4781 1.11492 13.4081 1.065 13.3303 1.03072C13.2525 0.996434 13.1685 0.978513 13.0834 0.978068C12.9984 0.977622 12.9142 0.994663 12.836 1.02813C12.7578 1.0616 12.6874 1.11078 12.629 1.17262L7.79075 6.20406C7.7329 6.2652 7.6632 6.31393 7.58592 6.34729C7.50863 6.38064 7.42537 6.39791 7.34119 6.39806C7.25701 6.39821 7.17369 6.38123 7.09628 6.34816C7.01888 6.31508 6.94901 6.2666 6.89094 6.20566L2.07307 1.23151C2.01505 1.17059 1.94524 1.12212 1.86789 1.08905C1.79054 1.05598 1.70726 1.03901 1.62314 1.03916C1.53901 1.03931 1.4558 1.05658 1.37856 1.08992C1.30133 1.12327 1.23169 1.17135 1.17389 1.23247Z" fill="%230F4DA2"/></g><defs><clipPath id="clip0_2427_2"><rect width="7" height="12.7273" fill="white" transform="translate(1 8) rotate(-90.102)"/></clipPath></defs></svg>');
              width: 15px;
              height: 9px;
            }
          }

          input {
            font-size: 18px;
            color: #000;
            padding: 12px 0px;
            background: none;
            border: none;
            outline: none;
            box-shadow: none;
            font-weight: 500;
            border-bottom: 1px solid #000 !important;
            font-family: "Mulish";
            border-radius: 0px;
            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
              -webkit-background-clip: text;
              -webkit-text-fill-color: #000;
              transition: background-color 5000s ease-in-out 0s;
              box-shadow: inset 0 0 20px 20px #ffffff;
            }
            &::placeholder {
              color: #000;
            }

            &::-ms-input-placeholder {
              /* Edge 12 -18 */
              color: #000;
            }
          }
          .form-select {
            font-size: 18px;
            color: #000;
            padding: 12px 0px;
            background: none;
            border: none;
            outline: none;
            box-shadow: none;
            font-weight: 500;
            border-bottom: 1px solid #000 !important;
            font-family: "Mulish";
            border-radius: 0px;
          }
          .eye-password {
            position: absolute;
            top: 24px;
            right: 0px;
            &.show-eye-password {
              &::before {
                content: "";
                position: absolute;
                width: 3px;
                height: 20px;
                background: #000;
                transform: rotate(45deg);
                top: -3px;
                left: 8px;
                right: 0;
              }
            }
            svg {
              display: block;
            }
          }
          small.text-danger.form-text {
            text-align: left;
            display: block;
            position: absolute;
            bottom: -22px;
            font-family: "Mulish";
          }
          .react-tel-input {
            font-family: "Mulish";
            .form-control {
              height: auto;
              padding-left: 50px;
            }
            .flag-dropdown {
              background: none;
              border: none;
              bottom: 1px;
            }
            .country-list {
              text-align: left;
            }
          }
        }
        .forgot-password {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          margin-bottom: 30px;
          a {
            color: #000;
            font-size: 18px;
            font-weight: 500;
            font-family: "Mulish";
            text-decoration: none;
            &:hover {
              color: #0f4da2;
            }
          }
        }
        .common-btn {
          width: 100%;
          background-color: #0f4da2;
          border: none;
          outline: none;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: "Nunito";
          padding: 12px;
          transition: 0.5s;
          border-radius: 10px;
          &:hover {
            opacity: 0.7;
            transition: 0.5s;
          }
        }
        .last-bottom-text {
          margin-top: 30px;
          p {
            font-size: 15px;
            line-height: 18px;
            color: #000;
            display: flex;
            justify-content: center;
            @media ${MinDevice.mobileMd} {
              font-size: 18px;
              line-height: 20px;
            }
            a {
              font-family: "Mulish";
              color: #0f4da2;
              text-decoration: none;
              margin-left: 10px;
            }
          }
        }
        .checkbox-custom {
          position: relative;
          margin-bottom: 30px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          .input-group-text {
            border: none;
            background-color: transparent;
            padding: 0px 7px 0px 0px;
            @media ${MinDevice.mobileMd} {
              padding: 0px 14px 0px 0px;
            }
            input {
              border-radius: 4px;
              padding: 0 14px 0 0;
              margin-bottom: 0;
              width: 20px;
              height: 20px;
              &:checked {
                background-color: #0f4da2;
              }
              &:focus {
                box-shadow: none;
              }
            }
          }
          p {
            font-size: 15px;
            line-height: 18px;
            color: #000;
            position: relative;
            top: 3px;
            display: flex;
            @media ${MinDevice.mobileMd} {
              font-size: 18px;
              line-height: 20px;
            }
            a {
              display: block;
              color: #0f4da2;
              text-decoration: none;
              margin-left: 10px;
            }
          }
        }
        /* .tab-content {
        
        } */
        p {
          text-align: right;
          margin-bottom: 0;
        }
      }
    }
    .social-login-btn {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
    }
  }
  .add-company {
    .form-group {
      .form-select {
        border: none;
        border-bottom: 1px solid black;
        padding: 13px 0;
        border-radius: 0;
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
      }
    }
  }
  .add-select-branch {
    width: 800px;
    padding: 100px 35px;
    background-color: #fff;
    .add-select-branch-inner {
      h2 {
        margin-bottom: 30px;
        font-size: 30px;
        line-height: 30px;
        font-weight: 700;
        color: #0f4da2;
        &.mb-20 {
          margin-bottom: 20px;
        }
      }
      p {
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        color: #525252;
        margin-bottom: 50px;
      }
      .add-select-button {
        display: flex;
        align-items: center;
        margin: 0px -15px;
        .add-select-button-inner {
          width: 25%;
          padding: 0px 15px;
          button,
          a {
            width: 100%;
            height: 100px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            border: 1px solid #e1dfdf;
            background: transparent;
            font-size: 20px;
            line-height: 20px;
            color: #333;
            font-weight: 700;
            &:hover {
              background-color: #0f4da2;
              color: #fff;
            }
            &.plus-button {
              font-size: 40px;
              color: #0f4da2;
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
      .add-branch-button {
        display: flex;
        padding: 0px;
        gap: 20px;
        align-items: center;
        justify-content: center;
        .common-btn {
          width: 250px;
          background-color: #0f4da2;
          border: none;
          outline: none;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: "Nunito";
          padding: 12px;
          transition: 0.5s;
          border-radius: 10px;
          &:hover {
            opacity: 0.7;
            transition: 0.5s;
          }
        }
      }
    }
    &.add-select-branch-slider {
      width: 1045px;
      padding: 50px 35px;
      .slick-slider-block {
        margin-bottom: 35px;
        .slick-slide {
          padding: 15px;
        }
        .slick-img-block-inner {
          .slick-img-block-inner-main {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border-radius: 20px;
            .slick-img-block-inner-main-img {
              position: relative;
              p {
                padding: 5px;
                border-radius: 5px;
                background-color: #0f4da2;
                margin: 0px;
                position: absolute;
                top: 0px;
                border-radius: 20px;
                padding: 2px 19px;
                left: 10px;
                top: 10px;
                color: #fff;
                font-size: 12px;
              }
              img {
                width: 100%;
                border-radius: 20px;
                height: 184px;
                object-fit: cover;
              }
            }
            .slick-img-block-inner-main-text {
              padding: 20px 15px;
              text-align: left;
              h3 {
                font-size: 20px;
                line-height: 24px;
                color: #000000;
                margin-bottom: 10px;
                font-weight: bold;
              }
              p {
                font-size: 14px;
                line-height: 20px;
                color: #333333;
                margin: 0px 0px 10px 0px;
                text-align: left;
                span {
                  font-weight: bold;
                }
              }
            }
          }
        }
        .slick-img-block-inner-hover {
          display: none;
        }
        .disable-slider {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: rgb(240, 240, 240, 0.7);
            border-radius: 20px;
            z-index: 9;
          }
          .slick-img-block-inner-hover {
            display: block !important;
            position: relative;
            z-index: 99;
            position: absolute;
            opacity: 0;
            visibility: hidden;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            padding: 7px 15px;
            border-radius: 5px;
            margin-top: -13px;
            p {
              color: #fff;
              margin: 0px;
              font-size: 15px;
            }
          }
          &:hover {
            .slick-img-block-inner-hover {
              opacity: 1;
              visibility: visible;
            }
          }
        }
        .slick-arrow {
          width: 40px;
          height: 50px;
          border-radius: 0px 10px 10px 0px;
          position: absolute;
          top: 46%;
          left: 15px;
          z-index: 9;
          background-color: rgba(0, 0, 0, 0.8);
          transform: translate(0, -50%);

          &::before {
            background-image: url('data:image/svg+xml,<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2521_189)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70064 0.248119C8.53902 0.0886608 8.32463 -0.000244141 8.10174 -0.000244141C7.87884 -0.000244141 7.66445 0.0886608 7.50283 0.248119L0.496738 7.27252C0.339909 7.42736 0.215033 7.61372 0.129701 7.82026C0.0443698 8.02681 0.000366211 8.24923 0.000366211 8.47399C0.000366211 8.69876 0.0443698 8.92118 0.129701 9.12773C0.215033 9.33427 0.339909 9.52063 0.496738 9.67547L7.55355 16.7517C7.88083 17.079 8.41101 17.0832 8.74319 16.7602C8.82361 16.6833 8.88795 16.59 8.93221 16.4861C8.97647 16.3822 8.9997 16.27 9.00047 16.1564C9.00124 16.0429 8.97952 15.9303 8.93667 15.8258C8.89382 15.7213 8.83075 15.6271 8.75137 15.549L2.29346 9.07452C2.21499 8.99709 2.15249 8.90389 2.10979 8.80058C2.06709 8.69726 2.04506 8.586 2.04506 8.47357C2.04506 8.36113 2.06709 8.24987 2.10979 8.14656C2.15249 8.04325 2.21499 7.95004 2.29346 7.87262L8.69983 1.44917C8.77828 1.37182 8.84076 1.27869 8.88345 1.17544C8.92615 1.0722 8.94817 0.961011 8.94817 0.848644C8.94817 0.736277 8.92615 0.625086 8.88345 0.521844C8.84076 0.418602 8.7791 0.325469 8.70064 0.248119Z" fill="white"/></g><defs><clipPath id="clip0_2521_189"><rect width="9" height="17" fill="white"/></clipPath></defs></svg>');
            content: "";
            opacity: 1;
            z-index: 9;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 8px;
            height: 16px;
            transform: translate(-50%, -50%);
          }

          &.slick-next {
            left: auto !important;
            right: 15px;
            border-radius: 10px 0px 0px 10px;

            &::before {
              background-image: url('data:image/svg+xml,<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2521_189)"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2521_185)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.299478 16.7519C0.461104 16.9113 0.675491 17.0002 0.898386 17.0002C1.12128 17.0002 1.33567 16.9113 1.4973 16.7519L8.50338 9.72748C8.66021 9.57264 8.78509 9.38628 8.87042 9.17974C8.95575 8.97319 8.99976 8.75077 8.99976 8.52601C8.99976 8.30124 8.95575 8.07882 8.87042 7.87227C8.78509 7.66573 8.66021 7.47937 8.50338 7.32453L1.44657 0.24828C1.11929 -0.0789693 0.589113 -0.0832188 0.256931 0.239781C0.176508 0.316731 0.11217 0.410037 0.0679116 0.513902C0.0236526 0.617768 0.000419148 0.729976 -0.00034855 0.84356C-0.00111529 0.957145 0.0205999 1.06968 0.0634513 1.17418C0.106302 1.27868 0.169373 1.37292 0.248748 1.45103L6.70666 7.92548C6.78513 8.00291 6.84763 8.09611 6.89033 8.19942C6.93304 8.30274 6.95506 8.414 6.95506 8.52643C6.95506 8.63887 6.93304 8.75013 6.89033 8.85344C6.84763 8.95675 6.78513 9.04996 6.70666 9.12738L0.300296 15.5508C0.22184 15.6282 0.159363 15.7213 0.116668 15.8246C0.0739726 15.9278 0.0519551 16.039 0.0519551 16.1514C0.0519552 16.2637 0.0739726 16.3749 0.116668 16.4782C0.159363 16.5814 0.221023 16.6745 0.299478 16.7519Z" fill="white"/></g><defs><clipPath id="clip0_2521_185"><rect width="9" height="17" fill="white" transform="translate(9 17) rotate(180)"/></clipPath></defs></svg></g><defs><clipPath id="clip0_2521_189"><rect width="9" height="17" fill="white"/></clipPath></defs></svg>');
            }
          }
        }
      }
    }
  }
  &.deatails-step-block {
    .login-right-inner-link {
    }
    .step-block-points {
      margin-top: 50px;
      .step-block-points-inner {
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px;
          padding: 0px;
          list-style: none;
          li {
            padding-left: 70px;
            a {
              position: relative;
              text-decoration: none;
              text-align: center;
              margin: 0 auto;
              display: table;
              width: 68px;
              span {
                border: 2px solid #000;
                font-size: 24px;
                font-weight: 700;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #000;
                background-color: #fff;
                position: relative;
                z-index: 9;
                text-align: center;
                margin: 0 auto;
              }
              &::before {
                content: "";
                position: absolute;
                right: 50px;
                width: 103px;
                height: 2px;
                background-color: #000;
                top: 20px;
              }
              p {
                margin: 0px;
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                margin-top: 15px;
                text-align: center;
              }
              &.active {
                &::before {
                  background-color: #0f4da2;
                }
                span {
                  color: #fff;
                  background-color: #0f4da2;
                  border-color: #0f4da2;
                }
                p {
                  color: #0f4da2;
                }
              }
            }
            &:first-child {
              padding-left: 0px;
              a {
                &::before {
                  content: none;
                }
              }
            }
          }
        }
      }
      .login-right-inner-link {
        margin-top: 60px;
        .info-icon-block {
          position: absolute;
          top: 0px;
          right: 0px;
          z-index: 9;
          a {
            svg {
              fill: #0f4da2;
              width: 26px;
            }
          }
        }
        .form-group-flex {
          display: flex;
          margin: 0px -15px;
          .form-group {
            padding: 0px 15px;
            width: 50%;
          }
        }
      }
    }
    .profile-img-block {
      margin-bottom: 40px;
      h4 {
        font-size: 18px;
        margin-bottom: 18px;
        color: #000;
        font-weight: 500;
        font-family: "Mulish";
      }

      .map {
        width: 100%;
        height: 250px;
        border-radius: 10px;
      }
      .file-input {
        .file-input__input {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        }
        .file-input__label {
          width: 100%;
          height: 108px;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          border: 1px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
  &.claim-main {
    padding: 60px;
    .claim-inner {
      background-color: #fff;
      height: calc(100vh - 120px);
      width: 100%;
      .claim-inner-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px 35px;
        border: 1px solid #e1dfdf;
        h3 {
          margin: 0px;
          font-size: 28px;
          line-height: 36px;
          color: #000;
          font-weight: 700;
        }
        .claim-inner-top-search {
          display: flex;
          align-items: center;
          .search-block {
            .form-group {
              margin: 0px 30px 0px 0px;
              position: relative;
              .form-control {
                width: 450px;
                height: 50px;
                padding: 10px 15px;
                background-color: transparent;
                border: 1px solid #9d9d9d;
                box-shadow: none;
                border-radius: 10px;
              }
              button {
                position: absolute;
                right: 17px;
                top: 12px;
                padding: 0px;
                background: transparent;
                border: none;
              }
            }
          }
          .common-btn {
            background-color: #0f4da2;
            border: none;
            outline: none;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            font-family: "Nunito";
            padding: 10px;
            transition: 0.5s;
            border-radius: 10px;
            width: 140px;
          }
        }
      }
      .claim-inner-list {
        overflow: auto;
        height: calc(100% - 135px);
        .claim-inner-list-block {
          padding: 30px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e1dfdf;
          .claim-inner-list-block-profile {
            display: flex;
            align-items: center;
            > img {
              width: 70px;
              height: 70px;
              object-fit: cover;
            }
            .claim-inner-content {
              padding-left: 20px;
              h4 {
                margin-bottom: 5px;
                font-size: 20px;
                line-height: 26px;
                color: #000000;
              }
              p {
                color: #0f4da2;
                font-size: 16px;
                line-height: 24px;
                margin: 0px;
              }
            }
          }
          .common-btn {
            background-color: #0f4da2;
            border: none;
            outline: none;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            font-family: "Nunito";
            padding: 10px;
            transition: 0.5s;
            border-radius: 10px;
            width: 140px;
          }
        }
      }
    }
  }
`;

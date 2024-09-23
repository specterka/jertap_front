import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const ContactusIndex = styled.div`
  margin-top: 50px;
  @media ${MinDevice.mobileSm} {
    margin-top: 120px;
  }

  &.section-block {
    margin: 0 0 50px;
    @media ${MinDevice.mobileSm} {
      margin: 0 0 120px;
    }
  }
  .contact-us-info {
    box-shadow: 0px 4px 4px 0px #0000001a;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    @media ${MinDevice.mobileSm} {
      display: block;
      margin: 0;
    }
    svg {
      width: 28px;
      margin: 0 16px 0 0;

      @media ${MinDevice.mobileSm} {
        margin: 0 0 40px 0;
        width: 32px;
      }
      path {
        fill: ${Theme.color.bgTheme};
      }
    }

    h5 {
      margin-bottom: 10px;
    }
  }
  .advertise-detail {
    border: 1px solid ${Theme.color.textColor};
    border-radius: 20px;
    padding: 20px 10px 30px;
    @media ${MinDevice.mobileSm} {
      padding: 40px 33px 50px;
    }
    .advertise-form {
      margin-bottom: 50px;
      input {
        padding: 14px 20px;
        border: none;
        width: 100%;
        &:focus,
        &:focus-visible {
          border: none !important;
          box-shadow: 0px 4px 4px 0px #00000026 !important;
        }
      }
    }
    .common-btn {
      padding: 14px 68px;
      &:hover {
        background-color: ${Theme.color.bgTheme};
      }
    }
  }
  .qa-section {
    @media ${MinDevice.mobileSm} {
      background-image: url("/images/qa-img.png");
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
    }
    .accordion {
      --bs-accordion-border-width: none !important;
      --bs-accordion-border-radius: none;
      /* border-bottom-left-radius: unset !important; */

      .accordion-item {
        border-bottom: 1px solid #e2e2e2;
        position: relative;
        width: 100%;
        .accordion-header {
          .accordion-button:not(.collapsed) {
            box-shadow: 0px 4px 4px 0px #0000001a !important;
            background-color: transparent;
            color: ${Theme.color.bgTheme};
            border-radius: 10px;
            padding: 10px;
            transition: all 0.5s;
            @media ${MinDevice.mobileSm} {
              padding: 15px 20px;
            }
          }
          .accordion-button {
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
            padding: 22px 10px;
            color: ${Theme.color.bgTheme};
            @media ${MinDevice.mobileSm} {
              padding: 42px 20px;
              font-size: 18px;
              line-height: 30px;
            }
            &:focus {
              box-shadow: none;
            }
            &::after {
              margin-left: auto;
            }
            &.collapsed {
              background-color: transparent;
              box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
              color: ${Theme.color.black};
              box-shadow: none;
              border-radius: none;
              transition: all 0.5s;
            }
          }
          .accordion-button:not(.collapsed)::after {
            background-image: url("/icons/arrow-blue.svg");
            background-repeat: no-repeat;
            transition: all 0.5s;
          }
        }

        .accordion-collapse {
          .accordion-body {
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
            color: ${Theme.color.textColor};
            background-color: transparent;
            padding: 20px 8px 40px;
            @media ${MinDevice.mobileSm} {
              padding: 20px 20px 40px;
              font-size: 16px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
`;

import styled from "styled-components";
import Theme from "./theme.style";
import { MinDevice } from "./resopnsive.style";

export const Qfdetail = styled.div`
  /* padding-bottom: 84px; */
  .accordion {
    --bs-accordion-border-width: none !important;
    border-bottom-left-radius: unset !important;
    margin-bottom: 50px;
    .accordion-item {
      border-bottom: 0.5px solid #e2e2e2;
      position: relative;
      width: 90%;
      .accordion-header {
        .accordion-button {
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          border-bottom-left-radius: unset !important;
          background-color: ${Theme.color.white};
          color: ${Theme.color.bgTheme};
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
          border-radius: 10px !important;
          @media ${MinDevice.mobileSm} {
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
            background-color: #f5f6fa;
            color: ${Theme.color.black};
            box-shadow: none;
          }
        }
      }
      .accordion-collapse {
        .accordion-body {
          font-size: 14px;
          line-height: 24px;
          font-weight: 300;
          color: ${Theme.color.textColor};
          background-color: #f5f6fa;
          padding: 20px 20px 40px;
          @media ${MinDevice.mobileSm} {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
      .delete-button {
        position: absolute;
        top: 10px;
        right: -11%;
        a {
          padding: 9px;
          background-color: #f00;
          width: 144px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          svg {
            width: 25px;
            height: 25px;
            fill: #fff;
          }
        }
      }
    }
  }

  .qf-end {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    div {
      width: 100%;
      .form-control {
        width: 100%;
        margin-bottom: 15px;
        padding: 12px 20px;
        box-shadow: none;
        background-color: ${Theme.color.white} !important;
        border: 1px solid #e1dfdf !important;
        font-size: 16px;
        color: #525252;
        &::placeholder {
          color: #525252;
        }

        &::-ms-input-placeholder {
          color: #525252;
        }
        /* &:focus {
          border: none;
          background-color: ${Theme.color.white} !important;
        } */
      }
    }
    .common-btn {
      font-size: 24px;
      line-height: 30px;
      padding: 10px 15px;
      background-color: ${Theme.color.bgTheme};
      color: ${Theme.color.white};
      border: none;
      margin-left: 20px;
      @media ${MinDevice.mobileSm} {
        padding: 8px 65px;
      }
    }
  }
`;

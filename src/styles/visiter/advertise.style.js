import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const AdvertiseForm = styled.div`
  margin: 50px 8px;
  @media ${MinDevice.mobileSm} {
    margin: 120px 0;
  }
  .advertise-detail {
    border: 1px solid ${Theme.color.textColor};
    border-radius: 20px;
    padding: 0 0 20px 0;
    @media ${MinDevice.mobileSm} {
      padding: 0 0 40px 0;
    }
    .advertise-tital {
      border-bottom: 2px dashed ${Theme.color.lightBorder};
      padding: 20px 10px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 35px;
      }
      h4 {
        color: ${Theme.color.bgTheme};
        margin-bottom: 10px;
      }
      p {
        font-size: 20px;
        line-height: 26px;
      }
    }
    .advertise-form {
      padding: 20px 10px 30px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 33px 50px;
      }
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
`;

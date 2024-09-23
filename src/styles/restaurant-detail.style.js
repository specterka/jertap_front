import styled from "styled-components";
import Theme from "./theme.style";
import { MinDevice } from "./resopnsive.style";

export const RestoDetail = styled.div`
  padding-bottom: 0;

  h3 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    @media ${MinDevice.mobileSm} {
      font-size: 24px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }
  .profile-detail {
    background-color: ${Theme.color.white};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    @media ${MinDevice.mobileMd} {
      margin-bottom: 30px;
    }

    .add-img {
      background-color: ${Theme.color.bgTheme};
      border-radius: 10px;
      padding: 19px;
      @media ${MinDevice.mobileSm} {
        padding: 30px;
      }
    }
  }
  .upload-image {
    background-color: ${Theme.color.white};
    padding: 33px 10px 0;
    border-radius: 12px;
    margin-bottom: 20px;
    @media ${MinDevice.mobileSm} {
      padding: 33px 20px 0;
    }
    @media ${MinDevice.mobileMd} {
      margin-bottom: 0;
    }
    .gallery-img {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      .delete-img {
        position: relative;
        margin: 5px 5px 10px;
        figure {
          width: 95px;
          margin-bottom: 0;
          @media ${MinDevice.mobileSm} {
            width: 100px;
          }
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        i {
          background-color: red;
          padding: 5px;
          border-radius: 50%;
          display: grid;
          align-items: center;
          justify-items: center;
          position: absolute;
          top: 5px;
          right: 5px;
          cursor: pointer;
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }

      .upload-detail {
        width: 100px;
        height: 100px;
        background-color: ${Theme.color.bgTheme};
        border-radius: 10px;
        margin-bottom: 10px;
        margin: 5px 5px 45px;
        input[type="file"] {
          display: none;
        }
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          cursor: pointer;
          small {
            font-size: 30px;
            color: ${Theme.color.white};
          }
        }
      }
    }
  }
  .edit-profile {
    box-shadow: 0px 4px 4px 0px #0000000d;
    background-color: ${Theme.color.white};
    border-radius: 10px;

    .profile-tital {
      padding: 20px 30px;
      border-bottom: 1px solid #e1dfdf;
      h3 {
        margin-bottom: 0;
      }
      p {
        margin-bottom: 0;
      }
    }
    .profile-form {
      padding: 24px 30px 30px;
      form {
        .form-label {
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: ${Theme.color.labelText};
          margin-bottom: 8px;
          white-space: nowrap;
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
            line-height: 27px;
          }
        }
        .form-control {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: ${Theme.color.textColor};
          margin-bottom: 20px;
          padding: 9px 10px;
          box-shadow: none !important;
          @media ${MinDevice.mobileSm} {
            padding: 12px 23px;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      .upload-detail {
        width: 100%;
        border: 1px solid #e1dfdf;
        background-color: #f4f4f4;
        border-radius: 10px;
        margin-bottom: 35px;
        input[type="file"] {
          display: none;
        }
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          cursor: pointer;
          @media ${MinDevice.mobileSm} {
            height: 212px;
          }
          small {
            font-size: 36px;
            line-height: 30px;
            font-weight: 500;
            color: #e1dfdf;
          }
        }
      }
      .common-btn {
        font-size: 16px;
        line-height: 16px;
        padding: 11px 29px;
        @media ${MinDevice.mobileSm} {
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
        }
      }
      .gray-btn {
        background-color: ${Theme.color.textColor};
        border-radius: 10px;
        color: ${Theme.color.white};
        margin-left: 30px;
        text-decoration: none;
      }
    }
  }
`;

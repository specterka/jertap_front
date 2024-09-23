import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const ProfileDetail = styled.div`
  h3 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    @media ${MinDevice.mobileSm} {
      font-size: 24px;
      line-height: 20px;
    }
  }
  p {
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    @media ${MinDevice.mobileSm} {
      font-size: 18px;
      line-height: 20px;
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
      margin-bottom: 0;
    }

    span {
      display: flex;
      align-items: center;
      a {
        font-family: "Mulish";
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        margin-bottom: 0;
        color: ${Theme.color.bgTheme};
        text-decoration: none;
      }
      svg {
        margin-right: 10px;
      }
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
  .edit-profile {
    box-shadow: 0px 4px 4px 0px #0000000d;
    border-radius: 15px;
    .profile-tital {
      background-color: ${Theme.color.white};
      padding: 20px 30px;
      border-bottom: 1px solid #e1dfdf;
      p {
        margin-bottom: 0;
      }
    }
    .profile-form {
      background-color: ${Theme.color.white};
      padding: 24px 30px 30px;

      form {
        .form-label {
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: ${Theme.color.labelText};
          margin-bottom: 8px;
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
          margin-bottom: 30px;
          padding: 12px 23px;
          box-shadow: none !important;
          @media ${MinDevice.mobileSm} {
            font-size: 16px;
            line-height: 24px;
          }
        }
        .form-select {
          padding: 12px 23px;
          margin-bottom: 30px !important;
        }
        &::placeholder {
          font-family: "Mulish";
        }
      }

      .common-btn {
        font-size: 16px;
        line-height: 16px;
        padding: 12px 9px;
        background-color: ${Theme.color.bgTheme};
        border-color: unset;
        border-radius: 10px;
        @media ${MinDevice.mobileSm} {
          font-size: 18px;
          line-height: 18px;
          font-weight: 500;
          padding: 12px 25px;
        }
      }
      .gray-btn {
        background-color: ${Theme.color.textColor};
        border-radius: 10px;
        color: ${Theme.color.white};
        margin-left: 30px;
        text-decoration: none;
        --bs-btn-border-color: ${Theme.color.textColor};
      }
    }
  }
  .profile-tabs-block {
    margin-top: 30px;
    .react-tabs {
      .react-tabs__tab-list {
        .react-tabs__tab {
          background-color: transparent;
          padding: 25px 0px;
          margin-right: 100px;
          border: none;
          .tabs-block-profile {
            display: flex;
            align-items: center;
            p {
              margin: 0px;
              font-size: 24px;
              color: #525252;
              padding-left: 10px;
              font-weight: 700;
            }
          }
          &.react-tabs__tab--selected {
            border-bottom: 4px solid #0f4da2;
            .tabs-block-profile {
              p {
                color: #0f4da2;
              }
              svg {
                fill: #0f4da2;
                path {
                  fill: #0f4da2;
                }
              }
            }
          }
          &::after {
            content: none;
          }
        }
      }
      .react-tabs__tab-panel {
        margin-top: 50px;
        .profile-block-common {
          .profile-block-common-inner {
            .img-gallery-block {
              background-color: #fff;
              border-radius: 10px;
              padding: 20px;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
              margin-bottom: 30px;
              h3 {
                font-size: 20px;
                line-height: 24px;
                color: #000000;
                margin-bottom: 40px;
                font-weight: 700;
                @media ${MinDevice.mobileSm} {
                  font-size: 24px;
                  line-height: 30px;
                }
              }
              .img-gallery-block-inner {
                display: flex;
                flex-wrap: wrap;
                .img-gallery-block-inner-img {
                  margin-right: 30px;
                  width: 25%;
                  @media ${MinDevice.mobileSm} {
                    width: 10%;
                  }
                  img {
                    width: 100%;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10px;
                  }
                  button {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                  }
                  &.plus-icon {
                    margin-left: 0px;
                    display: flex;
                    align-items: center;
                    background-color: #0f4da2;
                    justify-content: center;
                    border-radius: 10px;
                    height: 100px;
                    p {
                      font-size: 40px;
                      font-weight: bold;
                      color: #fff;
                      margin: 0px;
                    }
                  }
                }
              }
            }
            .basic-details-block {
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
              .basic-title {
                padding: 40px 20px;
                font-size: 20px;
                line-height: 24px;
                color: #333333;
                border-bottom: 1px solid #e1dfdf;
                font-weight: 700;
                @media ${MinDevice.mobileSm} {
                  font-size: 24px;
                  line-height: 30px;
                }
              }
              .basic-details-button {
                padding: 40px 20px;
                border-bottom: 1px solid #e1dfdf;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h3 {
                  font-size: 24px;
                  line-height: 30px;
                  color: #333333;
                  margin: 0px;
                  font-weight: 700;
                }
                .btn-common-btn {
                  width: 160px;
                  height: 45px;
                  border-radius: 10px;
                  background-color: #0f4da2;
                  color: #fff;
                  font-size: 18px;
                }
              }
              .basic-details-block-form {
                padding: 20px 15px;
                .profile-img-block-diff {
                  position: relative;
                  padding: 0px !important;
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
                  button {
                    width: 30px;
                    height: 30px;
                    border-radius: 50px;
                  }
                }
                .profile-form {
                  .mb-3.form-group {
                    padding: 0px;
                  }
                }
                .form-group-two {
                  display: block;
                  width: 100%;
                  @media ${MinDevice.mobileSm} {
                    margin: 0px -15px;
                    display: flex;
                    align-items: center;
                  }
                  .react-tel-input {
                    margin-bottom: 0px;
                  }
                }
                .form-group {
                  margin-bottom: 20px;
                  padding: 0;
                  width: 100%;
                  @media ${MinDevice.mobileSm} {
                    padding: 0px 15px;
                    width: 50%;
                  }
                  &.full-width-block {
                    width: 100%;
                    padding: 0px;
                    .map {
                      width: 100%;
                      height: 250px;
                    }
                  }
                  label {
                    color: #333333;
                    font-size: 18px;
                    line-height: 24px;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 10px;
                  }
                  input,
                  .form-select,
                  textarea {
                    width: 100%;
                    border: 1px solid #e1dfdf !important;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 10px;
                    height: 50px;
                    box-shadow: none;
                  }
                  textarea {
                    height: 100px !important;
                  }
                }
                .form-group {
                  position: relative;
                  .info-icon-block {
                    position: absolute;
                    top: 34px;
                    right: 35px;
                    z-index: 9;
                    a {
                      svg {
                        fill: #0f4da2;
                        width: 26px;
                      }
                    }
                  }
                }
                .btn-group-main {
                  display: flex;
                  align-items: center;
                  button {
                    margin-right: 30px;
                    width: 160px;
                    height: 45px;
                    &.btn-common-btn {
                      border-radius: 10px;
                      background-color: #0f4da2;
                      color: #fff;
                      font-size: 18px;
                    }
                    &.btn-btn-common-btn {
                      border-radius: 10px;
                      background-color: #525252;
                      color: #fff;
                      font-size: 18px;
                    }
                  }
                }
                .details-block-table {
                  table {
                    thead {
                      th {
                        &:nth-child(2),
                        &:nth-child(3),
                        &:nth-child(4) {
                          text-align: center;
                        }
                      }
                    }
                    tbody {
                      td {
                        color: #525252;
                        vertical-align: middle;
                        &:last-child {
                          text-align: center;
                        }
                        .btn-common-btn {
                          width: 100px;
                          height: 40px;
                          border-radius: 10px;
                          background-color: #0f4da2;
                          color: #fff;
                          font-size: 18px;
                        }
                        .form-group {
                          margin: 0px;
                          position: relative;
                          margin: 0 auto;
                          img {
                            position: absolute;
                            top: 16px;
                            right: 26px;
                          }
                        }
                      }
                    }
                  }
                }
                .button-add-center {
                  margin-bottom: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  button {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    background-color: #0f4da2;
                    color: #fff;
                    font-size: 18px;
                  }
                }
              }
              .basic-details-block-manager {
                padding: 30px 20px;
                .basic-details-block-manager-inner {
                  padding: 20px;
                  border: 1px solid #e1dfdf;
                  border-radius: 10px;
                  display: flex;
                  > img {
                    width: 400px;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                  }
                }
                .basic-details-block-manager-inner-detail {
                  padding-left: 20px;
                  display: flex;
                  justify-content: space-between;
                  width: 74%;
                  align-items: start;
                  h3 {
                    font-size: 20px;
                    line-height: 26px;
                    color: #333333;
                    font-weight: 700;
                    margin-bottom: 25px;
                  }
                  p {
                    margin: 0px 0px 15px;
                    font-size: 20px;
                    line-height: 26px;
                    color: #333333;
                    font-weight: 700;
                    span {
                      font-weight: 400;
                    }
                  }
                  .basic-details-button-manager {
                    button {
                      width: 100px;
                      height: 40px;
                      border-radius: 10px;
                      background-color: #ff0707;
                      color: #fff;
                      font-size: 18px;
                      border: none;
                    }
                  }
                }
              }
            }
            .search-block-button {
              width: 100%;
              margin: 0 auto 30px;
              display: table;
              form {
                margin: 0 auto;
                display: table;
              }
              .form-group {
                width: 500px;
                position: relative;
                input {
                  width: 100%;
                  height: 50px;
                  border: 1px solid #9d9d9d;
                  border-radius: 10px;
                  background-color: #fff;
                  font-size: 18px;
                  line-height: 20px;
                  padding: 5px 20px;
                }
                button {
                  position: absolute;
                  top: 12px;
                  right: 15px;
                  background: transparent;
                  border: none;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const AddAdvertise = styled.div`
  .img-gallery-block {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
    h3 {
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 40px;
      font-weight: 700;
      @media ${MinDevice.mobileSm} {
        font-size: 24px;
        line-height: 30px;
      }
    }
    .img-gallery-block-inner {
      display: flex;
      flex-wrap: wrap;
      .img-gallery-block-inner-img {
        margin-right: 30px;
        width: 25%;
        @media ${MinDevice.mobileSm} {
          width: 6%;
        }

        img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
        }
        button {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        &.plus-icon {
          margin-left: 0px;
          display: flex;
          align-items: center;
          background-color: #0f4da2;
          justify-content: center;
          border-radius: 10px;
          height: 100px;
          p {
            font-size: 40px;
            font-weight: bold;
            color: #fff;
            margin: 0px;
          }
        }
      }
    }
  }
  .btn-group-main {
    display: flex;
    align-items: center;
    margin-top: 15px;
    button {
      margin-right: 30px;
      width: 160px;
      height: 45px;
      &.btn-common-btn {
        border-radius: 10px;
        background-color: #0f4da2;
        color: #fff;
        font-size: 18px;
      }
      &.btn-btn-common-btn {
        border-radius: 10px;
        background-color: #525252;
        color: #fff;
        font-size: 18px;
      }
    }
  }
`;

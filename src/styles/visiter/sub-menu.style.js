import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const SubMenuIndex = styled.div`
  margin: 50px 0;
  @media ${MinDevice.mobileSm} {
    margin: 120px 0;
  }

  .main-food-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media ${MinDevice.mobileSm} {
      flex-direction: row;
    }
    svg {
      width: 75px;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      margin-right: 30px;
      @media ${MinDevice.mobileSm} {
        width: 90px;
        height: 90px;
        margin-right: 18px;
      }
      @media ${MinDevice.mobileMd} {
        margin-right: 30px;
      }
    }
    button {
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      border: 1px solid ${Theme.color.black};
      border-radius: 10px;
      margin: 0 0 10px 0;
      padding: 11px;
      text-align: center;
      color: ${Theme.color.textColor};
      max-width: 235px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:last-child {
        margin: 0 0 10px 0;
      }
      @media ${MinDevice.mobileSm} {
        margin: 0 10px 10px 0;
      }
      @media ${MinDevice.mobileLg} {
        font-size: 26px;
        line-height: 36px;
      }
      &:hover,
      &:active,
      .active {
        color: ${Theme.color.bgTheme};
        background-color: transparent;
        border-color: ${Theme.color.textColor};
      }
    }
    .dot-btn {
      width: 230px;
      height: auto;
      padding: 19px;
      margin: 0 auto 10px;
      @media ${MinDevice.mobileSm} {
        width: 210px;
      }
      @media ${MinDevice.mobileLg} {
        padding: 25px 20px;
      }
      @media ${MinDevice.mobileXl} {
        width: 80px;
        padding: 25px 0px;
      }
      svg {
        width: 32px;
        height: auto;
        margin: 0 auto;
      }
    }
    .btn {
      background-color: transparent !important;
    }
  }

  .food-section {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    margin: 10px 0 20px;
    overflow: auto;
    padding-bottom: 12px;
    @media ${MinDevice.mobileSm} {
      flex-direction: row;
      overflow: unset;
    }
    .food-sub-menu {
      border: 1px solid ${Theme.color.black};
      border-radius: 10px;
      display: flex;
      align-items: center;
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      width: 200px;
      margin-right: 10px;
      padding-right: 50px;
      @media ${MinDevice.mobileSm} {
        padding-right: 75px;
        margin-right: 20px;
        width: 247px;
      }

      &:last-child {
        margin-right: 0;
      }
      h6 {
        text-align: center;
        white-space: nowrap;
        color: ${Theme.color.textColor};
        font-weight: 600;
        &:hover {
          color: ${Theme.color.bgTheme};
        }
        &:active {
          color: ${Theme.color.bgTheme};
        }
      }
      span {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 30px;
        border-radius: 8px;
        border-right: 1px solid ${Theme.color.borderColor};
        &:hover,
        &:active {
          background-color: ${Theme.color.bgTheme};
          svg {
            border-radius: 8px;
            path {
              fill: ${Theme.color.white};
            }
          }
        }
        @media ${MinDevice.mobileSm} {
          width: 60px;
          height: 60px;
        }
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
    .jt-send-email {
      border: 1px solid #525252;
      padding-left: 16px;
      max-width: 693px;
      width: 100%;
      margin: 0 0 15px;
      display: flex;
      align-items: center;
      @media ${MinDevice.mobileSm} {
        margin: 0 20px 0 0;
      }
      svg {
        width: 31px;
        height: auto;
      }
      input {
        font-size: 18px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 0;
        padding: 0 10px;
        @media ${MinDevice.mobileSm} {
          padding: 14px 5px;
        }
      }
      .common-btn {
        width: 200px;
        padding: 14px;
        @media ${MinDevice.mobileSm} {
          padding: 19px;
        }
      }
    }
    .select-food {
      max-width: 270px;
      width: 100%;
      border-radius: 10px;
      margin-right: 0;
      margin-bottom: 15px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 0;
        margin-right: 20px;
      }
      &:last-child {
        margin-right: 0;
      }
      .form-select {
        padding: 11px 23px;
        @media ${MinDevice.mobileSm} {
          padding: 16px 23px;
        }
      }
    }
  }

  .jt-food-list {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding-bottom: 10px;
    margin-bottom: 20px;
    @media ${MinDevice.mobileXxl} {
      overflow-x: unset;
    }
    .food-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border: none;
      padding: 0;
      border-radius: 10px;
      margin-right: 10px;
      position: relative;
      @media ${MinDevice.mobileSm} {
        width: 325px;
        margin-right: 20px;
      }
      .css-b62m3t-container {
        width: 200px;
        @media ${MinDevice.mobileSm} {
          width: 325px;
        }
        &:focus-visible {
          outline: none;
        }
        .css-t3ipsp-control {
          box-shadow: unset;
          border: none;
          border-radius: 10px;
          &:hover,
          &:focus-visible {
            outline: unset !important;
            border-color: unset !important;
          }
          .css-1hb7zxy-IndicatorsContainer {
            .css-tj5bde-Svg {
              width: 30px;
              fill: ${Theme.color.bgTheme};
            }
            .css-1u9des2-indicatorSeparator {
              display: none;
            }
          }
        }
        .css-13cymwt-control {
          border: none;
          min-height: unset;
          border-radius: 10px;
          .css-1hb7zxy-IndicatorsContainer {
            .css-tj5bde-Svg {
              width: 30px;
              fill: ${Theme.color.bgTheme};
            }
            .css-1u9des2-indicatorSeparator {
              display: none;
            }
          }
        }
        .css-1fdsijx-ValueContainer {
          padding: 0;
        }
        .css-1dimb5e-singleValue {
          display: flex;
          align-items: center;
          margin: 0;
          .food-option {
            width: 50px;
            height: 50px;
            background-color: ${Theme.color.bgTheme};
            border-radius: 10px;
            margin-right: 30px;
            display: flex;
            align-items: center;
            @media ${MinDevice.mobileSm} {
              width: 60px;
              height: 60px;
            }
            svg {
              margin: 0 auto;
              path {
                fill: ${Theme.color.white};
              }
            }
          }
          p {
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            color: ${Theme.color.textColor};
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 28px;
            }
          }
        }
      }
      .css-1nmdiq5-menu {
        max-width: 323px;
        width: 100%;
        box-shadow: 0px 4px 4px 0px #00000026;
        padding: 20px;
        margin-bottom: 0;
        border-radius: 10px;
        .css-1n6sfyn-MenuList {
          max-height: unset;
          height: 100%;
          padding: 0;
        }
        .css-19gyxg0-option {
          display: flex;
          align-items: center;
          border: none;
          padding: 0 0 20px;
          &:last-child {
            padding: 0;
          }
          @media ${MinDevice.mobileSm} {
            padding: 0 0 30px;
          }
          &:active,
          &:hover {
            background-color: transparent;
          }
          .food-option {
            width: 40px;
            height: 40px;
            margin-right: 20px;
            border-radius: 10px;
            padding: 2px;
            border: 1px solid ${Theme.color.borderColor};
            @media ${MinDevice.mobileSm} {
              margin-right: 30px;
              width: 60px;
              height: 60px;
              padding: 13px;
            }
            svg {
              width: 34px;
              height: 34px;
            }
          }
          p {
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 26px;
              font-weight: 600;
            }
          }
        }

        &:active {
          background-color: transparent;
        }
      }
    }
    .food-price {
      position: relative;
      margin-right: 10px;
      @media ${MinDevice.mobileSm} {
        margin-right: 20px;
      }
      &::after {
        content: "";
        background-image: url("/icons/arrow-gray.svg");
        background-repeat: no-repeat;
        width: 35px;
        height: 12px;
        position: absolute;
        right: -5.5px;
        top: 21.5px;
        z-index: -1;
        @media ${MinDevice.mobileSm} {
          top: 24.5px;
        }
      }
      select {
        font-size: 16px;
        line-height: 22px;
        border: 1px solid ${Theme.color.textColor};
        border-radius: 10px;
        padding: 13px 20px;
        width: 145px;
        background-color: transparent;
        appearance: none;
        @media ${MinDevice.mobileSm} {
          font-size: 20px;
          line-height: 27px;
          width: 203px;
          padding: 15.5px 20px;
        }
        option {
          background-color: green;
        }
        &:focus {
          border: 1px solid #525252 !important;
        }
      }
    }
    .common-btn {
      padding: 14px 0;
      color: ${Theme.color.textColor};
      border: 1px solid ${Theme.color.textColor};
      min-width: 145px;
      @media ${MinDevice.mobileSm} {
        min-width: 203px;
        padding: 19px 0;
      }
    }
    .gray-arrow {
      padding: 12px 0;
      min-width: 60px;
      @media ${MinDevice.mobileSm} {
        padding: 17px 0;
        min-width: 60px;
      }
    }
  }
  .categories-box {
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    border-radius: 10px;
    margin-bottom: 30px;
    border: 1px solid ${Theme.color.textColor};
    display: block;

    @media ${MinDevice.mobileXs} {
      display: flex;
    }
    @media ${MinDevice.mobileSm} {
      margin-bottom: 40px;
      border-radius: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }

    .restro-btn {
      display: none;
      @media ${MinDevice.mobileSm} {
        display: flex;
      }
      .common-btn {
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        padding: 0 27px;
        height: 40px;
        margin-left: 7px;
        white-space: nowrap;
        @media ${MinDevice.mobileSm} {
          margin-right: 20px;
          font-size: 18px;
          line-height: 24px;
          padding: 7px 27px;
        }
        svg {
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
      }
      .trans-btn {
        background-color: #058a07;
        color: ${Theme.color.white};
        padding: 8px 14px;
        border: none;
        @media ${MinDevice.mobileSm} {
          padding: 8px 20px;
        }
      }
    }
    .restro-plus {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      h5 {
        text-transform: capitalize;
        margin: 0;
      }
      span {
        padding: 3px;
        display: flex;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        border: 1px solid #34a853;
        margin: 0 12px 0;
      }
      p {
        text-transform: capitalize;
      }
      small {
        padding: 3px;
        display: flex;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        margin: 0 12px 0;
        svg {
          circle {
            fill: red;
          }
        }
      }
      .plus-icon {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 7px;
        padding: 14px;
        display: none;
        .btn {
          border: none;
          padding: 0;
          font-size: 33px;
          &:hover,
          &:active {
            background-color: transparent;
            color: ${Theme.color.bgTheme};
          }
        }
        @media ${MinDevice.mobileSm} {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
      }
    }
    .categories-img {
      width: 100%;
      height: 150px;
      @media ${MinDevice.mobileXs} {
        height: 200px;
      }
      @media ${MinDevice.mobileSm} {
        max-width: 300px;
      }
    }
    .restro-detail {
      padding: 10px;
      width: 100%;
      padding: 20px 9px;
      @media ${MinDevice.mobileSm} {
        padding: 28px;
      }
      @media ${MinDevice.mobileMd} {
        padding: 29px 30px 9px 50px;
        display: block;
      }
      .restro-btn {
        justify-content: space-between;
      }
      .restro-like {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        h5 {
          margin-bottom: 4px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 10px;
          }
        }
        p {
          font-size: 14px;
          line-height: 16px;
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
            line-height: 26px;
          }
        }
        i {
          border: 1px solid ${Theme.color.textColor};
          border-radius: 7px;
          padding: 12px;
          display: none;
          @media ${MinDevice.mobileSm} {
            display: block;
            cursor: pointer;
          }
        }
      }
      .mobile-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        @media ${MinDevice.mobileSm} {
          padding: 0 9px 20px;
          display: none;
        }
        .restro-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .plus-icon {
          border: 1px solid ${Theme.color.textColor};
          border-radius: 7px;
          padding: 9px 11px;
          display: flex;
          align-items: center;
          justify-content: center;

          .btn {
            border: none;
            padding: 0;
            font-size: 27px;
          }

          @media ${MinDevice.mobileSm} {
            display: none;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

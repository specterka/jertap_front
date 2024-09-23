import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const ReviewDetail = styled.div`
  .review-detail {
    border-radius: 10px 10px 0 0;
    background-color: ${Theme.color.white};
    h3 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      border-bottom: 1px solid #e1dfdf;
      padding: 15px;
      margin-bottom: 0;
      @media ${MinDevice.mobileSm} {
        padding: 26px 20px;
        font-size: 24px;
        line-height: 20px;
      }
    }
    .review-tital {
      padding: 10px;
      border-bottom: 1px solid #e1dfdf;
      cursor: pointer;
      @media ${MinDevice.mobileSm} {
        padding: 20px;
      }
      .review-icon {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .review-icon-inner {
          width: 65%;
        }
        figure {
          width: 50px;
          height: 50px;
          margin-right: 10px;
          margin-bottom: 0;
          @media ${MinDevice.mobileSm} {
            margin-right: 20px;
            height: 74px;
            width: 74px;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .sub-tital {
          width: 92px;
          @media ${MinDevice.mobileXs} {
            width: unset;
          }
          h5 {
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 0;
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 28px;
            }
          }
          p {
            font-size: 14px;
            line-height: 18px;
            color: ${Theme.color.bgTheme};
            padding: 0;
            word-wrap: break-word;
            @media ${MinDevice.mobileSm} {
              font-size: 16px;
              line-height: 30px;
            }
          }
          &.diff-width-block {
            width: 63%;
          }
        }
        span {
          margin-right: 2px;
          cursor: pointer;
          @media ${MinDevice.mobileSm} {
            margin-right: 4px;
          }
          svg {
            width: 17px;
            height: 17px;

            @media ${MinDevice.mobileMd} {
              width: 22px;
              height: 22px;
            }
            @media ${MinDevice.mobileXl} {
              width: 23px;
              height: 23px;
            }
          }
        }
      }
      .review-icon-reivew-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          border-radius: 10px;
          background-color: #ff0707;
          color: #fff;
          font-size: 18px;
          width: 100px;
          border: none;
          padding: 7px;
          text-transform: capitalize;
        }
      }
      p {
        font-size: 14px;
        line-height: 18px;
        color: ${Theme.color.textColor};
        margin-bottom: 0;
        @media ${MinDevice.mobileSm} {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    .active {
      position: relative;
      &::after {
        content: "";
        background-color: ${Theme.color.bgTheme};
        position: absolute;
        /* height: 190px; */
        height: 100%;
        width: 2px;
        top: 0;
        left: 0;
        display: none;
        @media ${MinDevice.mobileSm} {
          display: block;
        }
        @media ${MinDevice.mobileMd} {
          display: none;
        }
        @media ${MinDevice.mobileXxl} {
          display: block;
        }
      }
    }
    .form-control {
      height: 300px;
      box-shadow: none;
      @media ${MinDevice.mobileSm} {
        height: 340px;
      }
    }
    .review-btn {
      margin: 0 20px;
      display: flex;
      flex-wrap: wrap;
      .common-btn {
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
        margin-right: 12px;
        margin-bottom: 12px;
        border-radius: 10px;
        background-color: #0f4da2;
        color: #fff;
        font-size: 18px;
        width: 160px;
        height: 45px;
        border: none;
        @media ${MinDevice.mobileXs} {
          margin-bottom: 0;
        }
      }
      .cancel-btn {
        background-color: ${Theme.color.textColor};
      }
    }
  }
  .review-box {
    height: 570px;
    overflow-y: scroll;
    -webkit-scrollbar: none;
    @media ${MinDevice.mobileSm} {
      height: 666px;
    }
  }
`;

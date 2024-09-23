import styled from "styled-components";
import Theme from "./theme.style";
import { MinDevice } from "./resopnsive.style";

export const CollaborationsDetail = styled.div`
  .jt-search {
    background-color: ${Theme.color.white};
    padding: 26px 20px;
    border-radius: 10px;
    height: 335px;
    margin-bottom: 30px;
    @media ${MinDevice.mobileMd} {
      height: 747px;
      margin-bottom: 0;
    }
    h1 {
      font-size: 22px;
      line-height: 28px;
      @media ${MinDevice.mobileSm} {
        font-size: 30px;
      }
    }
    h3 {
      font-size: 20px;
      line-height: 22px;
      font-weight: 600;
      margin-bottom: 20px;
      @media ${MinDevice.mobileSm} {
        font-size: 24px;
        line-height: 20px;
        margin-bottom: 30px;
      }
    }
    .jt-location {
      display: flex;
      align-items: center;
      border: 1px solid ${Theme.color.borderColor};
      border-radius: 10px;
      padding: 4px 9px;
      height: 40px;
      margin-bottom: 80px;
      @media ${MinDevice.mobileXs} {
        width: unset;
      }
      @media ${MinDevice.mobileMd} {
        margin-bottom: 144px;
        padding: 10px 20px 10px 10px;
      }

      svg {
        margin-right: 5px;
      }
      input {
        box-shadow: none;
        border: none;
        padding: 0;
        &::placeholder {
          color: #c3c3c3;
        }
      }
    }
    .search-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 0;

        path {
          fill: #6e768e;
        }
      }
    }
    span {
      font-size: 20px;
      line-height: 40px;
      font-weight: 500;
      color: #dadada;
      display: block;
      text-align: center;
      @media ${MinDevice.mobileSm} {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
  .promot-section {
    background-color: ${Theme.color.white};
    box-shadow: 0px 4px 4px 0px #0000000d;
    border-radius: 10px;
    display: block;
    h3 {
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
      color: #333333;
      padding: 20px 10px;
      margin-bottom: 0;
      border-bottom: 1px solid #e1dfdf;
      @media ${MinDevice.mobileSm} {
        font-size: 24px;
        line-height: 20px;
        padding: 20px;
      }
    }
    .search-input-block-main {
      padding: 25px;
      @media ${MinDevice.mobileSm} {
        padding: 50px;
      }
      .jt-location {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        input {
          width: 100%;
          height: 50px;
          border: 1px solid #9d9d9d !important;
          border-radius: 10px;
          background-color: #fff;
          font-size: 18px;
          line-height: 20px;
          padding: 5px 20px;
          box-shadow: none;
          outline: none !important;
        }
        .search-logo {
          position: absolute;
          top: 12px;
          right: 15px;
          svg {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    .right-side {
      border-bottom: 1px solid #e1dfdf;
      .promot-detail {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media ${MinDevice.mobileSm} {
          padding: 18px;
        }
        &:last-child {
          border-bottom: none;
        }
        .user-detail {
          display: flex;
          align-items: center;
          figure {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            margin-bottom: 0;
            img {
              width: 100%;
              border-radius: 50%;
              height: 100%;
            }
          }
          .user-tital {
            display: block;
            @media ${MinDevice.mobileSm} {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            h5 {
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
              color: ${Theme.color.black};
              margin-bottom: 0;
              @media ${MinDevice.mobileSm} {
                font-size: 20px;
                line-height: 27px;
              }
            }
          }
          h5 {
            margin: 0px;
            font-size: 20px;
            line-height: 26px;
            font-weight: 700;
          }
        }
        .social-detail {
          display: flex;
          align-items: center;
          .social-icon {
            margin-right: 10px;
            &:last-child {
              margin-right: 0;
            }
            svg {
              width: 22px;
              height: 22px;
            }
          }
          .youtube {
            svg {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
      p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 0;
        padding: 0 22px 20px;
        @media ${MinDevice.mobileSm} {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
`;

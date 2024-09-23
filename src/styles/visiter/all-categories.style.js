import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const AllCategoriesIndex = styled.div`
  &.section-block {
    margin: 50px 0 30px;
    @media ${MinDevice.mobileSm} {
      margin: 120px 0 40px;
    }
  }
  .categories-detail {
    display: block;
    margin-bottom: 40px;
    @media ${MinDevice.mobileSm} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 80px;
    }
    .categories-search {
      width: 100%;
      max-width: unset;
      margin-bottom: 30px;
      border-radius: 10px;
      @media ${MinDevice.mobileSm} {
        margin-right: 10px;
        max-width: 325px;
        margin-bottom: 0;
      }
      select {
        font-family: "Mulish";
        font-size: 18px;
        line-height: 28px;
        font-weight: 500;
        border: 1px solid #0f4da2;

        color: ${Theme.color.bgTheme};
        &:focus {
          border-color: unset;
        }
      }
    }
    .jt-send-email {
      max-width: unset;
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0;
      @media ${MinDevice.mobileSm} {
        max-width: 650px;
        margin: 0 auto;
      }
      @media ${MinDevice.mobileMd} {
        margin: unset;
      }
      span {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 16px;
        color: ${Theme.color.bgTheme};
        border-radius: 10px 0px 0 10px;
        box-shadow: 0px 4px 4px 0px #00000026;
        @media ${MinDevice.mobileSm} {
          padding: 0 23px;
        }
        svg {
          path {
            fill: black;
          }
        }
        input {
          margin: 0;
          padding: 8px 10px;
          @media ${MinDevice.mobileSm} {
            padding: 15px 10px;
          }
        }
      }
      a {
        margin-left: -10px;
        padding: 13px 22px;
        width: unset;
        @media ${MinDevice.mobileSm} {
          padding: 20px 50px;
        }
      }
    }
  }
  .categories-box {
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    @media ${MinDevice.mobileSm} {
      display: block;
      margin-bottom: 80px;
      border-radius: 20px;
    }
    .categories-img {
      max-width: 140px;
      width: 100%;

      @media ${MinDevice.mobileXs} {
        max-width: 300px;
      }
      @media ${MinDevice.mobileSm} {
        overflow: auto;
        max-width: unset;
      }

      figure {
        height: 122px;
        @media ${MinDevice.mobileXs} {
          max-width: unset;
          height: auto;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
          @media ${MinDevice.mobileSm} {
            border-radius: 20px;
          }
        }
      }

      .swiper-pagination {
        display: none;
      }
      .swiper-button-prev,
      .swiper-button-next {
        width: 20px;
        height: 50px;
        margin: 0;
        top: 30%;
        @media ${MinDevice.mobileXs} {
          top: 33%;
        }
        @media ${MinDevice.mobileSm} {
          width: 40px;
          top: 30%;
        }
        @media ${MinDevice.mobileMd} {
          width: 40px;
          top: 35%;
        }
        @media ${MinDevice.mobileLg} {
          width: 40px;
          top: 38%;
        }
        &::after {
          background-color: ${Theme.color.black};
          font-size: 11px;
          padding: 8px;
          color: ${Theme.color.white};
          @media ${MinDevice.mobileSm} {
            padding: 16px;
            font-size: 15px;
          }
        }
      }
      .swiper-button-prev {
        left: 0;
        &::after {
          border-radius: 0 5px 5px 0;
          @media ${MinDevice.mobileSm} {
            border-radius: 0 10px 10px 0;
          }
        }
      }
      .swiper-button-next {
        /* left: 129px; */
        right: -2px;
        &::after {
          border-radius: 5px 0 0 5px;
          @media ${MinDevice.mobileSm} {
            border-radius: 10px 0 0 10px;
          }
        }
      }
    }
    .restro-detail {
      padding: 10px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 20px;
        display: block;
      }
      p {
        line-height: 16px;
        margin-bottom: 5px;
        @media ${MinDevice.mobileSm} {
          line-height: 26px;
          margin-bottom: 20px;
        }
      }
      .restro-review {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          i {
            margin-right: 3px;
            height: 12px;
            svg {
              width: 12px;
              @media ${MinDevice.mobileSm} {
                width: 16px;
              }
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .common-btn {
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        background-color: transparent;
        color: #6a6a6a;
        text-decoration: underline;
        padding: 0;
        @media ${MinDevice.mobileSm} {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
`;

import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const ReviewDetail = styled.div`
  margin: 50px 0 0;
  @media ${MinDevice.mobileSm} {
    margin: 120px 0 90px;
  }

  .swiper {
    .swiper-pagination {
      position: unset;
      padding-bottom: 50px;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 28px;
      height: 35px;
      margin: 0;
      top: 17.5%;
      @media ${MinDevice.mobileXs} {
        top: 17.5%;
      }
      @media ${MinDevice.mobileSm} {
        display: none;
      }
      &::after {
        background-color: ${Theme.color.black};
        font-size: 14px;
        padding: 10px;
        color: ${Theme.color.white};
        border-radius: 10px;
      }
    }
    .swiper-button-prev {
      left: 0;
      &::after {
        border-radius: 0 10px 10px 0;
      }
    }
    .swiper-button-next {
      right: -2px;
      &::after {
        border-radius: 10px 0 0 10px;
      }
    }
  }
  .categories-box {
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    border-radius: 10px;
    margin-bottom: 20px;
    display: none;
    @media ${MinDevice.mobileSm} {
      margin-bottom: 30px;
      border-radius: 20px;
      display: flex;
    }
    .restro-like {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h5 {
        margin-bottom: 5px;
        @media ${MinDevice.mobileXl} {
          margin-bottom: 10px;
        }
      }
    }
    .categories-img {
      padding: 20px 0 20px 9px;
      @media ${MinDevice.mobileSm} {
        padding: 0;
      }
      figure {
        width: 100%;
        height: 220px;
        @media ${MinDevice.mobileSm} {
          height: 100%;
          max-width: 300px;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px 0 0px 10px;
          object-fit: cover;
          @media ${MinDevice.mobileSm} {
            border-radius: 20px 0 0px 20px;
            height: 100%;
          }
        }
      }
    }
    .restro-detail {
      padding: 10px;
      width: 100%;
      padding: 20px;
      @media ${MinDevice.mobileSm} {
        padding: 20px 27px 5px;
      }
      @media ${MinDevice.mobileMd} {
        padding: 15px 27px;
      }
      @media ${MinDevice.mobileXl} {
        padding: 16px 27px;
      }
      .restro-like {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* 
        h5 {
          margin-bottom: 4px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 10px;
          }
        } */
      }
      .restro-location {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 8px;
        }
        @media ${MinDevice.mobileMd} {
          margin-bottom: 30px;
        }
        @media ${MinDevice.mobileLg} {
          margin-bottom: 40px;
        }
        i {
          svg {
            margin: 5px 10px 0 0;
            @media ${MinDevice.mobileMd} {
              width: 12px;
            }
          }
        }

        p {
          line-height: 16px;
          font-weight: 400;
          @media ${MinDevice.mobileSm} {
            line-height: 22px;
          }
          @media ${MinDevice.mobileMd} {
            font-size: 15px;
          }
          @media ${MinDevice.mobileXl} {
            font-size: 16px;
          }
        }
      }
      .restro-review {
        display: flex;
        align-items: center;

        span {
          svg {
            width: 15px;
            margin-right: 3px;
            @media ${MinDevice.mobileMd} {
              width: 30px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
        small {
          font-size: 12px;
          line-height: 16px;
          font-weight: 500;
          color: ${Theme.color.bgTheme};
          margin-left: 10px;
          display: flex;
          @media ${MinDevice.mobileSm} {
            font-size: 14px;
            line-height: 14px;
            margin-left: 20px;
          }
          p {
            font-size: 12px;
            line-height: 18px;
            font-weight: 500;
            color: ${Theme.color.bgTheme};
            @media ${MinDevice.mobileSm} {
              font-size: 14px;
              line-height: 14px;
            }
          }
        }
      }
      .like-icon {
        button {
          padding: 12px;
          border: 1px solid #525252;
          &:hover {
            background-color: transparent;
          }
        }
      }
      h6 {
        font-weight: 500;
        margin-bottom: 10px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 5px;
        }
        @media ${MinDevice.mobileLg} {
          margin-bottom: 10px;
        }
      }
    }
  }
  .restro-view {
    display: block;
    width: 100%;
    margin: 0 auto 40px;
    border-radius: 20px;
    @media ${MinDevice.mobileSm} {
      max-width: 335px;
    }
    @media ${MinDevice.mobileSm} {
      display: none;
    }

    .categories-img {
      padding: 0;
      figure {
        img {
          border-radius: 20px 20px 0 0;
        }
      }
    }
  }
`;

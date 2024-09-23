import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style";

export const BannerDetail = styled.div`
  margin-bottom: 40px;
  @media ${MinDevice.mobileSm} {
    margin-bottom: 80px;
  }

  .jt-banner-img {
    position: relative;

    figure {
      height: 375px;
      @media ${MinDevice.mobileSm} {
        height: 600px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
      }
    }
    .jt-banner-tital {
      position: absolute;
      top: 0;
      max-width: unset;
      margin: 40px auto 0;
      @media ${MinDevice.mobileSm} {
        max-width: 800px;
        width: 100%;
        margin-top: 100px;
      }

      h3 {
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
        color: ${Theme.color.white};
        margin-bottom: 30px;
        @media ${MinDevice.mobileSm} {
          font-size: 52px;
          line-height: 70px;
          margin-bottom: 50px;
        }
        @media ${MinDevice.mobileMd} {
          font-size: 86px;
          line-height: 111px;
        }
      }
      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: ${Theme.color.white};
        margin-bottom: 30px;
        padding: 0 12px 0 0;
        @media ${MinDevice.mobileSm} {
          font-size: 20px;
          line-height: 30px;
          margin-bottom: 50px;
        }
        @media ${MinDevice.mobileMd} {
          padding: 0;
        }
      }
      .trans-btn {
        padding: 9px 25px;
        color: ${Theme.color.white};
        border: 1px solid ${Theme.color.white} !important;
      }
    }
  }
  .swiper-pagination {
    text-align: left;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    left: 12px;
    bottom: -20px;
    /* @media ${MinDevice.mobileXs} {
      left: 2%;
    }
    @media ${MinDevice.mobileSm} {
      left: 16%;
    } */
    @media ${MinDevice.mobileMd} {
      left: 15px;
    }
    @media ${MinDevice.mobileLg} {
      left: 12%;
    }
    @media ${MinDevice.mobileXl} {
      left: 14%;
    }
    @media ${MinDevice.mobileXxl} {
      left: 16%;
    }
    .swiper-pagination-bullet {
      border: 1px solid ${Theme.color.white};
      background-color: transparent;
      opacity: 1;
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background-color: white;
      width: 15px;
      height: 15px;
    }
  }
  .jt-banner-img2 {
    position: relative;
    figure {
      height: 210px;
      @media ${MinDevice.mobileSm} {
        height: 385px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .jt-banner-tital {
      position: absolute;
      top: 35%;
      left: 40%;
      @media ${MinDevice.mobileXs} {
        left: 45%;
      }
      @media ${MinDevice.mobileSm} {
        padding: 0 12px;
        left: 0;
      }
    }
    h3 {
      font-size: 40px;
      line-height: 54px;
      font-weight: 400;
      color: ${Theme.color.white};
      text-align: center;
      @media ${MinDevice.mobileSm} {
        font-size: 60px;
        line-height: 82px;
        text-align: left;
      }
    }
  }
  /* visitor-terms */
  .jt-banner-img1 {
    max-width: unset;
    figure {
      height: 210px;
      @media ${MinDevice.mobileSm} {
        height: 500px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
      }
    }
    .jt-banner-tital {
      position: absolute;
      top: 0;
      margin: 10px auto 0;
      @media ${MinDevice.mobileXs} {
        margin: 30px auto 0;
      }
      @media ${MinDevice.mobileSm} {
        margin: 75px auto 0;
        margin-top: 153px;
      }
      h3 {
        font-size: 40px;
        line-height: 54px;
        font-weight: 600;
        color: ${Theme.color.white};
        margin-bottom: 0;
        @media ${MinDevice.mobileSm} {
          font-size: 60px;
          line-height: 82px;
        }
      }
    }
  }
`;

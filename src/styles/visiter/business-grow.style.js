import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const BusinessGrowDetail = styled.div`
  margin: 50px 0 0;
  @media ${MinDevice.mobileSm} {
    margin: 120px 0 0;
  }
  .guide-section {
    .guide-detail {
      position: relative;
      .guide-img {
        position: absolute;
        top: 0;
        left: 80px;
        max-width: 238px;
        width: 100%;
        /* @media ${MinDevice.mobileXs} {
          max-width: 220px;
          right: 90px;
          left: unset;
        } */
        @media ${MinDevice.mobileSm} {
          max-width: 250px;
          left: 70px;
          right: unset;
        }
        @media ${MinDevice.mobileMd} {
          left: 90px;
          max-width: 350px;
        }
        @media ${MinDevice.mobileLg} {
          left: 116px;
          max-width: 440px;
        }
      }
      .small-guide-img {
        max-width: 116px;
        width: 100%;
        padding-top: 50px;
        padding-left: 17px;
        /* @media ${MinDevice.mobileXs} {
          margin: 0 auto;
          max-width: 130px;
          padding-top: 25px;
        } */
        @media ${MinDevice.mobileSm} {
          margin: unset;
          max-width: 110px;
          padding-top: 50px;
        }
        @media ${MinDevice.mobileMd} {
          padding-top: 68px;
          padding-left: 0;
          max-width: 160px;
        }
        @media ${MinDevice.mobileLg} {
          max-width: 215px;
        }
        img {
          border-radius: 5px;
          width: 100%;
          @media ${MinDevice.mobileSm} {
            border-radius: 20px;
          }
          @media ${MinDevice.mobileXxl} {
            width: unset;
          }
        }
      }
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .listing-tital {
      margin-top: 90px;
      padding: 0 0 0 0;
      @media ${MinDevice.mobileSm} {
        margin-top: 20px;
      }
      @media ${MinDevice.mobileMd} {
        margin-top: 40px;
      }
      h4 {
        margin-bottom: 5px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 10px;
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 40px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 50px;
          font-size: 18px;
        }
      }
    }
    .listing-customers {
      ul {
        margin: 0 0 40px 20px;
        @media ${MinDevice.mobileSm} {
          margin: 0 0 50px 20px;
        }
        li {
          font-size: 14px;
          line-height: 30px;
          margin: 0 0 10px 0;
          @media ${MinDevice.mobileSm} {
            margin: 0 0 20px 0;
          }
          &:last-child {
            margin: 0;
          }
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
          }
        }
      }
    }
    .jt-send-email {
      max-width: unset;
      margin: 0 0 20px;
      .form-control {
        border: 1px solid ${Theme.color.bgTheme};
        padding: 9px 20px;
        margin-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 0;
          padding: 14px 25px;
        }
        &:focus {
          border: 1px solid ${Theme.color.bgTheme} !important;
        }
        &::placeholder {
          font-size: 16px;
          font-weight: 500;
          color: ${Theme.color.bgTheme};
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
          }
        }
      }
      a {
        border-radius: 9px;
        padding: 15px;
        font-size: 16px;
        line-height: 21px;
        @media ${MinDevice.mobileSm} {
          font-size: 18px;
          line-height: 24px;
          padding: 18px 25px;
          margin-left: -15px;
        }
        svg {
          margin-left: 10px;
        }
      }
    }
  }
  .listing-section {
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    padding: 0;
    border-radius: 20px;
    @media ${MinDevice.mobileSm} {
      padding: 0 17px 40px;
    }
    .listing-detail {
      border-bottom: 2px dashed ${Theme.color.lightBorder};
      border-right: none;
      width: 100%;
      padding: 20px 10px;
      @media ${MinDevice.mobileSm} {
        padding: 0;
        max-width: 380px;
        border-right: 2px dashed ${Theme.color.lightBorder};
        border-bottom: none;
      }
      span {
        display: flex;
        align-items: baseline;
        margin: 0 0 20px 0;
        @media ${MinDevice.mobileSm} {
          margin: 0 0 30px 0;
        }
        svg {
          margin-left: 30px;
        }
        h3 {
          font-size: 40px;
          line-height: 54px;
          font-weight: 600;
          color: ${Theme.color.bgTheme};
          margin: 0 10px 0 0;
          @media ${MinDevice.mobileSm} {
            font-size: 50px;
            line-height: 68px;
          }
        }
      }
      h5 {
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        @media ${MinDevice.mobileSm} {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
  .video-section {
    background-color: #f6f6f6;
    padding: 40px 0 0;
    position: relative;
    height: 520px;
    &.section-block {
      margin-bottom: 100px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 180px;
      }
    }
    @media ${MinDevice.mobileXs} {
      height: 500px;
    }
    @media ${MinDevice.mobileSm} {
      height: 580px;
      padding: 80px 0;
    }

    .video-menu {
      margin-bottom: 40px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 0;
      }
      h4 {
        margin-bottom: 5px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 10px;
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          font-size: 18px;
          margin-bottom: 50px;
        }
      }
      ul {
        li {
          display: flex;
          align-items: center;
          list-style: none;
          margin-bottom: 20px;
          p {
            font-size: 16px;
            line-height: 30px;
            padding-left: 10px;
            margin-bottom: 0;
            @media ${MinDevice.mobileSm} {
              font-size: 18px;
            }
          }
        }
      }
    }
    .restro-video {
      text-align: center;
      position: relative;
      margin-left: 25px;
      @media ${MinDevice.mobileSm} {
        text-align: left;
        margin-left: 0;
      }
      iframe {
        max-width: 750px;
        width: 100%;
        margin: 0 auto;
        height: 190px;
        border-radius: 10px;
        @media ${MinDevice.mobileSm} {
          max-width: 710px;
          height: 420px;
        }
      }
      i {
        position: absolute;
        left: -18px;
        top: 42%;
        @media ${MinDevice.mobileSm} {
          left: -45px;
          top: 39%;
        }
        svg {
          width: 36px;
          height: 36px;
          cursor: pointer;
          @media ${MinDevice.mobileSm} {
            width: 92px;
            height: 92px;
          }
        }
      }
    }
  }
  .events-section {
    &.section-block {
      margin: 0 0 50px;
      @media ${MinDevice.mobileSm} {
        margin: 0 0 120px;
      }
    }
    h2 {
      margin: 150px 0 40px;
      @media ${MinDevice.mobileXs} {
        margin: 110px 0 40px;
      }
      @media ${MinDevice.mobileSm} {
        margin: 0 0 80px;
      }
    }
    figure {
      display: none;
      margin-bottom: 20px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 50px;
        display: block;
      }
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .events-detail {
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border-radius: 20px;
      padding: 0 20px 20px;
      display: none;
      @media ${MinDevice.mobileSm} {
        padding: 0 20px 50px;
        display: block;
      }
      .event-tital {
        border-bottom: 2px dashed ${Theme.color.lightBorder};
        padding-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          padding-bottom: 30px;
        }
        h5 {
          margin-bottom: 4px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 10px;
          }
        }
      }
      .date-calender {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 20px;
        position: relative;

        @media ${MinDevice.mobileSm} {
          padding-top: 30px;
        }
        svg {
          margin-right: 10px;
        }
        p {
          line-height: 18px;
          color: ${Theme.color.bgTheme};
          @media ${MinDevice.mobileSm} {
            line-height: 20px;
          }
        }
        input {
          width: 28px;
          border: none;
        }
      }
    }
    .swiper {
      .swiper-pagination {
        position: unset;
        padding-top: 40px;
        @media ${MinDevice.mobileSm} {
          display: none;
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        width: 28px;
        height: 35px;
        margin: 0;
        top: 18%;
        @media ${MinDevice.mobileXs} {
          top: 22%;
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
      .moblie-view {
        display: block;
        @media ${MinDevice.mobileSm} {
          display: none;
        }
      }
    }
  }
`;

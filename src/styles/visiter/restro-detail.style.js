import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const RestroIndex = styled.div`
  /* common css */

  .info-tital {
    padding: 20px;
    @media ${MinDevice.mobileSm} {
      padding: 30px;
    }
    @media ${MinDevice.mobileXl} {
      border-bottom: 1px dashed ${Theme.color.lightBorder};
    }

    h4 {
      color: ${Theme.color.bgTheme};
    }
  }
  .mobile-view {
    width: 100%;
    display: block;
    margin-bottom: 40px;
    @media ${MinDevice.mobileSm} {
      display: none;
    }

    figure {
      height: 256px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .restro-small-img {
      position: relative;
      cursor: pointer;

      span {
        position: absolute;
        top: 45%;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        color: ${Theme.color.white};
      }
    }
    .swiper-pagination {
      display: none;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 28px;
      height: 35px;
      margin: 0;
      top: 43%;
      &::after {
        background-color: ${Theme.color.black};
        font-size: 11px;
        padding: 11px;
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
      right: 0;
      &::after {
        border-radius: 5px 0 0 5px;
        @media ${MinDevice.mobileSm} {
          border-radius: 10px 0 0 10px;
        }
      }
    }
  }
  .top-rate {
    padding: 0 7px 20px;
    @media ${MinDevice.mobileSm} {
      display: none;
    }
    h4 {
      margin-bottom: 20px;
      color: ${Theme.color.bgTheme};
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${Theme.color.lightBorder};
      padding-bottom: 40px;
      margin: 0 -20px;
      svg {
        margin-right: 12px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .jt-send-email {
    max-width: unset;
    margin: 0 -12px 40px;
    border-top: 1px solid ${Theme.color.lightBorder};
    border-radius: unset;
    padding: 40px 20px 0;
    @media ${MinDevice.mobileSm} {
      display: block;
      margin: 0 0 80px;
      padding: 0;
      border-top: unset;
    }
    @media ${MinDevice.mobileMd} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }
    h2 {
      margin: 0 0 40px;
      @media ${MinDevice.mobileMd} {
        margin: 0;
      }
    }
    .user-review {
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 4px 4px 0px #00000026;
      border-radius: 10px;
      span {
        display: flex;
        align-items: center;
        width: 500px;
        padding: 0 5px;
        @media ${MinDevice.mobileSm} {
          padding: 0 16px;
        }
        input {
          margin-bottom: 0;
        }
      }
      .common-btn {
        width: unset;
        padding: 20px 25px;
        @media ${MinDevice.mobileSm} {
          padding: 20px 51px;
        }
      }
    }
    .common-btn {
      padding: 20px 51px;
    }
  }
  .btn-primary {
    &:hover,
    &:active,
    &:focus-visible {
      background-color: initial !important;
      border-color: #525252 !important;
      box-shadow: none;
    }
  }
  .url-btn {
    display: none;
    @media ${MinDevice.mobileSm} {
      display: block;
    }
  }
  /* common css end */
  .section-block {
    margin-bottom: 20px;
    @media ${MinDevice.mobileSm} {
      margin-bottom: 90px;
    }
  }
  .top-section {
    width: 100%;
    display: none;
    margin-bottom: 40px;
    @media ${MinDevice.mobileSm} {
      display: block;
      margin-bottom: 70px;
    }
    @media ${MinDevice.mobileXxl} {
      display: flex;
    }
    .restro-img {
      width: 100%;
      margin: 0 2px 5px 0;
      @media ${MinDevice.mobileXxl} {
        display: flex;
        width: unset;
      }
      .restro-detail1 {
        height: 475px;
        margin-left: 4px;
        @media ${MinDevice.mobileLg} {
          height: 575px;
        }
        @media ${MinDevice.mobileXxl} {
          height: auto;
        }
        img {
          object-fit: cover;
          object-position: center;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-img {
        display: flex;
        @media ${MinDevice.mobileXxl} {
          display: block;
        }
      }
      @media ${MinDevice.mobileXxl} {
        /* width: 51.34%; */
      }
      .restro-small-img {
        width: 100%;
        margin: 0 2px 0;
        position: relative;
        cursor: pointer;
        @media ${MinDevice.mobileXxl} {
          margin: 0 4px 0 3px;
          width: unset;
        }
        span {
          position: absolute;
          top: 45%;
          text-align: center;
          width: 100%;
          font-size: 30px;
          line-height: 40px;
          font-weight: 600;
          color: ${Theme.color.white};
        }
        .restro-detail2 {
          height: 375px;
          @media ${MinDevice.mobileXxl} {
            /* height: auto; */
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  .categories-section {
    margin: 0 -12px 20px;
    border-bottom: 1px solid ${Theme.color.lightBorder};
    @media ${MinDevice.mobileSm} {
      margin: 0 0 40px;
      border-radius: 20px;
      border: 1px solid ${Theme.color.textColor};
    }
    .review-detail {
      display: flex;
      width: 100%;
      padding: 0 20px;
      @media ${MinDevice.mobileSm} {
        padding: 0;
      }

      .restro-like {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          color: ${Theme.color.bgTheme};
          margin-bottom: 4px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 10px;
          }
        }
        .like-icon {
          border: 1px solid ${Theme.color.textColor};
          padding: 12px;
          border-radius: 7px;
          display: none;
          .trans-btn {
            border: none !important;
            padding: 0;
            .btn {
              border: none;
            }
          }
          @media ${MinDevice.mobileSm} {
            display: block;
          }
          .btn {
            &:hover {
              background-color: transparent !important;
            }
          }
        }
      }
      .btn {
        /* border: none !important; */
        &:hover {
          background-color: ${Theme.color.bgTheme} !important;
        }
      }
      .restro-detail {
        padding: 10px;
        width: 100%;
        padding: 0 0 20px 0;
        @media ${MinDevice.mobileSm} {
          padding: 29px 20px 29px;
        }
        @media ${MinDevice.mobileMd} {
          padding: 30px;
          display: block;
        }
        .restro-like {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h5 {
            margin-bottom: 4px;
            @media ${MinDevice.mobileSm} {
              margin-bottom: 10px;
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
        .restro-location {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 40px;
          }
          i {
            svg {
              width: 24px;
              margin-right: 10px;
              margin-top: 5px;
              @media ${MinDevice.mobileXs} {
                width: 12px;
              }
              @media ${MinDevice.mobileSm} {
                margin-top: 0;
              }
            }
          }

          h5 {
            font-family: "Mulish";
            line-height: 20px;
            font-weight: 300;
            color: ${Theme.color.textColor};
            @media ${MinDevice.mobileSm} {
              line-height: 26px;
            }
          }
        }
        .restro-review {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 50px;
            justify-content: flex-start;
          }
          span {
            svg {
              width: 30px;
              height: 30px;
              margin-right: 5px;
              &:last-child {
                margin-right: 0;
              }
              @media ${MinDevice.mobileSm} {
                width: 40px;
                height: 40px;
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
              font-size: 16px;
              line-height: 20px;
              font-weight: 500;
              color: ${Theme.color.bgTheme};
              @media ${MinDevice.mobileSm} {
                font-size: 20px;
                line-height: 26px;
              }
            }
          }
        }
        .restro-time {
          margin-bottom: 5px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 50px;
          }
          ul {
            display: flex;
            /* align-items: center; */
            flex-wrap: wrap;
            padding-left: 0;
            margin-bottom: 0;

            li {
              margin-right: 10px;
              list-style: none;
              position: relative;
              display: flex;
              align-items: center;
              margin: 0 10px 10px 0;
              &:first-child {
                &::after {
                  display: none;
                }
              }
              &:last-child {
                margin-right: 0;
              }
              &:after {
                content: "";
                background-color: ${Theme.color.black};
                border-radius: 50%;
                position: absolute;
                left: 0;
                top: 8px;
                height: 7px;
                width: 7px;
                @media ${MinDevice.mobileSm} {
                  top: 10px;
                }
              }
              svg {
                width: 25px;
                height: auto;
                path {
                  fill: ${Theme.color.textColor};
                }
              }
              p {
                font-size: 16px;
                line-height: 20px;
                padding-left: 12px;
                margin-bottom: 0;
                @media ${MinDevice.mobileSm} {
                  padding-left: 20px;
                  font-size: 20px;
                  line-height: 26px;
                }
              }
              a {
                font-size: 16px;
                line-height: 20px;
                font-weight: 500;
                color: ${Theme.color.bgTheme};
                @media ${MinDevice.mobileSm} {
                  font-size: 20px;
                  line-height: 26px;
                }
              }
            }
          }
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
            padding: 11px 24px;
            margin-right: 12px;
            border: none;
            @media ${MinDevice.mobileSm} {
              font-size: 18px;
              line-height: 24px;
              padding: 10px;
            }
            @media ${MinDevice.mobileMd} {
              padding: 10px 24px;
            }
            &:last-child {
              margin-right: 0;
            }
            svg {
              width: 28px;
              height: 28px;
              margin-right: 10px;
              path {
                stroke: ${Theme.color.white};
              }
            }
            .share-icon {
              path {
                fill: ${Theme.color.white};
              }
            }
            h5 {
              color: ${Theme.color.white};
              font-weight: 500;
              white-space: nowrap;
            }
          }

          .success-btn {
            background-color: #058a07;
            color: ${Theme.color.white};
            border: none;
            svg {
              margin-right: 10px;
              path {
                fill: white;
              }
            }
          }
        }
      }
    }
    .mobile-btn {
      display: block;
      padding: 0 13px 20px;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
      i {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 7px;
        display: block;
        padding: 5px;
        cursor: pointer;
        @media ${MinDevice.mobileSm} {
          display: none;
        }
      }
      .restro-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 0;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 20px;
        }
        .common-btn {
          padding: 6px 43px;
          display: flex;
          align-items: center;
          margin: 10px 10px 0 0;
          @media ${MinDevice.mobileXs} {
            padding: 6px 24px;
          }
          @media ${MinDevice.mobileSm} {
            margin: 0 10px 0 0;
          }
          svg {
            width: 20px;
            height: auto;
            margin-right: 10px;
            path {
              fill: ${Theme.color.white};
              stroke: ${Theme.color.white};
            }
          }
          h5 {
            color: ${Theme.color.white};
            font-weight: 500;
            line-height: 28px;
          }
        }
        .success-btn {
          background-color: #058a07;
          padding: 6px 50px;
          @media ${MinDevice.mobileSm} {
            padding: 12px 24px;
          }
          svg {
            width: 25px;
          }
          h5 {
            color: ${Theme.color.white};
          }
        }
        .trans-btn {
          border: 1px solid ${Theme.color.textColor};
          padding: 5px 40px;
          h5 {
            color: ${Theme.color.textColor};
          }
        }
        .like-icon {
          border: 1px solid ${Theme.color.textColor};
          padding: 0;
          border-radius: 7px;
          display: block;
          margin: 10px 10px 0 0;
          @media ${MinDevice.mobileSm} {
            margin: 0 10px 0;
          }
          .trans-btn {
            border: none !important;
            padding: 6px;
            margin: 0;
            .btn {
              border: none;
            }
            svg {
              width: 25px;
              margin-right: 0;
              path {
                fill: ${Theme.color.textColor};
              }
            }
          }
          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
        .btn {
          &:active {
            background-color: ${Theme.color.bgTheme} !important;
          }
        }
      }
      .restro-like {
        i {
          display: block;
          padding: 6px;
        }
      }
    }
  }
  .quick-section {
    border-radius: 20px;
    margin: 0 -12px 40px;
    @media ${MinDevice.mobileSm} {
      margin: 0 0 40px;
      border: 1px solid ${Theme.color.textColor};
    }
    /* common css */
    p {
      font-size: 16px;
      line-height: 26px;
      white-space: nowrap;
      margin-left: 15px;
      @media ${MinDevice.mobileSm} {
        font-size: 20px;
      }
    }
    .info-detail {
      padding: 0 20px 5px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 65px 10px 30px;
      }
      ul {
        padding-left: 0;
        margin-bottom: 0;
        @media ${MinDevice.mobileSm} {
          display: flex;
          /* align-items: center; */
          justify-content: space-between;
          margin-top: -30px;
        }
        li {
          width: 100%;
          margin-bottom: 20px;
          /* margin-right: 40px; */
          list-style: none;
          position: relative;

          &:last-child {
            margin-right: 0;
          }
          h5 {
            font-family: "Mulish";
            font-weight: 600;
            margin-bottom: 5px;
            @media ${MinDevice.mobileSm} {
              margin-bottom: 10px;
            }
          }

          p {
            font-size: 16px;
            line-height: 26px;
            white-space: normal;
            margin-bottom: 0;
            /* flex-basis: 121px; */
            @media ${MinDevice.mobileSm} {
              font-size: 18px;
            }
          }
          a {
            font-size: 18px;
            line-height: 26px;
            font-weight: 500;
            color: ${Theme.color.bgTheme};
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
            }
            svg {
              margin-right: 10px;
            }
          }
          svg {
            width: 25px;
          }
        }
        .info-sub-tital {
          margin-bottom: 25px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 50px;
          }
        }
        .food-dish-list {
          display: flex;
          flex-wrap: wrap;
          margin: 15px 0;
          @media ${MinDevice.mobileSm} {
            margin: 40px 0;
          }
        }
        .week-timeing {
          display: flex;
          margin-bottom: 20px;
          p {
            flex-basis: 120px;
          }
          span {
            small {
              margin-right: 20px;
            }
          }
        }
      }
    }

    .quick-info {
      margin-bottom: 0;
      .restro-time {
        ul {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          li {
            svg {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }

    .info-address {
      border-bottom: 1px solid ${Theme.color.lightBorder};
      @media ${MinDevice.mobileSm} {
        border: none;
      }
      h5 {
        line-height: 26px;
        margin-left: 15px;
        color: ${Theme.color.textColor};
      }
      .info-detail {
        padding: 0 20px 0;
        @media ${MinDevice.mobileSm} {
          padding: 29px 30px 0;
        }
        h5 {
          font-weight: 400;
          margin-bottom: 20px;
          margin-left: 0;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 50px;
          }
        }
        .common-btn {
          font-weight: 600;
          padding: 9px;
          display: block;
          width: 100%;
          max-width: 190px;
          margin: 0 20px 40px 0;
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
            line-height: 26px;
          }
          @media ${MinDevice.mobileLg} {
            margin: 0 25px 40px auto;
          }
          &:last-child {
            margin: 0 0 40px 0;
          }
        }
        .btn {
          /* border: none !important; */
          &:hover {
            color: ${Theme.color.bgTheme} !important;
          }
        }
      }
      .restro-time {
        margin: 0 -20px;
        border-top: 1px solid ${Theme.color.lightBorder};
        display: flex;
        align-items: center;
        padding: 20px;

        @media ${MinDevice.mobileSm} {
          padding: 17px;
          margin: 0 -30px;
        }
        @media ${MinDevice.mobileLg} {
          padding: 36px;
          margin: 0 -30px;
        }
        svg {
          width: 20px;
          height: 20px;
          margin-right: 15px;
        }
      }
      .share-icon {
        svg {
          stroke: ${Theme.color.bgTheme};
        }
      }
    }
    .common-btn {
      display: block;
      padding: 15px;
      margin: 0 20px 0;
      @media ${MinDevice.mobileSm} {
        width: 160px;
        margin: 0 auto 36px;
      }
    }
  }
  .info-section {
    margin: 20px 0 50px;
    border: 1px solid ${Theme.color.textColor};
    border-radius: 20px;
    @media ${MinDevice.mobileSm} {
      margin: 0 0 39px;
    }

    .info-tital {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .common-btn {
        display: none;
        border: none;
        @media ${MinDevice.mobileSm} {
          display: block;
        }
      }
    }
    .services-detail {
      .info-detail {
        padding: 0 20px;
        @media ${MinDevice.mobileSm} {
          padding: 30px;
        }
      }
      .restro-time {
        ul {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          li {
            display: flex;
            align-items: center;
            margin: 0 0 20px 0;
            @media ${MinDevice.mobileSm} {
              margin: 0 12px 12px 0;
            }

            h5 {
              font-size: 20px;
              font-weight: 400;
              color: ${Theme.color.textColor};
              margin-left: 10px;
            }
          }
        }
        .view-btn {
          display: block;
          margin: 40px 0;

          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
      }
    }
  }
  .photo-section {
    border-top: 1px solid ${Theme.color.lightBorder};
    margin: 0 -12px 40px;
    position: relative;
    @media ${MinDevice.mobileSm} {
      border-radius: 20px;
      border: 1px solid ${Theme.color.textColor};
      margin: 0 0 40px;
    }
    .upload-detail {
      border-radius: 20px;
      padding: 5px 10px;
      margin: 10px 20px 40px;
      input[type="file"] {
        display: none;
      }

      label {
        cursor: pointer;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        color: #476285;
        color: ${Theme.color.white};
        cursor: pointer;
        @media ${MinDevice.mobileSm} {
          font-size: 20px;
        }
        svg {
          margin-right: 10px;
        }
      }
    }
    .common-btn {
      display: flex;
      align-items: center;
      padding: 13px 20px;
      border-radius: 10px;
      svg {
        margin-right: 10px;
      }
    }
    .info-tital {
      display: flex;
      justify-content: space-between;
      padding: 40px 20px 24px;
      @media ${MinDevice.mobileSm} {
        padding: 34px 30px 40px;
      }

      .upload-btn {
        display: none;
        @media ${MinDevice.mobileSm} {
          display: block;
          margin: 0;
          padding: 11px 26px;
        }
      }
    }
    .food-img {
      display: flex;
      justify-content: space-between;
      padding: 0 0 20px;
      overflow-x: scroll;
      margin-bottom: 10px;
      @media ${MinDevice.mobileSm} {
        padding: 40px 30px;
      }
      @media ${MinDevice.mobileXl} {
        margin-bottom: 0;
        overflow-x: unset;
      }
      figure {
        margin-right: 20px;
        width: 250px;
        height: 200px;
        @media ${MinDevice.mobileSm} {
          width: unset;
          height: unset;
        }
        &:last-child {
          margin-right: 0;
        }
        img {
          height: 100%;
          border-radius: 20px;
        }
      }
    }
    .img-btn {
      display: block;
      padding: 11px;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
    }
  }
  .ratings-section {
    border-top: 1px solid ${Theme.color.lightBorder};
    border-bottom: unset;

    @media ${MinDevice.mobileSm} {
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      margin-bottom: 70px;
    }
    @media ${MinDevice.mobileLg} {
      margin-bottom: 120px;
    }
    .review-detail {
      .restro-detail {
        padding: 0;
        .info-tital {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 0 0;
          @media ${MinDevice.mobileSm} {
            padding: 25px 30px;
          }
          .common-btn {
            display: none;
            @media ${MinDevice.mobileSm} {
              display: block;
              padding: 15px 26px;
            }
          }
          .btn {
            border: none !important;
            &:hover {
              background-color: ${Theme.color.bgTheme} !important;
            }
          }
        }
        .ratings-user {
          padding: 30px 0;
          @media ${MinDevice.mobileSm} {
            padding: 32px;
          }
          .restro-location {
            margin-bottom: 25px;
            @media ${MinDevice.mobileSm} {
              margin-bottom: 45px;
            }
            .user-tital {
              h5 {
                margin-right: 20px;
                font-weight: 700;
                color: ${Theme.color.black};
              }
              p {
                font-size: 16px;
                line-height: 20px;
                @media ${MinDevice.mobileSm} {
                  font-size: 18px;
                  line-height: 26px;
                }
              }
            }
            span {
              background-color: #058a07;
              padding: 18px;
              color: ${Theme.color.white};
              border-radius: 10px;
              margin-right: 30px;
            }
          }
          .restro-review {
            margin-bottom: 0;
            span {
              margin-left: 20px;
              svg {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .common-btn {
          padding: 15px 10px;
        }
        .write-btn {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
        .ask-question {
          padding: 0;
          @media ${MinDevice.mobileSm} {
            padding: 30px 30px 36px;
          }
          p {
            font-size: 16px;
            margin-bottom: 20px;
            @media ${MinDevice.mobileSm} {
              font-size: 18px;
              line-height: 26px;
              margin-bottom: 50px;
            }
          }
          .ask-btn {
            display: block;
            padding: 14px;
            color: ${Theme.color.white};
            background-color: ${Theme.color.bgTheme};
          }
        }
      }
    }
  }
  .user-section {
    display: block;
    margin: 0 8px 30px;
    @media ${MinDevice.mobileXxl} {
      display: flex;
      margin: 0 0 30px;
    }
    .restro-detail {
      width: 100%;
      margin: 0 auto;
      background-color: ${Theme.color.white};
      border-radius: 10px;
      box-shadow: 0 0 10px #e6e6e6;
      @media ${MinDevice.mobileSm} {
        display: flex;
      }

      figure {
        height: 307px;
        @media ${MinDevice.mobileSm} {
          max-width: 350px;
          width: 100%;
        }
        @media ${MinDevice.mobileXl} {
          width: 100%;
          height: auto;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px 10px 0px 0;
          object-fit: cover;
          @media ${MinDevice.mobileSm} {
            border-radius: 10px 0px 0px 10px;
          }
        }
      }
      .restro-name {
        display: flex;
        .jt-tital {
          padding: 20px;
          @media ${MinDevice.mobileSm} {
            padding: 20px 30px;
          }
          @media ${MinDevice.mobileMd} {
            padding: 12px;
          }
          @media ${MinDevice.mobileLg} {
            padding: 20px 30px;
          }
          .user-img {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            @media ${MinDevice.mobileSm} {
              margin-bottom: 30px;
            }
            figure {
              width: 74px;
              height: 74px;
              margin-right: 20px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            p {
              color: ${Theme.color.bgTheme};
            }
            .review-date {
              display: flex;
              align-items: center;
              p {
                color: ${Theme.color.textColor};
                margin-right: 15px;
                font-size: 16px;
                @media ${MinDevice.mobileSm} {
                  font-size: 18px;
                  line-height: 26px;
                }
              }
              svg {
                width: 6px;
              }
            }
          }
          .jt-sub-tital {
            h5 {
              margin-bottom: 10px;
            }
            p {
              margin-bottom: 10px;
              color: ${Theme.color.textColor};
              margin-bottom: 30px;
              @media ${MinDevice.mobileSm} {
                padding-right: 12px;
              }
              @media ${MinDevice.mobileMd} {
                padding-right: 0;
                line-height: 20px;
              }
            }
            .user-view {
              display: block;
              @media ${MinDevice.mobileSm} {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
              .share-comment {
                margin-top: 20px;
                @media ${MinDevice.mobileSm} {
                  margin-top: 0;
                }
                ul {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  @media ${MinDevice.mobileSm} {
                    justify-content: flex-start;
                  }
                  li {
                    list-style: none;
                    @media ${MinDevice.mobileSm} {
                      padding-right: 50px;
                    }
                    &:last-child {
                      padding-right: 0;
                    }
                    a {
                      display: flex;
                      align-items: center;
                      svg {
                        width: 20px;
                        margin-right: 10px;
                      }
                      p {
                        font-size: 18px;
                        line-height: 20px;
                        margin-bottom: 0;
                        @media ${MinDevice.mobileSm} {
                          font-size: 20px;
                          line-height: 26px;
                          margin-bottom: 5px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          span {
            margin-right: 8px;
            margin-bottom: 5px;
            svg {
              width: 20px;
              height: auto;
            }
            &:last-child {
              margin-right: 0;
            }
          }
          svg {
            width: 50px;
            @media ${MinDevice.mobileSm} {
              width: 73px;
            }
          }
        }
      }
    }
  }
`;

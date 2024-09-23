import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const SocialDetail = styled.div`
  .jt-send-email {
    max-width: unset;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 0 40px;

    span {
      display: flex;
      align-items: center;
      width: 100%;
      color: ${Theme.color.bgTheme};
      border: 1px solid ${Theme.color.bgTheme};
      border-radius: 10px 0px 0 10px;
      /* box-shadow: 0px 4px 4px 0px #00000026; */

      svg {
        path {
          fill: black;
        }
      }
      input {
        margin: 0;
        padding: 14px 10px;
        font-size: 18px;
        line-height: 30px;
        @media ${MinDevice.mobileMd} {
          padding: 15px 23px;
        }
      }
    }
    a {
      margin-left: -10px;
      margin-bottom: 0 !important;
      padding: 18px 22px;
      width: unset;
      border-radius: 0 10px 10px 0;
      @media ${MinDevice.mobileSm} {
        padding: 18px 29px;
      }
    }
  }
  .activity-section {
    &.section-block {
      margin: 0;
    }
    .following-tabs {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      .user-detail {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 22px 14px 18px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &:last-child {
          border-bottom: unset;
        }
        @media ${MinDevice.mobileSm} {
          padding: 22px 25px 18px 19px;
        }
        .user-tital {
          h6 {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 5px;
            color: ${Theme.color.bgTheme};
            @media ${MinDevice.mobileSm} {
              font-size: 18px;
              margin-bottom: 10px;
            }
          }
          p {
            font-size: 16px;
            line-height: 18px;
            padding-right: 5px;
            max-width: 200px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            @media ${MinDevice.mobileXs} {
              max-width: 580px;
            }
            @media ${MinDevice.mobileMd} {
              max-width: 220px;
            }
            @media ${MinDevice.mobileLg} {
              max-width: 320px;
            }
            @media ${MinDevice.mobileXl} {
              max-width: 380px;
            }
          }
          .full-detail {
            max-width: unset;
          }
          .status {
            width: 100%;
            max-width: unset;
          }
        }
        figure {
          width: 50px;
          height: 50px;
          margin: 0 13px 0 0;
          @media ${MinDevice.mobileSm} {
            width: 63px;
            height: 63px;
            margin: 0 0 10px 0;
            margin: 0 13px 0 0;
          }
          img {
            width: unset;
            height: 100%;
          }
        }
        .trans-btn {
          border: 1px solid #cccccc !important;
          width: 30px !important;
          padding: 1px 9px !important;
          border-radius: 4px;
          color: #cccccc;
          margin-left: auto;
        }
      }
    }

    .trans-btn {
      display: block;
      border: none;
      padding: 20px 0;
    }
    .common-btn {
      display: block;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 50px;
      @media ${MinDevice.mobileMd} {
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 0;
      }
      svg {
        margin-left: 10px;
      }
    }
    .share-btn {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 50px;
      @media ${MinDevice.mobileSm} {
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 0;
      }
      svg {
        path {
          fill: white;
        }
      }
    }
    .user-tabs {
      box-shadow: 0px 4px 4px 0px #0000001a;
      border-radius: 20px;
      .suggestion-tital {
        /* display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #00000033; */
        padding: 0 20px;
        .jt-send-email {
          margin-bottom: 22px;
          span {
            display: flex;
            align-items: center;
            border: 1px solid rgba(204, 204, 204, 1);
            border-radius: 10px;
            max-width: 400px;
            width: 100%;
            input {
              font-size: 14px;
              line-height: 18px;
              padding: 5px 0 5px 18px;
              @media ${MinDevice.mobileLg} {
                font-size: 18px;
                line-height: 30px;
              }
            }
            svg {
              width: 35px;
              height: 20px;
              path {
                fill: rgba(204, 204, 204, 1);
              }
            }
          }
          a {
            transform: rotate(90deg);
            padding: 18px 10px;
            margin-left: auto;
            @media ${MinDevice.mobileLg} {
              padding: 18px 0;
            }
            svg {
              width: 20px;
            }
          }
        }
      }
      .suggestion-user {
        box-shadow: none;
        border-radius: 0;
        .user-detail {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 22px 14px 18px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          &:last-child {
            border-bottom: unset;
          }
          @media ${MinDevice.mobileSm} {
            padding: 22px 25px 18px 19px;
          }
          .user-tital {
            h6 {
              font-size: 16px;
              line-height: 20px;
              margin-bottom: 5px;
              color: ${Theme.color.bgTheme};
              @media ${MinDevice.mobileSm} {
                font-size: 18px;
                margin-bottom: 10px;
              }
            }
            p {
              font-size: 16px;
              line-height: 18px;
              padding-right: 5px;
              max-width: 200px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              @media ${MinDevice.mobileXs} {
                max-width: 580px;
              }
              @media ${MinDevice.mobileMd} {
                max-width: 220px;
              }
              @media ${MinDevice.mobileLg} {
                max-width: 320px;
              }
              @media ${MinDevice.mobileXl} {
                max-width: 380px;
              }
            }
            .full-detail {
              max-width: unset;
            }
            .status {
              width: 100%;
              max-width: unset;
            }
          }
          figure {
            width: 50px;
            height: 50px;
            margin: 0 13px 0 0;
            @media ${MinDevice.mobileSm} {
              width: 63px;
              height: 63px;
              margin: 0 0 10px 0;
              margin: 0 13px 0 0;
            }
            img {
              width: unset;
              height: 100%;
            }
          }
          .trans-btn {
            border: 1px solid #cccccc !important;
            width: 30px !important;
            padding: 1px 9px !important;
            border-radius: 4px;
            color: #cccccc;
            margin-left: auto;
          }
        }
      }
      ul {
        margin: 0 19px;
        flex-wrap: nowrap;
        opacity: auto;
        @media ${MinDevice.mobileXxl} {
          overflow: unset;
        }
        li {
          padding-right: 20px;
          .nav-link {
            padding: 18px;
          }
        }
      }
      .social-feture-block-tab {
        ul {
          margin: 0px;
        }
        .reviewitem-main {
          padding: 15px;
          border-bottom: 1px solid #00000033;
          &:last-child {
            border: none;
          }
        }
        .flex-block-time-name {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .social-tabs {
      box-shadow: none;
      border: none;
      .nav-tabs {
        justify-content: space-between;
        margin: 0 0 50px;
        overflow-x: auto;
        overflow-y: hidden;
        @media ${MinDevice.mobileSm} {
          margin: 0 0 60px;
        }
        .nav-item {
          &:last-child {
            padding-right: 0;
          }
          .nav-link {
            padding: 16px 10px;
            @media ${MinDevice.mobileSm} {
              padding: 16px 61px;
            }
          }
        }
      }
      .tab-content {
        /* box-shadow: 0px 4px 4px 0px #0000001a;
        border-radius: 20px;
        padding: 0 10px 21px;
        margin-bottom: 30px; */
        @media ${MinDevice.mobileSm} {
          padding: 0 0 36px;
          margin-bottom: 40px;
        }

        .social-user {
          box-shadow: 0px 4px 4px 0px #0000001a;
          border-radius: 20px;
          padding: 0 10px 21px;
          margin-bottom: 30px;
          border: none;
          width: 100%;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 52px;
            padding: 0 20px 36px;
          }
          figure {
            max-width: 100px;
            width: 100%;
            height: 100px;
            margin: 0;

            @media ${MinDevice.mobileSm} {
              max-width: 190px;
              height: 190px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .user-img {
            display: none;

            @media ${MinDevice.mobileSm} {
              display: flex;
              margin-right: 21px;
            }
            /* @media ${MinDevice.mobileLg} {
              display: flex;
              margin-right: 21px;
            } */
            @media ${MinDevice.mobileXxl} {
              margin-right: 55px;
            }
          }
          .profile-tital {
            border-bottom: none;
            width: 100%;
            @media ${MinDevice.mobileSm} {
              /* max-width: 450px; */
              /* margin-left: auto; */
              display: flex;
              margin: 0 0 50px 0;
              padding: 0;
            }
            .followrs-detail {
              padding: 0;
              border-bottom: none;
              width: 100%;

              .suggestion-tital {
                padding: 20px 0 30px;
                border-bottom: unset;
                display: none;
                @media ${MinDevice.mobileSm} {
                  display: flex;
                  justify-content: space-between;
                }
                .user-img {
                  display: block;
                  @media ${MinDevice.mobileSm} {
                    display: none;
                  }
                }
              }

              ul {
                border-bottom: none;
                margin: 0;
              }
            }
          }
          .user-mobile-view {
            display: block;
            border-bottom: none;
            padding: 0;
            margin-bottom: 30px;
            @media ${MinDevice.mobileSm} {
              display: none;
            }
            svg {
              width: 30px;
              height: 30px;
            }
          }
        }
        .social-followers {
        }
        .common-btn {
          padding: 12px 25px;
          width: 100%;
          margin-bottom: 0;
          @media ${MinDevice.mobileSm} {
            padding: 16px 25px;
          }
        }
        .trans-btn {
          border: 1px solid #0f4da2;
          margin-bottom: 0;
        }
      }
    }
    figure {
      margin-bottom: 20px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 50px;
      }
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
    .user-profile {
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border-radius: 20px;
      margin-bottom: 40px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 60px;
      }
      .blue-part {
        width: 100%;
        height: 200px;
        border-radius: 20px 20px 0 0;
        background-color: ${Theme.color.bgTheme};
        position: relative;
        z-index: -1;
        &::after {
          content: '';
          background-image: url('/icons/group-icon.svg');
          background-repeat: no-repeat;
          width: 25px;
          height: 25px;
          position: absolute;
          top: 20px;
          right: 15px;
          cursor: pointer;
        }
      }
      figure {
        width: 115px;
        height: 115px;
        margin: -60px auto 30px;
        border: 6px solid white;
        border-radius: 50%;
        @media ${MinDevice.mobileSm} {
          width: 230px;
          height: 230px;
          margin: -115px auto 35px;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .upload-detail {
          span {
            display: none;
          }
          label {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            padding: 0 0 0 2px;
            border-radius: 30px;
            background: rgba(15, 77, 162, 1);
            margin: -30px -2px 0 auto;
            cursor: pointer;
            position: relative;
            @media ${MinDevice.mobileSm} {
              width: 60px;
              height: 60px;
              padding: 0 0 0 4px;
              margin: -55px 20px 0 auto;
            }
            svg {
              width: 20px;
              height: 20px;
              @media ${MinDevice.mobileSm} {
                width: 27px;
                height: 27px;
              }
            }
          }
        }
      }
      .profile-tital {
        text-align: center;
        border-bottom: 1px solid ${Theme.color.lightBorder};
        padding: 0 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media ${MinDevice.mobileSm} {
          padding: 0 20px 40px;
        }
        svg {
          width: 24px;
          cursor: pointer;
        }
        h4 {
          margin-right: 5px;
        }
        p {
          font-size: 14px;
          line-height: 26px;
          text-overflow: ellipsis;
          overflow: hidden;
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .followrs-detail {
        padding: 30px 12px;
        border-bottom: 1px solid ${Theme.color.lightBorder};
        &.border-none-follow {
          border: none;
        }
        @media ${MinDevice.mobileSm} {
          padding: 20px;
        }
        @media ${MinDevice.mobileMd} {
          padding: 40px 50px;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            list-style: none;
            p {
              margin-bottom: 5px;
              font-size: 18px;
              line-height: 26px;
              @media ${MinDevice.mobileSm} {
                margin-bottom: 10px;
              }
            }
            h4 {
              font-size: 30px;
              line-height: 36px;
              text-align: center;
              color: ${Theme.color.black};
            }
          }
        }
      }
    }
    .suggestion-user {
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border-radius: 20px;
      margin-bottom: 40px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 60px;
      }
      .suggestion-tital {
        border-bottom: 1px solid ${Theme.color.lightBorder};
        padding: 20px 20px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h5 {
          font-size: 20px;
        }
        svg {
          width: 20px;
          height: 30px;
          rotate: 90deg;
        }
      }

      .profile-btn {
        border-top: 1px solid ${Theme.color.lightBorder};
      }
    }
    .user-msg {
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border-radius: 20px;
      padding: 15px 20px 30px;
      margin: 0 0 40px 0;
      @media ${MinDevice.mobileSm} {
        margin: 0 0 60px 0;
      }
      h5 {
        border-bottom: 1px solid gray;
        margin: 0 -20px;
        padding: 10px 20px 20px;
      }

      form {
        margin-top: 30px;
        figure {
          width: 50px;
          height: 50px;
          margin: 0 20px 0 0;
          img {
            width: unset;
            height: 100%;
          }
        }
        label {
          font-size: 18px;
          line-height: 24px;
          font-weight: 500;
          color: #a9a9a9;
        }
        input {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #a9a9a9;
          box-shadow: none;
          border: 1px solid #52525280 !important;
          padding: 17px 23px;
          margin-bottom: 30px;
          &:focus {
            border: 1px solid #52525280 !important;
          }
          &::placeholder {
            color: #a9a9a9;
          }
        }
        &::placeholder {
          color: #a9a9a9;
        }
        textarea {
          border: 1px solid #52525280 !important;
          resize: none;
          padding: 8px 10px 0;
          font-size: 16px;
          line-height: 30px;
          box-shadow: none;
          margin-bottom: 30px;
          &:focus {
            border: 1px solid #52525280 !important;
          }
          &::placeholder {
            color: #a9a9a9;
          }
        }
      }
      .common-btn {
        margin-bottom: 0;
      }
    }
  }
  .tabs-section {
    ul {
      border-bottom: 1px solid ${Theme.color.bgTheme};
      margin-bottom: 40px;
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap: nowrap;
      @media ${MinDevice.mobileXxl} {
        flex-wrap: wrap;
      }
      li {
        padding-right: 38px;
        .nav-link {
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
          padding: 18px 11px 18px;
          color: ${Theme.color.black};
          border: none;
          white-space: nowrap;
          @media ${MinDevice.mobileSm} {
            font-size: 20px;
            line-height: 27px;
            padding: 17px 20px 17px;
          }
          &:hover {
            border: none;
          }
        }
        .active {
          transition: all 0.5s;
          background-color: #0f4da21a;
          color: ${Theme.color.bgTheme};
        }
      }
    }
    .activity-detail {
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      padding: 20px 20px 27px;
      border: 1px solid #cccccc;
      border-radius: 20px;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      .activity-tital {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 20px;
        @media ${MinDevice.mobileSm} {
          padding: 0 0 40px;
        }
        figure {
          width: 63px;
          height: 63px;
          margin: 0 13px 0 0;
          img {
            width: unset;
            height: 100%;
          }
        }
        svg {
          width: 20px;
          height: 10px;
        }
        h4 {
          margin-bottom: 5px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 10px;
          }
        }
        p {
          font-size: 16px;
          line-height: 18px;
          margin-bottom: 0;
        }
      }
      figure {
        margin-bottom: 20px;
        .main-img {
          display: none;
          @media ${MinDevice.mobileSm} {
            display: block;
          }
        }
        .mobile-img {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 40px;
        }
      }
      .like-comment {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #00000033;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 20px;
        }
        svg {
          width: 18px;
          height: auto;
        }
        p {
          line-height: 18px;
          margin-bottom: 0;
          margin-left: 10px;
          @media ${MinDevice.mobileSm} {
            line-height: 20px;
          }
        }
      }
      .share-post {
        margin-bottom: 27px;
        ul {
          border-bottom: none;
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          li {
            padding-right: 0;
            list-style: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            p {
              margin-bottom: 0;
              margin-left: 10px;
            }
            .like-post {
              background-color: #0f4da2;
              border-radius: 50%;
              padding: 4px;
              width: 23px;
              height: 23px;
              path {
                fill: white;
              }
            }
          }
        }
      }
    }
    .comment-detail {
      margin-bottom: 20px;
      textarea {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        box-shadow: none;
        margin-bottom: 15px;
        padding: 0 10px 5px 10px;
        resize: none;
        border: 1px solid rgba(204, 204, 204, 1);
        color: rgba(204, 204, 204);
        &:focus,
        &:focus-visible {
          box-shadow: none;
          outline: none;
        }
      }
      .common-btn {
        max-width: 120px;
        width: 100%;
        margin: 0 auto;
        padding: 11.5px 0;
      }
    }
    .user-comment {
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 10px;
      padding: 0 10px;
      .user-title {
        margin: 0 -10px 0;
        padding: 15px 10px;
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:last-child {
          border-bottom: none;
        }
        figure {
          width: 40px;
          height: 40px;
          margin-bottom: 0;
          display: block ruby;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .user-subtitle {
          margin: 0 0 0 12px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          h6 {
            font-size: 20px;
            font-weight: 700;
            line-height: 20px;
            color: #0f4da2;
            margin-bottom: 4px;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            color: rgba(82, 82, 82, 1);
            margin-bottom: 10px;
          }
          small {
            font-size: 14px;
            font-weight: 600;
            line-height: 25px;
            color: rgba(82, 82, 82, 1);
          }
          .common-btn {
            padding: 0 25px;
            height: 50px;
          }
        }
      }
    }
  }
  .events-section {
    &.section-block {
      margin: 50px 0;
      @media ${MinDevice.mobileSm} {
        margin: 0 0 120px;
      }
    }
    .part-btn {
      display: block;
      margin: 30px auto;
      @media ${MinDevice.mobileSm} {
        display: none;
        margin: 0;
      }
    }
    .btn {
      &:hover {
        --bs-btn-hover-bg: #0f4da2;
      }
    }
    .common-btn {
      border: none;
      margin-bottom: 0;
    }
    .events-title {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      justify-content: center;
      @media ${MinDevice.mobileSm} {
        justify-content: space-between;
        margin-bottom: 80px;
      }
      h2 {
        margin-bottom: 0;
        text-align: center;
        @media ${MinDevice.mobileSm} {
          text-align: left;
        }
      }
      .common-btn {
        border: none;
      }
      .part-btn {
        display: none;
        @media ${MinDevice.mobileSm} {
          display: block;
        }
      }
    }
    .event-tabs {
      .tab-content {
        .events-detail {
          display: none;
          @media ${MinDevice.mobileSm} {
            display: block;
          }
        }
        .moblie-view {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
        .swiper {
          display: block;
          @media ${MinDevice.mobileSm} {
            display: none;
          }
        }
      }
      .nav-tabs {
        justify-content: center;
        margin-bottom: 50px;
        border: none;
        .nav-item {
          margin-bottom: 10px;
          .nav-link {
            background-color: transparent;
            color: #0f4da2;
            border-radius: 10px;
            margin: 0 20px;
            padding: 14px 0;
            width: 250px;
            font-size: 18px;
            line-height: 20px;
            font-weight: 600;
            border: 1px solid #0f4da2;
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 27px;
              padding: 16px 0;
            }
          }
          .active {
            background-color: #0f4da2;
            border: 1px solid #0f4da2;
            color: white;
          }
        }
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
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        top: 16%;
        /* @media ${MinDevice.mobileXs} {
          top: 13%;
        } */
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
        img {
          height: 200px;
          object-fit: cover;
        }
        @media ${MinDevice.mobileSm} {
          display: none;
        }
      }
    }
  }
`;

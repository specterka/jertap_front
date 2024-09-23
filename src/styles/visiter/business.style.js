import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const BusinessDetail = styled.div`
  .section-block {
    padding: 0;
    margin-top: 40px;
    @media ${MinDevice.mobileSm} {
      padding: 0;
      margin-top: 120px;
    }
  }
  .listing-section {
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    padding: 0;
    border-radius: 20px;
    @media ${MinDevice.mobileSm} {
      padding: 0 38px 40px;
    }
    .col-md-4 {
      &:last-child {
        .listing-detail {
          border-right: 0;
          border-bottom: 0;
        }
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
          p {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            @media ${MinDevice.mobileSm} {
              font-size: 16px;
              line-height: 30px;
            }
          }
        }
        h5 {
          margin-bottom: 10px;
        }
      }
    }
  }
  .customers-section {
    &.section-block {
      margin-bottom: 50px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 120px;
      }
    }
    .listing-img {
      max-width: 500px;
      margin: 0 auto 40px;
      width: 100%;
      @media ${MinDevice.mobileLg} {
        max-width: unset;
        margin: unset;
      }
      img {
        width: 100%;
      }
      .common-btn {
        display: block;
        width: 100%;
      }
    }
    .listing-tital {
      h4 {
        margin-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 30px;
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 20px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 30px;
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
        &:last-child {
          margin: 0 0 0 20px;
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
      margin: 40px 0 20px;
      @media ${MinDevice.mobileSm} {
        border: 1px solid ${Theme.color.bgTheme};
        margin: 50px 0 20px;
      }
      > div {
        width: 100%;
        input {
          padding: 9px 20px;
          margin-bottom: 20px;
          border: 1px solid ${Theme.color.bgTheme};
          @media ${MinDevice.mobileSm} {
            margin-bottom: 0;
            padding: 0 25px;
            border: none;
          }
          &::placeholder {
            font-size: 18px;
            color: ${Theme.color.bgTheme};
          }
        }
        border-radius: 9px;
      }
      button {
        padding: 15px;
        font-size: 16px;
        line-height: 21px;
        width: 100%;
        white-space: nowrap;
        @media ${MinDevice.mobileSm} {
          font-size: 18px;
          line-height: 24px;
          padding: 17px 25px;
          margin-left: auto;
          width: unset;
        }
        svg {
          margin-left: 10px;
        }
      }
    }
    p {
      font-size: 14px;
      line-height: 30px;
    }
  }
  .story-secction {
    background-image: url("/images/success-img.png");
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 490px;
    @media ${MinDevice.mobileSm} {
      background-image: url("/images/story-img.png");
      height: 700px;
    }
    h2 {
      padding: 45px 0;
      margin: 0;
      @media ${MinDevice.mobileSm} {
        padding: 77px 0;
      }
    }
    .restro-detail {
      width: 100%;
      margin: 0 auto;
      background-color: ${Theme.color.white};
      border-radius: 20px;
      box-shadow: 0 0 10px #e6e6e6;
      @media ${MinDevice.mobileSm} {
        display: flex;
      }
      @media ${MinDevice.mobileMd} {
        margin-right: 10px;
      }
      @media ${MinDevice.mobileXl} {
        max-width: 670px;
        margin: 0 30px 0 0;
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
            padding: 30px 20px;
          }
          @media ${MinDevice.mobileMd} {
            padding: 12px;
          }
          @media ${MinDevice.mobileLg} {
            padding: 30px 20px;
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
          .jt-sub-tital {
            h5 {
              margin-bottom: 10px;
            }
            h6 {
              margin-bottom: 10px;
              color: ${Theme.color.bgTheme};
              font-weight: 500;
            }
            p {
              margin-bottom: 10px;
              color: ${Theme.color.textColor};
              margin-bottom: 20px;
              @media ${MinDevice.mobileSm} {
                padding-right: 12px;
                margin-bottom: 30px;
              }
              @media ${MinDevice.mobileMd} {
                padding-right: 0;
                line-height: 30px;
              }
            }
          }
          span {
            margin-right: 8px;
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
      &:hover {
        background-color: ${Theme.color.bgTheme};
        transition: all 1s;
        box-shadow: none;
        .jt-tital {
          box-shadow: none;
          h5 {
            color: ${Theme.color.white};
          }
          p {
            color: ${Theme.color.white} !important;
          }
          .jt-sub-tital {
            h6 {
              color: ${Theme.color.white};
            }
            p {
              color: ${Theme.color.white} !important;
            }
          }
        }
        svg {
          path {
            fill: ${Theme.color.white};
          }
        }
        .wh-star {
          svg {
            path {
              fill: transparent;
              stroke: ${Theme.color.white};
            }
          }
        }
      }
    }
    .swiper-pagination {
      position: initial;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${MinDevice.mobileSm} {
        margin-top: 50px;
      }
      span {
        width: 10px;
        height: 10px;
        background-color: transparent;
        border: 2px solid ${Theme.color.bgTheme};
        border-radius: 10px;
        margin-right: 12px;
      }
      .swiper-pagination-bullet-active {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: ${Theme.color.bgTheme};
      }
    }
  }
  .qa-section {
    @media ${MinDevice.mobileSm} {
      background-image: url("/images/qa-img.png");
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
    }
    &.section-block {
      margin: 0 0 50px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 168px;
      }
    }
    .accordion {
      --bs-accordion-border-width: none !important;
      --bs-accordion-border-radius: none;
      /* border-bottom-left-radius: unset !important; */
      @media ${MinDevice.mobileSm} {
        margin: 0 0 50px;
      }
      .accordion-item {
        border-bottom: 1px solid #e2e2e2;
        position: relative;
        width: 100%;
        .accordion-header {
          .accordion-button:not(.collapsed) {
            box-shadow: 0px 4px 4px 0px #0000001a;
            background-color: transparent;
            color: ${Theme.color.bgTheme};
            border-radius: 10px;
            padding: 10px;
            transition: all 0.5s;
            @media ${MinDevice.mobileSm} {
              padding: 15px 20px;
            }
          }
          .accordion-button {
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
            /* border-bottom-left-radius: unset !important; */
            padding: 22px 10px;
            color: ${Theme.color.bgTheme};
            @media ${MinDevice.mobileSm} {
              padding: 42px 20px;
              font-size: 18px;
              line-height: 30px;
            }
            &:focus {
              box-shadow: none;
            }
            &::after {
              margin-left: auto;
            }
            &.collapsed {
              background-color: transparent;
              color: ${Theme.color.black};
              box-shadow: none;
              border-radius: none;
              transition: all 0.5s;
            }
          }
          .accordion-button:not(.collapsed)::after {
            background-image: url("/icons/arrow-blue.svg");
            background-repeat: no-repeat;
            transition: all 0.5s;
          }
        }

        .accordion-collapse {
          .accordion-body {
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
            color: ${Theme.color.textColor};
            background-color: transparent;
            padding: 20px 8px 40px;
            @media ${MinDevice.mobileSm} {
              padding: 20px 20px 40px;
              font-size: 16px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
`;

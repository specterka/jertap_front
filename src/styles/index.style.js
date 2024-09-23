import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const HomeIndex = styled.div`
  .swiper-pagination {
    position: initial;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 2px solid ${Theme.color.bgTheme};
      border-radius: 10px;
      margin-right: 12px;
    }
    .swiper-pagination-bullet {
      margin: 0 2px;
    }
    .swiper-pagination-bullet-active {
      width: 15px;
      height: 15px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: ${Theme.color.bgTheme};
    }
  }

  .categories-section {
    position: relative;
    &.section-block {
      margin: 50px 0 100px;
      @media ${MinDevice.mobileSm} {
        margin: 120px 0;
      }
    }
    .jt-restro {
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media ${MinDevice.mobileSm} {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 80px;
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
      h3 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
        margin-left: 12px;
        color: ${Theme.color.bgTheme};
        @media ${MinDevice.mobileSm} {
          font-size: 30px;
          line-height: 40px;
        }
      }
      .common-btn {
        display: block;
        padding: 15px;
        width: 100%;
        @media ${MinDevice.mobileSm} {
          width: unset;
          padding: 20px 78px;
        }
      }
    }
    .dot-btn {
      width: 100%;
      height: 56px;
      padding: 0 20px;
      border: 1px solid #525252;
      margin: 0 auto;
      display: block;
      @media ${MinDevice.mobileSm} {
        margin: 0 0 10px -1px;
        height: 80px;
      }
      @media ${MinDevice.mobileLg} {
        padding: 25px 20px;
        width: 100%;
      }
      svg {
        width: 35px;
        height: auto;
        margin: 0 auto;
      }
    }

    .swiper {
      .jt-food-menu {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        .jt-tital {
          display: flex;
          align-items: center;
          /* border-bottom: 1px dashed #cccccc; */
          justify-content: space-between;
          padding: 8px 15px;
          @media screen and (max-width: 767px) {
            justify-content: flex-start;
          }
          @media ${MinDevice.mobileSm} {
            padding: 10px 20px;
            justify-content: flex-start;
          }
          .jt-icon {
            width: 40px;
            height: 40px;
            margin-right: 30px;
            @media ${MinDevice.mobileSm} {
              width: 60px;
              height: 60px;
            }
            img {
              width: 100%;
              height: 100%;
              /* object-fit: contain; */
              object-fit: cover;
            }
          }
          h3 {
            font-size: 20px;
            line-height: 27px;
            font-weight: 600;
            color: ${Theme.color.textColor};
            width: 100%;
            max-width: 170px;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
              color: ${Theme.color.bgTheme};
            }
            @media ${MinDevice.mobileSm} {
              font-size: 30px;
              line-height: 40px;
            }
            /* @media ${MinDevice.mobileXxl} {
              width: unset;
            } */
          }
        }
        .menu-bar {
          ul {
            padding: 20px 55px;
            margin-bottom: 0;
            @media ${MinDevice.mobileSm} {
              padding: 30px 55px;
            }
            li {
              list-style: none;
              margin-bottom: 20px;
              @media ${MinDevice.mobileSm} {
                margin-bottom: 30px;
              }
              &:last-child {
                margin-bottom: 0;
              }
              a {
                display: flex;
                align-items: center;
                color: ${Theme.color.textColor};
                &:hover,
                &:active {
                  span {
                    background-color: ${Theme.color.bgTheme};
                    border: 1px solid ${Theme.color.bgTheme};
                    transition: all 0.5s;
                    svg {
                      path {
                        fill: ${Theme.color.white};
                        transition: all 0.5s;
                      }
                    }
                  }
                  h5 {
                    color: ${Theme.color.bgTheme};
                  }
                }
                span {
                  border: 1px solid ${Theme.color.textColor};
                  border-radius: 10px;
                  width: 40px;
                  height: 40px;
                  padding: 5px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 30px;
                  @media ${MinDevice.mobileSm} {
                    width: 60px;
                    height: 60px;
                    padding: 10px;
                  }
                  svg {
                    width: 25px;
                    height: auto;
                    @media ${MinDevice.mobileSm} {
                      width: 38px;
                    }
                  }
                }
                h5 {
                  font-size: 16px;
                  line-height: 22px;
                  font-weight: 500;
                  color: ${Theme.color.textColor};
                  @media ${MinDevice.mobileSm} {
                    font-size: 20px;
                    line-height: 28px;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-pagination {
        display: flex;
        @media ${MinDevice.mobileSm} {
          display: none;
        }
      }
    }
  }
  .restro-section {
    background-color: #f6f6f6;
    position: relative;
    padding: 80px 0 50px;
    @media ${MinDevice.mobileSm} {
      padding: 80px 0;
    }
    &::before {
      content: '';
      background-image: url('/images/retro-img.png');
      background-repeat: no-repeat;
      position: absolute;
      width: 110px;
      height: 103px;
      left: 0;
      top: -50px;
      background-size: cover;
      @media ${MinDevice.mobileSm} {
        width: 170px;
        height: 150px;
        top: -95px;
      }
      @media ${MinDevice.mobileMd} {
        width: 270px;
        height: 245px;
        top: -95px;
      }
    }
    &::after {
      content: '';
      background-image: url('/images/retro-img.png');
      background-repeat: no-repeat;
      position: absolute;
      width: 110px;
      height: 103px;
      right: 0;
      bottom: -60px;
      background-size: cover;
      @media ${MinDevice.mobileSm} {
        width: 170px;
        height: 150px;
        bottom: -121px;
      }
      @media ${MinDevice.mobileMd} {
        width: 270px;
        height: 245px;
        bottom: -121px;
      }
    }
    &.section-block {
      margin: 0;
    }
    .restro-detail {
      width: 100%;
      margin: 0 auto;
      background-color: ${Theme.color.white};
      border-radius: 0 20px 20px 0px;
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
          height: auto;
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
                line-height: 20px;
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
    }
    .restro-box {
      display: none;
      @media ${MinDevice.mobileMd} {
        max-width: 250px;
        width: 100%;
        box-shadow: 0 0 10px #e6e6e6;
        margin: 0 14px 0 0;
        background-color: ${Theme.color.white};
        border-radius: 20px;
        display: block;
        &:last-child {
          margin: 0;
        }
      }
      @media ${MinDevice.mobileLg} {
        max-width: 295px;
        margin: 0 30px 0 0;
      }
      figure {
        max-width: 295px;
        width: 100%;
        height: 190px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px 20px 0px 0px;
        }
      }
      .jt-sub-tital {
        padding: 25px;
        @media ${MinDevice.mobileMd} {
          padding: 12px;
        }
        @media ${MinDevice.mobileLg} {
          padding: 25px;
        }
        h5 {
          margin-bottom: 10px;
        }
        i {
          svg {
            width: 10px;
          }
        }
        p {
          margin-left: 10px;
          color: ${Theme.color.textColor};
        }
      }
    }
    .jt-dots {
      display: flex;
      align-items: center;
      margin-right: 30px;
      position: absolute;
      bottom: 10px;
      justify-content: center;
      width: 100%;
      bottom: 33px;
      @media ${MinDevice.mobileSm} {
        width: unset;
        bottom: 70px;
        left: 45%;
        transform: translate(45%, 0);
      }
      span {
        width: 10px;
        height: 10px;
        background-color: transparent;
        border: 1px solid ${Theme.color.bgTheme};
        border-radius: 10px;
        margin-right: 12px;
      }
      .swiper-slide-active {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: ${Theme.color.bgTheme};
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 50px;
      margin: 0;
      top: 22%;
      @media ${MinDevice.mobileSm} {
        top: 41%;
      }
      &::after {
        background-color: ${Theme.color.black};
        font-size: 15px;
        padding: 16px;
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
  .guid-section {
    &.section-block {
      margin: 120px 0 50px;
      @media ${MinDevice.mobileSm} {
        margin: 240px 0 120px;
      }
    }
    .guide-detail {
      position: relative;
      figure {
        position: relative;
        height: 375px;
        @media ${MinDevice.mobileSm} {
          height: unset;
        }
        &:after {
          content: '';
          background-image: url('/images/black-layer.png');
          background-repeat: no-repeat;
          position: absolute;
          border-radius: 20px;
          height: 100%;
          width: 100%;
          bottom: 0;
          left: 0;
          top: 0;
        }
        img {
          border-radius: 20px;
          height: 100%;
          width: 100%;
          object-fit: cover;
          @media ${MinDevice.mobileSm} {
            height: auto;
          }
        }
      }
      .guide-tital {
        position: absolute;
        bottom: 20px;
        padding: 0 20px;
        @media ${MinDevice.mobileSm} {
          bottom: 40px;
          padding: 0 40px;
        }
        h3 {
          font-size: 20px;
          line-height: 27px;
          font-weight: 500;
          color: ${Theme.color.white};
          margin-bottom: 0;
          @media ${MinDevice.mobileSm} {
            font-size: 30px;
            line-height: 40px;
          }
        }
        p {
          font-size: 16px;
          line-height: 26px;
          color: ${Theme.color.white};
          margin-bottom: 20px;
          font-weight: 400;
          @media ${MinDevice.mobileSm} {
            font-size: 20px;
            margin-bottom: 30px;
          }
        }
        .trans-btn {
          color: ${Theme.color.white};
          border: 1px solid ${Theme.color.white};
          padding: 14px 45px;
          display: inline-block;
        }
      }
    }
  }
  .activities-section {
    background-color: ${Theme.color.white};
    &.restro-section {
      &::after {
        display: none;
      }
      &::before {
        display: none;
      }
    }
    &.section-block {
      padding: 0 0 50px;
      @media ${MinDevice.mobileSm} {
        padding: 0 0 80px;
      }
    }
    .restro-detail {
      max-width: 420px;
      width: 100%;
      border-radius: 20px;
      .restro-name {
        width: 100%;
        .jt-tital {
          width: 100%;
          p {
            height: 167px;
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-scrollbar {
              display: none;
            }
            @media screen and (max-width: 767px) {
              height: auto !important;
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
        }
        h5 {
          color: ${Theme.color.white};
        }
        p {
          color: ${Theme.color.white} !important;
        }
        .jt-sub-tital {
          p {
            height: 167px;
            color: ${Theme.color.white} !important;
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-scrollbar {
              display: none;
            }
          }
          span {
            color: ${Theme.color.white} !important;
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
    }
  }
`;

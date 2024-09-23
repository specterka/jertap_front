import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const CategoryIndex = styled.div`
  margin: 50px 0;
  @media ${MinDevice.mobileSm} {
    margin: 120px 0;
  }
  .categories-section {
    position: relative;
    &.section-block {
      margin: 50px 0 100px;
      @media ${MinDevice.mobileSm} {
        margin: 120px 0 210px;
      }
    }
    .jt-restro {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 80px;
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
        padding: 20px 24px;
        @media ${MinDevice.mobileSm} {
          padding: 20px 78px;
        }
      }
    }
    .swiper {
      .jt-food-menu {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 10px;
        margin-bottom: 1px;
        .jt-tital {
          display: flex;
          align-items: center;
          border-bottom: 1px dashed #cccccc;
          justify-content: center;
          padding: 15px 0;
          @media ${MinDevice.mobileSm} {
            padding: 20px 45px;
            justify-content: flex-start;
          }
          .jt-icon {
            svg {
              width: 50px;
              height: 50px;
              margin-right: 30px;
              @media ${MinDevice.mobileSm} {
                width: 90px;
                height: 90px;
              }
            }
          }
          h3 {
            font-size: 20px;
            line-height: 27px;
            font-weight: 600;
            color: ${Theme.color.textColor};
            &:hover {
              color: ${Theme.color.bgTheme};
            }
            @media ${MinDevice.mobileSm} {
              font-size: 30px;
              line-height: 40px;
            }
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
  .btn-primary {
    &:hover,
    &:active,
    &:focus-visible {
      background-color: initial !important;
      border-color: #525252 !important;
      box-shadow: none;
    }
  }
  .jt-food-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    margin-bottom: 20px;
    padding-bottom: 10px;
    @media ${MinDevice.mobileSm} {
      margin-bottom: 30px;
    }
    @media ${MinDevice.mobileXxl} {
      overflow-x: auto;
      padding-bottom: 0;
      margin-bottom: 50px;
    }
    .main-food-menu {
      width: 130px;
      margin-right: 30px;
      @media ${MinDevice.mobileSm} {
        margin-right: 65px;
      }
      &:last-child {
        margin-right: 0;
      }
      a {
        .food-menu {
          border: 1px solid ${Theme.color.black};
          border-radius: 10px;
          width: 90px;
          height: 90px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          @media ${MinDevice.mobileSm} {
            margin: 0 auto 20px;
            padding: 22px;
            width: 120px;
            height: 120px;
          }
          &:hover {
            box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
          }
          i {
            width: 70px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media ${MinDevice.mobileSm} {
              width: 75px;
              height: 75px;
            }
            /* svg {
            } */
          }
        }
        h6 {
          text-align: center;
          white-space: nowrap;
          color: ${Theme.color.textColor};
          font-weight: 600;
          &:hover {
            color: ${Theme.color.bgTheme};
          }
        }
        &:active {
          background-color: transparent !important;
        }
      }
    }
  }
  .jt-food-list {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding-bottom: 10px;
    margin-bottom: 20px;
    @media ${MinDevice.mobileSm} {
      padding-bottom: 40px;
    }
    @media ${MinDevice.mobileXxl} {
      overflow-x: unset;
    }
    .food-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
      border: none;
      padding: 0;
      border-radius: 10px;
      margin-right: 10px;
      position: relative;
      @media ${MinDevice.mobileSm} {
        width: 325px;
        margin-right: 20px;
      }
      .css-b62m3t-container {
        width: 200px;
        @media ${MinDevice.mobileSm} {
          width: 325px;
        }
        &:focus-visible {
          outline: none;
        }
        .css-t3ipsp-control {
          box-shadow: unset;
          border: none;
          border-radius: 10px;
          &:hover,
          &:focus-visible {
            outline: unset !important;
            border-color: unset !important;
          }
          .css-1hb7zxy-IndicatorsContainer {
            .css-tj5bde-Svg {
              width: 30px;
              fill: ${Theme.color.bgTheme};
            }
            .css-1u9des2-indicatorSeparator {
              display: none;
            }
          }
        }
        .css-13cymwt-control {
          border: none;
          min-height: unset;
          border-radius: 10px;
          .css-1hb7zxy-IndicatorsContainer {
            .css-tj5bde-Svg {
              width: 30px;
              fill: ${Theme.color.bgTheme};
            }
            .css-1u9des2-indicatorSeparator {
              display: none;
            }
          }
        }
        .css-1fdsijx-ValueContainer {
          padding: 0;
        }
        .css-1dimb5e-singleValue {
          display: flex;
          align-items: center;
          margin: 0;
          .food-option {
            width: 50px;
            height: 50px;
            background-color: ${Theme.color.bgTheme};
            border-radius: 10px;
            margin-right: 30px;
            display: flex;
            align-items: center;
            @media ${MinDevice.mobileSm} {
              width: 60px;
              height: 60px;
            }
            svg {
              margin: 0 auto;
              path {
                fill: ${Theme.color.white};
              }
            }
          }
          p {
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            color: ${Theme.color.textColor};
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 28px;
            }
          }
        }
      }
      .css-1nmdiq5-menu {
        max-width: 323px;
        width: 100%;
        box-shadow: 0px 4px 4px 0px #00000026;
        padding: 20px;
        margin-bottom: 0;
        border-radius: 10px;
        .css-1n6sfyn-MenuList {
          max-height: unset;
          height: 100%;
          padding: 0;
        }
        .css-19gyxg0-option {
          display: flex;
          align-items: center;
          border: none;
          padding: 0 0 20px;
          &:last-child {
            padding: 0;
          }
          @media ${MinDevice.mobileSm} {
            padding: 0 0 30px;
          }
          &:active,
          &:hover {
            background-color: transparent;
          }
          .food-option {
            width: 40px;
            height: 40px;
            margin-right: 20px;
            border-radius: 10px;
            padding: 2px;
            border: 1px solid ${Theme.color.borderColor};
            @media ${MinDevice.mobileSm} {
              margin-right: 30px;
              width: 60px;
              height: 60px;
              padding: 13px;
            }
            svg {
              width: 34px;
              height: 34px;
            }
          }
          p {
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            @media ${MinDevice.mobileSm} {
              font-size: 20px;
              line-height: 26px;
              font-weight: 600;
            }
          }
        }

        &:active {
          background-color: transparent;
        }
      }
    }
    .food-price {
      position: relative;
      margin-right: 10px;
      @media ${MinDevice.mobileSm} {
        margin-right: 20px;
      }
      &::after {
        content: "";
        background-image: url("/icons/arrow-gray.svg");
        background-repeat: no-repeat;
        width: 35px;
        height: 12px;
        position: absolute;
        right: -5.5px;
        top: 21.5px;
        z-index: -1;
        @media ${MinDevice.mobileSm} {
          top: 24.5px;
        }
      }
      select {
        font-size: 16px;
        line-height: 22px;
        border: 1px solid ${Theme.color.textColor};
        border-radius: 10px;
        width: 200px;
        padding: 13px 20px;
        background-color: transparent;
        appearance: none;
        @media ${MinDevice.mobileSm} {
          width: 242px;
          font-size: 20px;
          line-height: 27px;
          padding: 15px 20px;
        }
        option {
          background-color: #f6faf636;
        }
        &:focus {
          border: 1px solid #525252 !important;
        }
      }
    }
    .common-btn {
      padding: 14px 0;
      color: ${Theme.color.textColor};
      border: 1px solid ${Theme.color.textColor};
      min-width: 145px;
      @media ${MinDevice.mobileSm} {
        min-width: 203px;
        padding: 19px 0;
      }
    }
    .gray-arrow {
      padding: 12px 0;
      min-width: 60px;
      @media ${MinDevice.mobileSm} {
        padding: 17px 0;
        min-width: 60px;
      }
    }
  }
  .categories-box {
    border: 1px solid #525252;
    box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
    border-radius: 10px;
    margin-bottom: 20px;
    /* display: flex; */
    /* &:last-child {
      margin-bottom: 0;
    } */
    @media ${MinDevice.mobileSm} {
      margin-bottom: 40px;
      border-radius: 20px;
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
        padding: 10px 27px;
        margin-right: 7px;
        @media ${MinDevice.mobileSm} {
          margin-right: 20px;
          font-size: 18px;
          line-height: 24px;
          padding: 7px 27px;
        }
        svg {
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
      }
      .trans-btn {
        background-color: #058a07;
        color: ${Theme.color.white};
        padding: 8px 14px;
        border: none;
        @media ${MinDevice.mobileSm} {
          padding: 8px 20px;
        }
      }
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
      .like-icon {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 7px;
        padding: 12px;
        display: none;
        .btn {
          border: none;
          padding: 0;
        }
        @media ${MinDevice.mobileSm} {
          display: block;
          cursor: pointer;
        }
      }
    }
    .categories-img {
      padding: 20px 0 20px 9px;
      @media ${MinDevice.mobileSm} {
        padding: 0;
      }

      figure {
        width: 136px;
        height: 113px;
        @media ${MinDevice.mobileSm} {
          width: 210px;
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          @media ${MinDevice.mobileSm} {
            border-radius: 20px;
          }
        }
      }
    }
    .restro-detail {
      padding: 10px;
      width: 100%;
      padding: 20px 9px;

      @media ${MinDevice.mobileSm} {
        padding: 29px 9px 28px 9px;
      }
      @media ${MinDevice.mobileMd} {
        padding: 29px 30px 28px 50px;
        display: block;
      }
      @media ${MinDevice.mobileLg} {
        padding: 10px;
      }
      .restro-like {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
          margin-bottom: 4px;
          line-height: 24px;
          @media ${MinDevice.mobileSm} {
            margin-bottom: 0;
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
        margin-bottom: 14px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 25px;
        }
        i {
          svg {
            width: 12px;
            height: 18px;
            margin-right: 10px;
            margin-top: 5px;
            @media ${MinDevice.mobileSm} {
              margin-top: 0;
            }
          }
        }

        p {
          font-size: 14px;
          line-height: 20px;
          width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          @media ${MinDevice.mobileXs} {
            width: auto;
            overflow: auto;
          }
          @media ${MinDevice.mobileSm} {
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .restro-review {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        @media ${MinDevice.mobileSm} {
          margin-bottom: 30px;
        }
        span {
          svg {
            width: 17px;
            margin-right: 3px;
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
    }
    .mobile-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 9px 20px;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
      .restro-btn {
        display: flex;
      }
      .like-icon {
        border: 1px solid ${Theme.color.textColor};
        border-radius: 7px;
        padding: 6px 5px;
        display: block;
        .btn {
          border: none;
          padding: 0;
        }

        @media ${MinDevice.mobileSm} {
          display: none;
          cursor: pointer;
        }
      }
    }
  }
`;

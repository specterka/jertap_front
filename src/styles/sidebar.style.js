import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const HeaderDetail = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 12px 10px 7px;
  background-color: ${Theme.color.white};
  @media ${MinDevice.mobileSm} {
    padding: 21px 30px;
  }
  .heaser-detail {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row-reverse;
    width: 100%;
    @media ${MinDevice.mobileSm} {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }
  .profile-detail {
    display: flex;
    align-items: center;
    position: relative;

    .notification-menu {
      .nav-link {
        &::after {
          display: none;
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .dropdown-menu {
        width: 380px;
        /* width: 280px; */
        border: none;
        box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
        padding-bottom: 0px;
        /* @media ${MinDevice.mobileSm} {
        } */
        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #6e768e33;
          padding: 11px 20px 18px;
          background-color: transparent !important;
          &:hover {
            background-color: transparent;
          }

          h6 {
            font-size: 24px;
            line-height: 20px;
            font-weight: 600;
            margin-bottom: 0;
          }
          .common-btn {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            margin-bottom: 0;
            color: ${Theme.color.bgTheme};
            background-color: #cfdbec;
            text-decoration: none;
            width: unset;
          }
          .nt-detail {
            margin-left: 13px;
            p {
              margin-bottom: 5px;
            }
            h4 {
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              color: #333333;
              margin-bottom: 0;
              word-wrap: break-word;
              word-break: break-all;
              white-space: normal;
            }
          }
        }

        .common-btn {
          display: block;
          width: 100%;
        }
        .btn-view-more {
          padding: 20px;
        }
      }
      .noti-drop-block {
        .notification-menu-inner {
          justify-content: flex-start;
          position: relative;
          .icon-noti {
            position: absolute;
            left: auto;
          }
          .nt-detail {
            padding-left: 55px;
            width: 100%;
            margin: 0px;
          }
          .nt-detail-text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3 {
              font-weight: 600;
              color: #000000;
              font-size: 16px;
              margin: 0px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 90%;
            }
            button {
              padding: 0px;
              border: none;
              background: transparent;
            }
          }
        }
      }
    }

    span {
      background-color: ${Theme.color.bgTheme};
      position: absolute;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: white;
      padding: 5px;
      width: 15px;
      height: 15px;
      top: -7px;
      left: 16px;
    }
    .profile-img {
      .nav-link {
        display: flex;
        margin-left: 15px;
        @media ${MinDevice.mobileSm} {
          margin-left: 30px;
        }
        &::after {
          display: none;
        }

        figure {
          width: 38px;
          height: 38px;
          margin-right: 10px;
          margin-bottom: 0;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        p {
          display: none;
          @media ${MinDevice.mobileSm} {
            display: block;
            margin-bottom: 0;
            line-height: 16px;
          }
        }
        h6 {
          display: none;
          @media ${MinDevice.mobileSm} {
            display: block;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            margin-bottom: 0;
            color: ${Theme.color.bgTheme};
          }
        }
      }
      .dropdown-menu {
        padding: 11px 0 15px;
        border: none;
        box-shadow: 0px 4px 4px 0px ${Theme.color.boxColor};
        .dropdown-item {
          font-size: 14px;
          line-height: 14px;
          font-weight: 400;
          color: ${Theme.color.textColor};
          display: flex;
          margin-bottom: 20px;
          &:hover,
          &:focus {
            /* p {
              color: ${Theme.color.bgTheme};
            } */
            svg {
              path {
                stroke: ${Theme.color.bgTheme};
              }
            }
          }
          &:active {
            background-color: transparent;
          }
          &:last-child {
            margin-bottom: 0;
          }
          figure {
            margin: 0;
          }
          p {
            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
            color: #6e768e;
            &:last-child {
              margin-bottom: 0;
            }
          }
          svg {
            width: 35px;
            height: auto;
            margin-right: 17px;
            path {
              stroke: ${Theme.color.textColor};
            }
          }
        }
        .active {
          background-color: ${Theme.color.bgTheme};
          p{
            color:${Theme.color.white};
          }
        }
      }
    }
    .language-option{
      .dropdown-menu{
        padding:0;
        .dropdown-item{
          margin-bottom:0;
          padding: 12px;
        }
      }
    }
  }
  .main-logo {
    display: block;
    @media ${MinDevice.mobileSm} {
      display: none;
    }
  }
`;
export const SideBarDetail = styled.div`
  max-width: unset;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: auto;
  padding: 13px 0 0;
  background-color: ${Theme.color.white};
  z-index: 99;
  @media ${MinDevice.mobileSm} {
    padding: 30px 0 0;
    max-width: 250px;
  }
  &.side-close {
    width: 0;
    @media ${MinDevice.mobileSm} {
      width: 50px;
    }
    .logo-detail {
      padding: 0 9px 0;
      margin-bottom: 10px;
    }
    .sidebar-menu {
      ul {
        li {
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }
      }
    }

    .toggle-btn {
      display: block;
      @media ${MinDevice.mobileSm} {
        display: none;
      }
    }
    .logo-icon {
      display: none;
    }
  }
  &.side-open {
    .logo-icon {
      display: none;
      @media ${MinDevice.mobileSm} {
        display: block;
        margin-left: -35px;
      }
    }
    .small-logo {
      display: none;
      @media ${MinDevice.mobileSm} {
        display: block;
      }
    }
  }
  .logo-detail {
    margin-bottom: 0;
    padding: 0 20px 0;
    display: flex;
    align-items: center;
    @media ${MinDevice.mobileSm} {
      margin-bottom: 60px;
    }
  }
  .toggle-btn {
    margin-left: auto;
    svg {
      width: 30px;
      height: 30px;
    }
    @media ${MinDevice.mobileSm} {
      display: none;
    }
  }
  .sidebar-menu {
    h6 {
      font-size: 12px;
      line-height: 20px;
      font-weight: 700;
      color: #525252;
      margin-bottom: 15px;
      padding-left: 20px;
      @media ${MinDevice.mobileSm} {
        margin-bottom: 30px;
      }
    }
    ul {
      padding: 0;

      li {
        list-style: none;
        padding: 15px 20px;
        /* border-bottom: 0.5px solid #dcdcdc; */
        border-bottom: 1px solid rgba(82, 82, 82, 0.2);
        display: flex;
        &:last-child {
          border: none;
        }
        svg {
          width: 18px;
          height: 18px;
          path {
            fill: ${Theme.color.textColor};
          }
        }

        .accordion {
          --bs-accordion-border-width: none !important;
          border-bottom-left-radius: unset !important;
          padding-left: 7px;

          .accordion-item {
            .accordion-header {
              .accordion-button {
                font-size: 16px;
                line-height: 18px;
                font-weight: 400;
                color: ${Theme.color.textColor};
                border-bottom-left-radius: unset !important;
                padding: 0;
                /* @media ${MinDevice.mobileSm} {
                    font-size: 18px;
                    line-height: 20px;
                  } */
                &:focus,
                &:hover {
                  box-shadow: none;
                  color: ${Theme.color.bgTheme};
                }
                &::after {
                  margin-left: 95px;
                  position: relative;
                  width: 15px;
                  height: 15px;
                  background-size: contain;
                }
                &:not(.collapsed) {
                  background-color: transparent !important;
                }
              }
            }
            .accordion-collapse {
              margin-top: 10px;
              .accordion-body {
                font-size: 14px;
                line-height: 24px;
                font-weight: 400;
                color: ${Theme.color.textColor};
                padding: 0;
                @media ${MinDevice.mobileSm} {
                  font-size: 16px;
                  line-height: 30px;
                }
              }
            }
          }
        }
        a {
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
          margin-left: 6px;
          color: #525252;
          text-decoration: none;

          select {
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            border: none;
            padding: 0 75px 0 0px;
            color: #525252;

            &:focus {
              box-shadow: none;
            }
          }
        }
        &:hover,
        &.active {
          cursor: pointer;
          svg {
            /* fill: ${Theme.color.bgTheme}; */
            path {
              fill: ${Theme.color.bgTheme};
            }
          }
          a {
            color: ${Theme.color.bgTheme};
          }
          .blue-icon {
            path {
              stroke: ${Theme.color.bgTheme} !important;
            }
          }
        }
      }
    }
  }

  .blue-icon {
    g {
      path {
        fill: transparent !important;
      }
    }
  }
`;

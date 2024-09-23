import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const HeaderDetail = styled.div`
  padding: 15px 0;
  @media ${MinDevice.mobileXs} {
    padding: 22px 0;
  }
  @media ${MinDevice.mobileSm} {
    padding: 30px 47px 24px;
  }
  @media ${MinDevice.mobileMd} {
    padding: 22px 136px;
  }
  @media (max-width: 1500px) {
    padding: 22px 15px;
  }
  /* @media screen and (min-device-width: 1300px) and (max-device-width: 1500px) {
    .jt-add-list {
      margin-bottom: 17px !important;
    }
  } */
  .header-index {
    display: block;
    /* @media ${MinDevice.mobileXxl} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    } */
    @media (min-width: 1300px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .jt-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      @media ${MinDevice.mobileSm} {
        justify-content: center;
        margin-bottom: 10px;
      }
      @media ${MinDevice.mobileXxl} {
        margin-bottom: 0;
      }
      svg {
        width: 130px;
        height: 40px;
        @media ${MinDevice.mobileSm} {
          width: 150px;
        }
      }
      button {
        display: block;
        background-color: ${Theme.color.bgTheme};
        border: none;
        padding: 4px 6px 6px 6px;
        height: 40px;
        @media ${MinDevice.mobileSm} {
          display: none;
        }
        svg {
          width: unset;
          height: unset;
        }
      }
    }
    .jt-restro-search {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 15px;
      @media (min-width: 1300px) {
        margin: 0;
      }

      @media ${MinDevice.mobileXxl} {
        margin: 0 66px;
        justify-content: flex-start;
      }
      .jt-location {
        display: flex;
        align-items: center;
        border: 1px solid ${Theme.color.textColor};
        border-radius: 10px;
        padding: 4px 9px;
        margin-right: 10px;
        width: 100px;
        &:last-child {
          margin-right: 0;
        }
        @media ${MinDevice.mobileXs} {
          width: unset;
        }
        @media ${MinDevice.mobileSm} {
          padding: 9px 18px;
        }
        svg {
          width: 20px;
          margin-right: 5px;
        }
        input {
          box-shadow: none;
          border: none;
          padding: 0;
        }
      }
      .jt-search {
        display: flex;
        padding: 0;
        margin-right: 0;
        width: 225px;
        @media ${MinDevice.mobileXs} {
          width: unset;
        }

        input {
          padding: 0 18px;
        }
        .search-logo {
          width: 48px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 7px 7px 0;
          border: 1px solid ${Theme.color.bgTheme};
          background-color: ${Theme.color.bgTheme};
          cursor: pointer;
          @media ${MinDevice.mobileSm} {
            height: 48px;
          }
          svg {
            width: 30px;
            margin-right: 0;
          }
        }
      }
      .jt-listing {
        padding: 12px;
        svg {
          margin-right: 10px;
        }
      }
    }
    .jt-add-list {
      display: none;
      @media ${MinDevice.mobileSm} {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: center;
      }
      @media ${MinDevice.mobileXxl} {
        justify-content: flex-start;
      }
      a {
        .jt-location {
          display: flex;
          align-items: center;
          border: 1px solid ${Theme.color.bgTheme};
          border-radius: 10px;
          padding: 10px;
          margin-right: 20px;
          cursor: pointer;

          h6 {
            color: ${Theme.color.bgTheme};
          }
          svg {
            margin-right: 10px;
          }
        }
      }
    }
    .jt-log-in {
      margin-left: 45px;
      a {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        text-decoration: none;
        color: ${Theme.color.bgTheme};
      }
      .common-btn {
        color: ${Theme.color.white};
        margin-left: 20px;
        padding: 12px 24px;
        svg {
          margin-right: 10px;
          height: 23px;
        }
      }
    }
  }
`;

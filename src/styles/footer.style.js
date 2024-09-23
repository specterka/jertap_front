import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style";

export const Subscride = styled.div`
  background: linear-gradient(56deg, #1b56a7 3.5%, #2a99f8 86.5%);
  height: 295px;
  position: relative;
  @media ${MinDevice.mobileSm} {
    height: 250px;
  }
  .bg-img {
    background-image: url("/images/mobile-footer-img.png");
    -webkit-background-image: url("/images/mobile-footer-img.png");
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    @media ${MinDevice.mobileSm} {
      background-image: url("/images/footer-img.png");
      background-size: cover;
    }
  }
  .subscride-detail {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;
    margin-top: 45px;
    margin-bottom: 0;
    @media ${MinDevice.mobileMd} {
      margin-bottom: 0;
      justify-content: flex-start;
      margin-top: 95px;
    }
    @media ${MinDevice.mobileLg} {
    }
    svg {
      width: 30px;
      margin-right: 20px;
      @media ${MinDevice.mobileSm} {
        margin-right: 30px;
        width: 50px;
      }
    }
    h3 {
      font-size: 20px;
      line-height: 27px;
      font-weight: 700;
      color: ${Theme.color.white};
      @media ${MinDevice.mobileSm} {
        font-size: 40px;
        line-height: 55px;
      }
      @media ${MinDevice.mobileMd} {
        font-size: 30px;
        line-height: 40px;
      }
      @media ${MinDevice.mobileLg} {
        font-size: 40px;
        line-height: 55px;
      }
    }
  }
  .jt-send-email {
    margin: 45px auto 0;
    @media ${MinDevice.mobileMd} {
      margin: 95px auto 0;
    }
    input {
      padding: 10px 23px;
      @media ${MinDevice.mobileMd} {
        padding: 15px 23px;
      }
    }
  }
`;

export const FooterDetail = styled.div`
  background-color: #333333;
  padding: 35px 0;
  padding: 100px 7px;
  position: relative;
  @media ${MinDevice.mobileMd} {
    padding: 64px 0;
  }
  &::before {
    content: "";
    background-image: url("/icons/map-icon.svg");
    background-repeat: no-repeat;
    width: 225px;
    height: 185px;
    position: absolute;
    top: -50px;
    right: 0;
    @media ${MinDevice.mobileMd} {
      top: 0;
      right: 0;
    }
  }
  &::after {
    content: "";
    background-image: url("/icons/map-icon2.svg");
    background-repeat: no-repeat;
    width: 303px;
    height: 160px;
    position: absolute;
    top: 84%;
    @media ${MinDevice.mobileMd} {
      top: 68%;
    }
  }
  .footer-detail {
    margin-bottom: 25px;

    @media ${MinDevice.mobileMd} {
      margin-bottom: 0;
    }
    svg {
      width: 175px;
      margin-bottom: 20px;
      @media ${MinDevice.mobileMd} {
        width: 212px;
        margin-bottom: 47px;
      }
    }
    h6 {
      font-family: "Mulish";
      line-height: 30px;
      font-weight: 400;
      color: ${Theme.color.white};
      letter-spacing: 0.5px;
    }
  }
  h6 {
    font-size: 16px;
    line-height: 30px;
    @media ${MinDevice.mobileMd} {
      font-size: 18px;
    }
  }
  h5 {
    color: white;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
    position: relative;
    &::after {
      content: "";
      background-color: #2a9af9;
      width: 31px;
      height: 2px;
      position: absolute;
      bottom: -7px;
      left: 0;
    }
  }
  .footer-menu-bar {
    margin-top: 20px;
    @media ${MinDevice.mobileSm} {
      margin-top: 120px;
    }

    ul {
      padding-left: 0;
      li {
        list-style: none;
        a {
          font-family: "Mulish";
          font-size: 20px;
          line-height: 28px;
          font-weight: 400;
          color: ${Theme.color.white};
          letter-spacing: 0.5px;
        }
      }
    }
  }
  .email-box {
    max-width: 356px;
    width: 100%;
    margin-top: 20px;
    @media ${MinDevice.mobileMd} {
      margin-top: 120px;
    }
    .e-mail-icon {
      padding: 0 12px 0 0;
      color: ${Theme.color.white};
      align-items: center;
      margin-bottom: 20px;
      font-family: "Mulish";
      input {
        font-size: 14px;
        line-height: 22px;
        font-weight: 300;
        color: ${Theme.color.textColor};
        border: none;
        padding: 0 10px;
      }
      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
      .common-btn {
        font-size: 14px;
        width: 90px;
        margin-left: auto;
        display: block;
        padding: 6px;

        color: ${Theme.color.textColor};
        @media ${MinDevice.mobileMd} {
          font-size: 16px;
          width: 115px;
          padding: 10px;
        }
      }
    }
  }
  .social-contect {
    margin: 20px 0;
    h5 {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: white;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
    }
    .social-icon {
      display: flex;
      align-items: center;
      .twitter-icon {
        width: 18px;
      }
      svg {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const FooterEnd = styled.div`
  .jt-copy-right {
    background-color: ${Theme.color.black};
    padding: 14px 0;
    width: 100%;
    @media ${MinDevice.mobileSm} {
      padding: 26px 0;
    }
    h4 {
      font-family: "Mulish";
      font-size: 16px;
      line-height: 27px;
      text-align: center;
      color: #f3f3fa;
      font-weight: 500;
      margin-bottom: 0;
      @media ${MinDevice.mobileSm} {
        font-size: 20px;
      }
    }
  }
`;

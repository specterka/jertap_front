import styled from "styled-components";
import Theme from "./theme.style";
import { MinDevice } from "./resopnsive.style";

export const BussenessDetail = styled.div`
  .jt-tital {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
    h1 {
      margin-bottom: 10px;
    }
  }
  .switch-block-dashboard {
    display: flex;
    align-items: center;
    .switch-block-dashboard-inner {
      padding: 6px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      background-color: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      button {
        padding: 8px 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 16px;
        color: #0f4da2;
        border: none;
        box-shadow: none;
        background: transparent;
        &.active {
          background-color: #0f4da2;
          color: #fff;
        }
      }
    }
  }
  .jt-count {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    background-color: ${Theme.color.white};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 10px;
    @media ${MinDevice.mobileSm} {
      padding: 20px;
    }
    span {
      background-color: rgba(15, 77, 162, 0.1);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      padding: 0;
      @media ${MinDevice.mobileSm} {
        height: 90px;
        width: 90px;
        padding: 15px;
      }
      svg {
        height: 60px;
        width: auto;
      }
    }
    .count-number {
      margin-left: 30px;
      p {
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 10px;

        @media ${MinDevice.mobileSm} {
          font-size: 20px;
          line-height: 20px;
        }
      }
      h3 {
        font-size: 24px;
        line-height: 50px;
        font-weight: 700;
        margin-bottom: 0;
        @media ${MinDevice.mobileSm} {
          font-size: 30px;
        }
      }
    }
    .common-btn {
      white-space: nowrap;
      text-decoration: none;
      padding: 7px 12px;
      @media ${MinDevice.mobileSm} {
        padding: 9px 32px;
      }
      @media ${MinDevice.mobileMd} {
        padding: 9px 22px;
      }
    }
  }
  .jt-graf {
    box-shadow: 0px 4px 4px 0px #0000000d;
    background-color: ${Theme.color.white};
    border-radius: 10px;
    padding: 30px 20px;
    overflow: hidden;
    h4 {
      font-size: 20px;
      line-height: 22px;
      font-weight: 700;
      margin-bottom: 40px;
      @media ${MinDevice.mobileSm} {
        font-size: 24px;
        line-height: 22px;
      }
    }
    .jt-graf-main {
      width: 100%;
      overflow-x: auto;
      height: auto;
      @media ${MinDevice.mobileSm} {
        width: 100%;
      }
      .recharts-surface {
        width: unset !important;
      }
      .recharts-wrapper {
        width: 100% !important;
        height: 100% !important;

        .recharts-legend-wrapper {
          top: 0 !important;
          .recharts-default-legend {
            width: 1300px !important;
            text-align: right !important;
          }
        }
      }
      .recharts-cartesian-grid-vertical {
        stroke: #0f4da2;
      }
    }
  }
`;

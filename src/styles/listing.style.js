import styled from "styled-components";
import Theme from "../styles/theme.style";
import { MinDevice } from "../styles/resopnsive.style.tsx";

export const ListingDetail = styled.div`
  .jt-table {
    background-color: ${Theme.color.white};
    padding: 30px 20px;
    border-radius: 10px;
    h3 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
    .common-btn {
      white-space: nowrap;
    }
    .jt-location {
      display: flex;
      align-items: center;
      border: 1px solid ${Theme.color.borderColor};
      border-radius: 10px;
      padding: 4px 9px;
      height: 50px;
      @media ${MinDevice.mobileXs} {
        max-width: 500px;
        width: 100%;
      }
      @media ${MinDevice.mobileMd} {
        padding: 10px;
      }

      input {
        box-shadow: none;
        border: none;
        padding: 0;
        &::placeholder {
          color: #c3c3c3;
        }
      }
      .search-logo {
        width: 26px;
        height: auto;
        svg {
          margin-right: 5px;
        }
      }
    }
    table {
      margin-bottom: 20px;
      thead {
        tr {
          th {
            font-size: 18px;
            line-height: 20px;
            font-weight: 600;
            padding: 20px;
            white-space: nowrap;
            &:first-child {
              text-align: center;
              width: 67px;
            }
            &:last-child {
              text-align: center;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            font-family: "Mulish";
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
            color: ${Theme.color.textColor};
            padding: 20px 20px 0;
            white-space: nowrap;
            &:first-child {
              text-align: center;
            }
            &:last-child {
              padding: 14px;
              text-align: center;
            }
            span {
              background-color: ${Theme.color.bgTheme};
              padding: 6px 8px 11px;
              border-radius: 10px;
              margin-right: 13px;
            }
            small {
              background-color: #ff0707;
              padding: 6px 8px 11px;
              border-radius: 10px;
            }
            .common-btn {
              font-family: "Nunito";
              font-weight: 400;
              background-color: #169f4d;
              padding: 5px 28px;
            }
          }
        }
        .food-img {
          display: flex;
          align-items: center;
          figure {
            margin-right: 10px;
            &:last-child {
              margin-right: 0;
            }
            img {
              border-radius: 10px;
            }
          }
        }
      }
    }
    .jt-pagination {
      margin: 20px 0;

      ul {
        --bs-pagination-active-bg: unset;
        flex-wrap: wrap;
        justify-content: end;
        margin-bottom: 0;
        li {
          a {
            color: ${Theme.color.black};
            &:focus {
              box-shadow: none;
            }
          }
          span {
            color: ${Theme.color.black};
            &:active {
              border-color: unset;
            }
          }
        }
        .active {
          background-color: ${Theme.color.bgTheme};
          .page-link {
            color: ${Theme.color.white};
            border: none;
          }
        }
      }
    }
    .add-btn {
      text-align: center;
      .common-btn {
        font-weight: 400;
        text-align: center;
        padding: 15px 30px;
        display: inline-block;
      }
    }
  }
  .restro-time {
    padding: 0;
    .gray-line {
      border-bottom: 1px solid #e1dfdf;
      padding: 20px 10px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 20px;
      }
      h3 {
        margin-bottom: 0;
      }
    }
    .restro-table {
      padding: 20px 10px;
      @media ${MinDevice.mobileSm} {
        padding: 30px 20px;
      }
      table {
        thead {
          tr {
            th {
              &:first-child {
                text-align: left;
              }
              &:nth-child(2),
              &:nth-child(3) {
                text-align: center;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 8px 0;
              font-weight: 700;
              h6 {
                font-size: 16px;
                line-height: 22px;
                font-weight: 400;
                margin-top: 14px;
                margin-bottom: 0;
              }
              .common-btn {
                font-family: "Nunito";
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
                background-color: ${Theme.color.bgTheme};
                padding: 10px 15px;
                display: block;
                width: 100px;
                margin: 0 auto;
                margin: 4px 78px 0;
              }
              &:first-child {
                text-align: left;
                padding-left: 15px;
                padding-bottom: 0;
              }
              &:nth-child(2),
              &:nth-child(3) {
                text-align: center;
              }
              .time-out {
                width: 325px;
                margin: 0 87px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #e1dfdf;
                border-radius: 10px;
                padding: 12px;
                .form-control {
                  font-size: 16px;
                  line-height: 22px;
                  font-weight: 500;
                  padding: 0;
                  border: none;
                  box-shadow: none;
                }
                p {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;

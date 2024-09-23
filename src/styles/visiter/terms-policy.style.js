import styled from "styled-components";
import Theme from "../theme.style";
import { MinDevice } from "../resopnsive.style";

export const TermsDetail = styled.div`
  &.section-block {
    margin: 30px 0;
    @media ${MinDevice.mobileSm} {
      margin: 80px 0;
    }
  }
  .terms-service {
    border-bottom: 1px solid #0b0b28;
    padding: 20px 0;
    &:last-child {
      border-bottom: none;
    }
    @media ${MinDevice.mobileSm} {
      padding: 40px 0;
    }

    h5 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 25px;
      @media ${MinDevice.mobileSm} {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 30px;
      }
    }

    p {
      font-size: 16px;
      line-height: 26px;
      @media ${MinDevice.mobileSm} {
        font-size: 18px;
      }
    }
  }
`;

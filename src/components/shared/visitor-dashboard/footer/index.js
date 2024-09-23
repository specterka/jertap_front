import {
  EmailFooterIcon,
  FacebookFooterIcon,
  InstaFooterIcon,
  JerTapLogoFooter,
  PhoneFooterIcon,
  TwitterFooterIcon,
  YouTubeFooterIcon,
} from "@/assets/svgs";
import { PATH_AUTH, PATH_VISITOR } from "@/routes/paths";
import { FooterDetail, FooterEnd, Subscride } from "@/styles/footer.style";
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";

const LINKS = [
  { label: "Advertise", path: PATH_VISITOR.advertise },
  { label: "About Business", path: PATH_VISITOR.businessListing },
  {
    label: "Success Stories",
    path: `${PATH_VISITOR.businessListing}#success-stories`,
  },
  { label: "Review", path: PATH_VISITOR.businesses },
  { label: "Terms and Service", path: PATH_VISITOR.termsAndConditions },
  { label: "Privacy Policy", path: PATH_VISITOR.privacyAndPolicy },
];

const ABOUT = [
  { label: "Home", path: PATH_AUTH.root },
  { label: "About Us", path: PATH_VISITOR.businessListing },
  { label: "Contact Us", path: PATH_VISITOR.contactUs },
];

const Footer = () => {
  return (
    <>
      {/* <Subscride>
        <div className="bg-img">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="subscride-detail">
                  <svg
                    width="50"
                    height="38"
                    viewBox="0 0 50 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8095 18L4.7619 8V28H26.1905V32H4.7619C3.45238 32 2.33135 31.6083 1.39881 30.825C0.46627 30.0417 0 29.1 0 28V4C0 2.9 0.46627 1.95833 1.39881 1.175C2.33135 0.391667 3.45238 0 4.7619 0H42.8571C44.1667 0 45.2877 0.391667 46.2202 1.175C47.1528 1.95833 47.619 2.9 47.619 4V18H42.8571V8L23.8095 18ZM23.8095 14L42.8571 4H4.7619L23.8095 14ZM40.4762 38L37.1429 35.2L40.8929 32H30.9524V28H40.8929L37.0833 24.8L40.4762 22L50 30L40.4762 38ZM4.7619 8V30V18V18.15V4V8Z"
                      fill="white"
                    />
                  </svg>
                  <h3>Subscribe To Our Newsletter</h3>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 0 }} xl={{ span: 5, offset: 1 }}>
                <div className="jt-send-email">
                  <Form.Control type="email" placeholder="Enter Your Email" />
                  <Link className="common-btn" href={"javascript:void(0)"}>
                    Subscribe Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Subscride> */}
      <FooterDetail>
        <Container>
          <Row>
            <Col md={3}>
              <div className="footer-detail">
                <JerTapLogoFooter />
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </div>
            </Col>
            <Col xs={{ span: 6, offset: 0 }} md={{ span: 2, offset: 1 }}>
              <div className="footer-menu-bar">
                <h5>Links</h5>
                <ul>
                  {LINKS.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 6, offset: 0 }} md={{ span: 2, offset: 1 }}>
              <div className="footer-menu-bar">
                <h5>About</h5>
                <ul>
                  {ABOUT.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              lg={{ span: 2, offset: 1 }}
            >
              <div className="d-flex d-lg-block">
                <div className="email-box">
                  <h5>Contact Us</h5>
                  <div className="e-mail-icon">
                    <PhoneFooterIcon />
                    9192939495
                  </div>
                  <div className="e-mail-icon">
                    <EmailFooterIcon />
                    jertap@gmail.com
                  </div>
                </div>
                <div className="social-contect">
                  <h5>Follow Us</h5>
                  <div className="social-icon">
                    <TwitterFooterIcon className="twitter-icon" />
                    <FacebookFooterIcon />
                    <YouTubeFooterIcon />
                    <InstaFooterIcon />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterDetail>
      <FooterEnd>
        <div className="jt-copy-right">
          <h4>Copyright 2023 @ Jertap All right reserved</h4>
        </div>
      </FooterEnd>
    </>
  );
};

export default Footer;

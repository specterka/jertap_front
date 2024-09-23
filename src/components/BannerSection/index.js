import { React } from "react";
import { Container } from "react-bootstrap";
import { BannerDetail } from "@/styles/banner-section.style";

const defaultData = [
  {
    id: 1,
    title: "Terms Of Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/images/banner-img1.png",
    alt: "banner-img1",
    link: "#",
  },
];

const BannerSection = ({ DummyData = defaultData }) => {
  return (
    <BannerDetail>
      {DummyData.map((item) => (
        <div key={item.id} className="jt-banner-img jt-banner-img1">
          <figure>
            <img src={item.imageSrc} alt={item.alt} />
          </figure>
          <Container>
            <div className="jt-banner-tital">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Container>
        </div>
      ))}
    </BannerDetail>
  );
};

export default BannerSection;

"use client";

import { React, useRef, useState } from "react";
import {
  Container,
  Form,
  Button,
  Offcanvas,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import Link from "next/link";
import {
  AdvertiseIcon,
  FreeListingIcon,
  HumbergerIcon,
  LocationIcon,
  LoginUserIcon,
  SearchInputIcon,
  VisitorHeaderAppLogo,
  WhiteStarCategories,
  YellowRatingStarCategories,
} from "@/assets/svgs";
import { HeaderDetail } from "@/styles/header.style";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_VISITOR } from "@/routes/paths";
import { useAuth, useSettings, useToaster, useMetaData } from "@/hooks";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import ConfirmationDialog from "../../ConfirmationDialog";
import { API_ROUTER } from "@/services/apiRouter";
import Modal from "react-bootstrap/Modal";
import { generateArray } from "@/utils/helper";

const Header = () => {
  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // Hooks
  const { isHomePageNavigationOpen, onToggleHomePageSideNavigation } =
    useSettings();
  const [homeSerch, isFetching, homeSearchDetail] = useMetaData(
    API_ROUTER.HOME_RESTAURANT_SEARCH
  );

  const [citySerch, isFetchingCity, citySearchDetail] = useMetaData(
    API_ROUTER.ALL_CITY_SEARCH,
    {},
    true
  );

  const { isAuthenticated, logout } = useAuth();
  const { toaster } = useToaster();
  const { push } = useRouter();
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  // Handlers
  const onCityChange = async (e) => {
    const value = e.target.value;
    setSearchCity(value);
    try {
      await citySearchDetail({
        city: value,
      });
    } catch (error) {}
  };

  const handleClose = () => onToggleHomePageSideNavigation(false);
  const handleShow = () => onToggleHomePageSideNavigation(true);

  const onLogout = async () => {
    try {
      await logout();
      toaster(TOAST_ALERTS.LOGOUT_SUCCESS, TOAST_TYPES.SUCCESS);
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };
  const rating = homeSerch?.average_rating || 0;
  const yellowStarsCount = Math.max(0, Math.min(5, Math.floor(rating)));
  const whiteStarsCount = 5 - yellowStarsCount;

  const onConfirmSuccess = async () => {
    await onLogout();
    setIsSignOutModalOpen(false);
  };
  const handleSearch = async () => {
    // if (!city) {
    //   toaster(TOAST_ALERTS.SELECT_CITY_ERROR, TOAST_TYPES.ERROR);
    //   return;
    // }
    try {
      await homeSearchDetail({
        search: searchTerm,
        city: city,
      });
      setShowModel(true);
    } catch (error) {}
  };
  const handleCloseModel = () => {
    setShowModel(false);
  };

  const handleSelectCity = (selectCity) => {
    setCity(selectCity);
    setSearchCity(selectCity);
  };

  const renderModel = () => {
    return (
      <Modal
        show={showModel}
        onHide={handleCloseModel}
        className="search-restro-modal"
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>Available Businesses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-restro-box-main">
            {homeSerch && homeSerch.length > 0 ? (
              homeSerch.map((data, index) => {
                return (
                  <div key={index} className="search-header-data">
                    <Link href={PATH_VISITOR.businessDetail(data.id)}>
                      <div className="search-restro-box">
                        <figure>
                          {data.profile_image ? (
                            <img src={data.profile_image} alt="Profile Image" />
                          ) : (
                            <img
                              src="/images/restro-img1.png"
                              alt="Default Image"
                            />
                          )}
                        </figure>
                      </div>
                      <div className="restro-title">
                        <h6> - {data.name} -</h6>
                        <div className="restro-review">
                          {data?.average_rating ? (
                            <>
                              <span>
                                {generateArray(data?.average_rating)?.map(
                                  (_, i) => (
                                    <YellowRatingStarCategories key={i} />
                                  )
                                )}
                              </span>
                              <span>
                                {generateArray(5 - data?.average_rating)?.map(
                                  (_, i) => (
                                    <WhiteStarCategories key={i} />
                                  )
                                )}
                              </span>
                            </>
                          ) : (
                            generateArray(5).map((_, i) => (
                              <WhiteStarCategories key={i} />
                            ))
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>
                No restaurants or cafes are available that match your search
                criteria. Try adjusting the location, name, category, or food
                options for better results.
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  // Render Methods
  const renderActionButtons = () => (
    <>
      <Link href="/advertise" onClick={handleClose}>
        <div className="jt-location jt-listing">
          <AdvertiseIcon />
          <h6>Advertise</h6>
        </div>
      </Link>
      <Link href="/visitor-business" onClick={handleClose}>
        <div className="jt-location jt-listing">
          <FreeListingIcon />
          <h6>Free Listing</h6>
        </div>
      </Link>
      <div className="jt-log-in">
        {isAuthenticated ? (
          <Link
            className="common-btn"
            href={"javascript:void(0)"}
            onClick={() => setIsSignOutModalOpen(true)}
          >
            <LoginUserIcon />
            Log out
          </Link>
        ) : (
          <Link className="common-btn" href={PATH_AUTH.login}>
            <LoginUserIcon />
            Log in
          </Link>
        )}
      </div>
    </>
  );

  return (
    <HeaderDetail>
      <Container fluid>
        <div className="header-index">
          <div className="jt-logo">
            <div
              className="cursor-pointer-block"
              onClick={() => push(PATH_AUTH.root)}
            >
              <VisitorHeaderAppLogo />
            </div>
            <Button variant="primary" onClick={handleShow}>
              <HumbergerIcon />
            </Button>
          </div>
          <div className="jt-restro-search">
            <div className="jt-location">
              <LocationIcon />
              {/* <Dropdown>
                <Dropdown.Menu>
                  <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Search City"
                    onChange={(e) => onCityChange(e)}
                    value={searchCity}
                  />
                  {citySerch?.results?.length > 0 ? (
                    citySerch.results.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setCity(item.city)}
                      >
                        {item.city}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item disabled>No results found</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown> */}

              <FormControl
                ref={inputRef}
                placeholder="Search City"
                onChange={onCityChange}
                value={searchCity}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
              />
              {showDropdown && (
                <Dropdown.Menu ref={dropdownRef} show style={{ top: "100px" }}>
                  {citySerch?.results?.length > 0 ? (
                    citySerch.results.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onMouseDown={() => handleSelectCity(item.city)}
                      >
                        {item.city}
                      </Dropdown.Item>
                    ))
                  ) : searchCity?.length > 0 ? (
                    <Dropdown.Item disabled>No results found</Dropdown.Item>
                  ) : (
                    <Dropdown.Item disabled>Select Location</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              )}
            </div>
            <div className="jt-location jt-search">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Search Cafe and Restaurant"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
              <div className="search-logo" onClick={handleSearch}>
                <SearchInputIcon />
              </div>
            </div>
          </div>
          {renderModel()}
          <div className="jt-add-list m-0">{renderActionButtons()}</div>
          {isSignOutModalOpen && (
            <ConfirmationDialog
              isOpen={isSignOutModalOpen}
              modalTitle="Sign out"
              description="Are you sure you want to sign out?"
              onClose={() => setIsSignOutModalOpen(false)}
              onCancel={() => setIsSignOutModalOpen(false)}
              onConfirm={onConfirmSuccess}
            />
          )}
        </div>
      </Container>
      <Offcanvas show={isHomePageNavigationOpen} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="moblie-jt-add-list m-0">{renderActionButtons()}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </HeaderDetail>
  );
};

export default Header;

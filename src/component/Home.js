import React from "react";

import { NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login"; 

export default function Home() {
  return (
    <>
      <div className="tt-magic-cursor">
        <Signup />
        <Login/>
        <div className="topbar-header">
          <div className="top-bar style-2">
            <div className="company-logo">
              <NavLink to="/">
                <img src="assets/img/home2/icon/bottom_logo.png" alt />
              </NavLink>
            </div>
            <div className="top-bar-items">
              <ul className="menu-list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Reservation" className="drop-down">
                    Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Guide" className="drop-down">
                    Vehicle Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Extra" className="drop-down">
                    Price
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Cookie" className="drop-down">
                    Terms & Conditions
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/Contact" className="drop-down">
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="topbar-right">
              <div className="nav-right d-flex jsutify-content-end align-items-center">
                <button
                  type="button"
                  className="primary-btn6"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal01"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z"
                    />
                  </svg>
                  LOGIN / SIGN UP
                </button>
                <div className="sidebar-button mobile-menu-btn ">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-section2">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content">
                <h1>Start Your Journey 'Your Way'!</h1>
                <p>
                  Drive into Unforgettable Experiences with 'Your Way' Car Hire
                  - Your Companion for Reliable and Exciting Journeys Across the
                  Island
                </p>
                <div className="justify-content-center">
                  <form>
                    <div className="justify-content-center">
                      <div className="col">
                        <div className="form-inner">
                          <label for="pickup-location">Pick-up location</label>
                          <input
                            type="text"
                            id="pickup-location"
                            name="pickup-location"
                            style={{ border: "1px solid #979595" }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-inner">
                          <div className="formbuilder-date form-group field-date-1696006456045">
                            <label
                              for="date-1696006456045"
                              className="formbuilder-date-label"
                            >
                              Pick-up Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="date-1696006456045"
                              access="false"
                              id="date-1696006456045"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div data-v-1fd3bb87="" className="form-inner">
                          <div className="">
                            <label className="formester-label">
                              Pick-up Time
                            </label>
                            <p
                              style={{
                                color: "rgba(61, 61, 61, 0.7)",
                                fontFamily: "Roboto",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "10%",
                                margin: "0px",
                              }}
                            ></p>
                            <div className="bordered-div">
                              <input
                                id="Time88157478-3b95-4ec5-bb50-46bb38c05693"
                                type="time"
                                className="formester-input formester-input__shorttext"
                                min=""
                                max=""
                                placeholder="Enter a time"
                                name="Time"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                  Step: "300",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-inner">
                          <label for="pickup-location">Drop-Off location</label>
                          <input
                            type="text"
                            id="pickup-location"
                            name="pickup-location"
                            style={{ border: "1px solid #979595" }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-inner">
                          <div className="formbuilder-date form-group field-date-1696006456045">
                            <label
                              for="date-1696006456045"
                              className="formbuilder-date-label"
                            >
                              Drop-off date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="date-1696006456045"
                              access="false"
                              id="date-1696006456045"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div data-v-1fd3bb87="" className="form-inner">
                          <div className="">
                            <label className="formester-label">
                              Drop-off Time
                            </label>
                            <p
                              style={{
                                color: "rgba(61, 61, 61, 0.7)",
                                fontFamily: "Roboto",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "10%",
                                margin: "0px",
                              }}
                            ></p>
                            <div className="bordered-div">
                              <input
                                id="Time88157478-3b95-4ec5-bb50-46bb38c05693"
                                type="time"
                                className="formester-input formester-input__shorttext"
                                min=""
                                max=""
                                placeholder="Enter a time"
                                name="Time"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                  Step: "300",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col d-flex align-items-end">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                            >
                              <path d="M10.2746 9.04904C11.1219 7.89293 11.5013 6.45956 11.3371 5.0357C11.1729 3.61183 10.4771 2.30246 9.38898 1.36957C8.30083 0.436668 6.90056 -0.050966 5.46831 0.00422091C4.03607 0.0594078 2.67747 0.653346 1.66433 1.66721C0.651194 2.68107 0.0582276 4.04009 0.00406556 5.47238C-0.0500965 6.90466 0.43854 8.30458 1.37222 9.39207C2.30589 10.4795 3.61575 11.1744 5.03974 11.3376C6.46372 11.5008 7.89682 11.1203 9.05232 10.2722H9.05145C9.07769 10.3072 9.10569 10.3405 9.13719 10.3729L12.5058 13.7415C12.6699 13.9057 12.8924 13.9979 13.1245 13.998C13.3566 13.9981 13.5793 13.906 13.7435 13.7419C13.9076 13.5779 13.9999 13.3553 14 13.1232C14.0001 12.8911 13.908 12.6685 13.7439 12.5043L10.3753 9.13566C10.344 9.104 10.3104 9.07562 10.2746 9.04904ZM10.5004 5.68567C10.5004 6.31763 10.3759 6.9434 10.1341 7.52726C9.89223 8.11112 9.53776 8.64162 9.0909 9.08849C8.64403 9.53535 8.11352 9.88983 7.52967 10.1317C6.94581 10.3735 6.32003 10.498 5.68807 10.498C5.05611 10.498 4.43034 10.3735 3.84648 10.1317C3.26262 9.88983 2.73211 9.53535 2.28525 9.08849C1.83838 8.64162 1.48391 8.11112 1.24207 7.52726C1.00023 6.9434 0.875753 6.31763 0.875753 5.68567C0.875753 4.40936 1.38276 3.18533 2.28525 2.28284C3.18773 1.38036 4.41177 0.873346 5.68807 0.873346C6.96438 0.873346 8.18841 1.38036 9.0909 2.28284C9.99338 3.18533 10.5004 4.40936 10.5004 5.68567Z"></path>
                            </svg>
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-work-section style-3 mb-0">
          <div className="container">
            <div
              className="row mb-50 wow fadeInUp animated"
              data-wow-delay="200ms"
              style={{ visibility: "visible", animationDelay: "200ms" }}
            >
              <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
                <div className="section-title-2">
                  <h2>How Does It Work</h2>
                  <p>
                    Embark on a seamless car rental experience with Your Way!
                    Just select your location, pick a car, customize with
                    extras, and secure your booking upon arrival.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row wow fadeInUp"
              data-wow-delay="300ms"
              style={{ visibility: "visible", animationDelay: "300ms" }}
            >
              <div className="col-lg-12">
                <div className="work-process-group">
                  <div className="row justify-content-center g-xl-0 gy-5">
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="steps">
                          <span>01</span>
                        </div>
                        <div className="icon">
                          <img src="/assets/img/home2/icon/loaction.svg" alt />
                        </div>
                        <div className="content">
                          <h6>Choose your location</h6>
                          <p>
                            Kickstart your journey by selecting your pick-up
                            location from our widespread network across Cyprus.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="steps">
                          <span>02</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/recieve.svg" alt />
                        </div>
                        <div className="content">
                          <h6>Select your car</h6>
                          <p>
                            Explore and choose from our diverse fleet of
                            vehicles, picking the perfect companion that aligns
                            with your travel needs and preferences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="steps">
                          <span>03</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/body-01.svg" alt />
                        </div>
                        <div className="content">
                          <h6>Add Optional Extras</h6>
                          <p>
                            Customise your rental with options like child seats,
                            booster seats, additional insurance, etc., ensuring
                            a tailored travel experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="steps d-lg-none d-block">
                          <span>04</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/pay.svg" alt />
                        </div>
                        <div className="content">
                          <h6>Secure Your Booking</h6>
                          <p>
                            Confirm your choices online and simply pay on
                            arrival at our office. Get ready to explore Cyprus,
                            Your Way!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-area pt-10 pb-90 mb-10">
          <div className="container">
            <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="section-title1 text-center">
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
            </div>
            <div className="row mb-50 g-4 justify-content-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/affordable.svg" alt />
                    </div>
                    <h5>
                      <span>Competitive </span> Rates
                    </h5>
                  </div>
                  <p>Get the best value for your money.</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/av-car.svg" alt />
                    </div>
                    <h5>
                      <span>Quality </span> Cars
                    </h5>
                  </div>
                  <p>Drive in style and comfort.</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/warranty.svg" alt />
                    </div>
                    <h5>
                      <span>Full </span> Insurance
                    </h5>
                  </div>
                  <p>Enjoy no excess on rentals of 7 days or more.</p>
                </div>
              </div>
            </div>
            <div className="row mb-50 g-4 justify-content-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/hotline-icon.svg" alt />
                    </div>
                    <h5>
                      <span>24/7 </span> Road Assistance
                    </h5>
                  </div>
                  <p>We're here for you, round the clock.</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/guarantee.svg" alt />
                    </div>
                    <h5>
                      <span>Unlimited </span> Mileage
                    </h5>
                  </div>
                  <p>Roam freely without worries. Absolutely free.</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/happy-customar.svg" alt />
                    </div>
                    <h5>
                      <span>Additional </span> Driver
                    </h5>
                  </div>
                  <p>Share the wheel, at no extra cost.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dream-car-area pt-100 pb-100">
          <div className="container">
            <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12">
                <div className="section-title-2 text-center">
                  <h2>Our Trusted Brands</h2>
                </div>
              </div>
            </div>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-make"
                role="tabpanel"
                aria-labelledby="pills-make-tab"
              >
                <div className="row g-4 justify-content-center">
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/remove.png" alt />
                      </div>
                      <div className="content">
                        <h6>BMW Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img
                          src="assets/img/home2/icon/kia-removebg-preview.png"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h6>Kia Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img
                          src="assets/img/home2/icon/renault-removebg-preview.png"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h6>Renault Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="700ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img
                          src="assets/img/home2/icon/hundai-removebg-preview.png"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h6>Hundai Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="700ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img
                          src="assets/img/home2/icon/Ford-removebg-preview.png"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h6>Ford Cars</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row g-4 justify-content-center">
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/mercedes.svg" alt />
                      </div>
                      <div className="content">
                        <h6>Mercedes Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/audi.svg" alt />
                      </div>
                      <div className="content">
                        <h6>Audi Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/toyota.svg" alt />
                      </div>
                      <div className="content">
                        <h6>Toyota Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="700ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/nissan.svg" alt />
                      </div>
                      <div className="content">
                        <h6>Nissan Cars</h6>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
                    data-wow-delay="700ms"
                  >
                    <a className="car-category text-center">
                      <div className="icon">
                        <img src="assets/img/home2/icon/mazda.svg" alt />
                      </div>
                      <div className="content">
                        <h6>Mazda Cars</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-section five mb-100">
          <div className="container">
            <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
                <div className="section-title-2">
                  <h2>Our Fleet</h2>
                  <p>Explore in Comfort with Our Diverse Vehicle Range!</p>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="news-card style-2">
                  <div className="news-img">
                    <a>
                      <img src="assets/img/home1/01.png" alt />
                    </a>
                    <div className="date">
                      <a>Saloon Vehicles </a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                      <a>
                        Sleek and formal, known for comfort and spacious trunks
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="news-card style-2">
                  <div className="news-img">
                    <a>
                      <img src="assets/img/home1/02.png" alt />
                    </a>
                    <div className="date">
                      <a>Cabrios </a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                      <a>
                        Exhilarating open-air driving with retractable roofs
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="news-card style-2">
                  <div className="news-img">
                    <a>
                      <img src="assets/img/home1/03.png" alt />
                    </a>
                    <div className="date">
                      <a>People Carriers</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                      <a>Spacious and versatile, perfect for larger groups</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="news-card style-2">
                  <div className="news-img">
                    <a>
                      <img src="assets/img/home1/04.png" alt />
                    </a>
                    <div className="date">
                      <a>SUV/4WD</a>
                    </div>
                  </div>
                  <div className="content">
                    <h6>
                      <a>
                        Rugged and off-road capable, with ample interior space
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="style-2">
          <div className="container-fluid">
            <div className="footer-top">
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 justify-content-center g-lg-4 gy-5 ">
                <div className="col d-flex justify-content-lg-start">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h5>Our Goal</h5>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <a href="about.html">
                            To provide top-notch car rental services tailored to
                            your needs.
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-sm-center">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h5>Search & Explore</h5>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <a href="car-listing-left-sidebar.html">
                            Reservations
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="car-listing-left-sidebar.html">
                            Vehicle Guide
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-lg-center justify-content-sm-end">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h5>Info</h5>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <a href="single-brand-category.html">
                            Price
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="single-brand-category.html">
                            About Us
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-xl-center justify-content-lg-end justify-content-sm-center">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h5>External Links</h5>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <a href="car-listing-left-sidebar.html">
                            Privacy & Cookie Policy
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="car-listing-left-sidebar.html">
                            Terms & Conditions
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-center">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/img/bottom_logo.png" alt />
                </a>
              </div>
              <div className="contact-area">
                <div className="hotline-area">
                  <div className="icon">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M31.1603 24.6852L24.6834 20.3658C23.8615 19.8221 22.7597 20.001 22.152 20.7769L20.2654 23.2027C20.1481 23.3573 19.9789 23.4645 19.789 23.5045C19.599 23.5444 19.4011 23.5145 19.2314 23.4203L18.8725 23.2224C17.6828 22.574 16.2025 21.7667 13.22 18.7831C10.2375 15.7995 9.42859 14.3181 8.78012 13.1306L8.58334 12.7717C8.48781 12.6021 8.45678 12.4037 8.49597 12.213C8.53516 12.0223 8.64193 11.8522 8.79662 11.734L11.2208 9.84792C11.9964 9.2402 12.1756 8.13874 11.6324 7.31655L7.31309 0.83963C6.75648 0.00237835 5.63977 -0.24896 4.77809 0.269026L2.06967 1.89597C1.21867 2.39626 0.594346 3.20652 0.327557 4.15695C-0.647737 7.71055 0.0859667 13.8435 9.12038 22.879C16.3071 30.0651 21.6572 31.9976 25.3345 31.9976C26.1809 32.0013 27.0239 31.8912 27.8409 31.6703C28.7915 31.4038 29.6018 30.7794 30.1018 29.9281L31.7304 27.2214C32.2491 26.3595 31.9979 25.2421 31.1603 24.6852ZM30.8115 26.6742L29.1867 29.3826C28.8277 29.997 28.2449 30.4488 27.5603 30.6432C24.2797 31.5439 18.5483 30.7979 9.87489 22.1245C1.20149 13.4511 0.455538 7.72017 1.35622 4.4391C1.55097 3.75367 2.00324 3.17011 2.61841 2.81053L5.32682 1.1857C5.7007 0.960737 6.18538 1.06978 6.4269 1.4331L8.77324 4.95577L10.7426 7.90946C10.9784 8.26609 10.9009 8.74409 10.5645 9.00798L8.13978 10.8941C7.40188 11.4583 7.19117 12.4792 7.64547 13.2895L7.83801 13.6393C8.51953 14.8892 9.36684 16.4442 12.4603 19.5371C15.5537 22.63 17.1081 23.4773 18.3575 24.1588L18.7078 24.3518C19.518 24.8061 20.539 24.5954 21.1032 23.8575L22.9893 21.4328C23.2533 21.0966 23.7311 21.0191 24.0879 21.2547L30.5642 25.5741C30.9278 25.8154 31.0368 26.3004 30.8115 26.6742ZM18.1324 5.33496C23.1367 5.34053 27.1921 9.39599 27.1977 14.4003C27.1977 14.6948 27.4364 14.9335 27.7309 14.9335C28.0255 14.9335 28.2642 14.6948 28.2642 14.4003C28.258 8.8072 23.7255 4.27462 18.1324 4.2685C17.8378 4.2685 17.5991 4.50721 17.5991 4.80173C17.5991 5.09625 17.8378 5.33496 18.1324 5.33496Z" />
                      <path d="M18.1324 8.53424C21.3704 8.53805 23.9944 11.162 23.9982 14.4001C23.9982 14.5415 24.0544 14.6771 24.1544 14.7771C24.2544 14.8771 24.39 14.9333 24.5314 14.9333C24.6728 14.9333 24.8085 14.8771 24.9085 14.7771C25.0085 14.6771 25.0646 14.5415 25.0646 14.4001C25.0602 10.5733 21.9591 7.47215 18.1324 7.46777C17.8378 7.46777 17.5991 7.70649 17.5991 8.00101C17.5991 8.29553 17.8378 8.53424 18.1324 8.53424Z" />
                      <path d="M18.1324 11.7344C19.6041 11.7362 20.7968 12.9289 20.7986 14.4007C20.7986 14.5422 20.8548 14.6778 20.9548 14.7778C21.0548 14.8778 21.1905 14.934 21.3319 14.934C21.4733 14.934 21.6089 14.8778 21.7089 14.7778C21.8089 14.6778 21.8651 14.5422 21.8651 14.4007C21.8627 12.3402 20.1929 10.6703 18.1324 10.668C17.8378 10.668 17.5991 10.9067 17.5991 11.2012C17.5991 11.4957 17.8378 11.7344 18.1324 11.7344Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <span>To More Inquiry</span>
                    <h6>
                      <a href="tel:+990737621432">+357-22459945</a>
                    </h6>
                  </div>
                </div>
                <div className="hotline-area">
                  <div className="icon">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.6608 18.13C15.4654 18.1243 14.2777 17.9369 13.1387 17.5742C12.2446 17.2751 11.446 16.7441 10.8242 16.0355C10.2024 15.3269 9.77978 14.466 9.59946 13.5406C9.19786 11.6068 9.93012 9.56195 11.6069 7.92995C11.7871 7.75461 11.9742 7.58665 12.168 7.42649C13.0138 6.71831 14.0193 6.22662 15.0976 5.99386C16.1759 5.7611 17.2947 5.79426 18.3573 6.09049C19.3764 6.4159 20.2699 7.04873 20.915 7.90213C21.5601 8.75553 21.9253 9.78766 21.9605 10.8569C22.0387 12.1181 21.6276 13.3609 20.8128 14.3268C20.5045 14.715 20.0953 15.0108 19.6299 15.1816C19.1646 15.3525 18.6612 15.3918 18.1749 15.2953C17.9743 15.2536 17.7841 15.172 17.6158 15.0551C17.4474 14.9383 17.3044 14.7887 17.1952 14.6153C17.0972 14.4468 17.0342 14.2603 17.01 14.067C16.9858 13.8736 17.0009 13.6774 17.0544 13.49C17.5211 11.7268 17.9952 9.04729 18 9.02062C18.0122 8.95163 18.0378 8.88572 18.0755 8.82665C18.1132 8.76757 18.1621 8.7165 18.2195 8.67633C18.2769 8.63617 18.3416 8.6077 18.41 8.59256C18.4784 8.57742 18.5491 8.5759 18.6181 8.58809C18.6871 8.60027 18.753 8.62593 18.8121 8.66359C18.8712 8.70125 18.9222 8.75017 18.9624 8.80757C19.0026 8.86497 19.031 8.92972 19.0462 8.99812C19.0613 9.06652 19.0628 9.13723 19.0507 9.20622C19.0309 9.31769 18.5637 11.9566 18.0859 13.7625C18.069 13.812 18.0625 13.8645 18.0666 13.9167C18.0707 13.9689 18.0854 14.0197 18.1099 14.066C18.1836 14.1679 18.2949 14.2364 18.4192 14.2564C18.7169 14.3061 19.0226 14.2735 19.3032 14.1621C19.5838 14.0507 19.8286 13.8648 20.0112 13.6244C20.644 12.8674 20.961 11.8958 20.8965 10.9113C20.8711 10.0601 20.5829 9.23771 20.0714 8.55687C19.56 7.87603 18.8504 7.37014 18.04 7.10862C17.1472 6.86304 16.2081 6.83838 15.3036 7.03675C14.3992 7.23513 13.5566 7.65059 12.8485 8.24729C12.6773 8.38969 12.5104 8.53849 12.3504 8.69422C11.5216 9.50062 10.1973 11.1742 10.6437 13.3236C10.7911 14.0615 11.1287 14.7481 11.6231 15.3153C12.1175 15.8826 12.7515 16.3109 13.4624 16.5577C15.9637 17.3556 19.5584 17.4521 21.4517 15.0974C21.5414 14.9907 21.6693 14.9234 21.808 14.9098C21.9467 14.8962 22.0852 14.9375 22.1939 15.0248C22.3026 15.1121 22.3728 15.2384 22.3895 15.3768C22.4061 15.5151 22.368 15.6546 22.2832 15.7652C20.8827 17.507 18.7515 18.13 16.6608 18.13Z" />
                      <path d="M14.8353 15.3649C14.2714 15.3747 13.7214 15.1899 13.2779 14.8417C12.2545 14.0225 12.2262 12.599 12.5131 11.6299C12.6102 11.3073 12.7398 10.9953 12.9009 10.6993C13.301 9.89185 13.9409 9.22779 14.7329 8.79794C15.2132 8.54876 15.761 8.46069 16.2953 8.54674C16.8295 8.63279 17.322 8.8884 17.6998 9.27581C18.0847 9.69756 18.3746 10.197 18.5499 10.7403C18.594 10.8728 18.5844 11.0172 18.5232 11.1427C18.4621 11.2681 18.3541 11.3646 18.2226 11.4113C18.0911 11.4581 17.9465 11.4514 17.8198 11.3928C17.6932 11.3342 17.5946 11.2282 17.5451 11.0977C17.4187 10.6964 17.2085 10.3265 16.9286 10.0123C16.7085 9.78721 16.4209 9.6402 16.1095 9.59369C15.7981 9.54719 15.4801 9.60374 15.2038 9.75474C14.6098 10.0897 14.1325 10.5983 13.8358 11.2123C13.7112 11.4425 13.6106 11.6848 13.5355 11.9355C13.3281 12.6363 13.3739 13.5515 13.9457 14.0091C14.5707 14.5115 15.6257 14.2993 16.2193 13.7873C16.6614 13.389 17.0413 12.9266 17.3462 12.4155C17.3831 12.356 17.4314 12.3043 17.4884 12.2635C17.5453 12.2226 17.6097 12.1934 17.6779 12.1774C17.7461 12.1614 17.8168 12.159 17.886 12.1704C17.9551 12.1817 18.0213 12.2066 18.0809 12.2435C18.1404 12.2805 18.1921 12.3288 18.2329 12.3857C18.2738 12.4426 18.303 12.507 18.319 12.5753C18.335 12.6435 18.3374 12.7142 18.326 12.7833C18.3147 12.8524 18.2898 12.9187 18.2529 12.9782C17.8914 13.5802 17.4413 14.1245 16.9179 14.5926C16.3348 15.0847 15.5982 15.3578 14.8353 15.3649Z" />
                      <path d="M30.4005 32.0023H1.60049C1.17627 32.0019 0.769552 31.8332 0.469585 31.5332C0.169619 31.2332 0.000911967 30.8265 0.000488386 30.4023V10.669C0.000424993 10.5676 0.0292616 10.4683 0.0836186 10.3827C0.137976 10.2971 0.215601 10.2288 0.307397 10.1858C0.399192 10.1427 0.501355 10.1267 0.601912 10.1397C0.702468 10.1526 0.797252 10.1939 0.875155 10.2588L13.961 21.1346C14.535 21.6089 15.2564 21.8683 16.001 21.8683C16.7456 21.8683 17.467 21.6089 18.041 21.1346L31.1258 10.2583C31.2038 10.1934 31.2986 10.152 31.3992 10.1391C31.4998 10.1262 31.602 10.1422 31.6938 10.1853C31.7856 10.2284 31.8633 10.2968 31.9176 10.3825C31.9719 10.4682 32.0007 10.5675 32.0005 10.669V30.4023C32.0001 30.8265 31.8314 31.2332 31.5314 31.5332C31.2314 31.8332 30.8247 32.0019 30.4005 32.0023ZM1.06716 11.8055V30.4023C1.06716 30.6967 1.30609 30.9356 1.60049 30.9356H30.4005C30.5419 30.9356 30.6776 30.8794 30.7776 30.7794C30.8776 30.6794 30.9338 30.5438 30.9338 30.4023V11.8055L18.7216 21.9548C17.956 22.5875 16.994 22.9337 16.0009 22.9339C15.0079 22.934 14.0457 22.5882 13.28 21.9559L1.06716 11.8055Z" />
                      <path d="M0.534374 11.2024C0.42111 11.2026 0.310717 11.1668 0.219187 11.1C0.127657 11.0333 0.0597426 10.9392 0.0252829 10.8313C-0.00917678 10.7234 -0.00839247 10.6074 0.0275222 10.4999C0.063437 10.3925 0.132617 10.2993 0.22504 10.2339L5.02504 6.83119C5.14046 6.74936 5.28366 6.71673 5.42314 6.74049C5.56262 6.76424 5.68695 6.84243 5.76877 6.95785C5.8506 7.07327 5.88323 7.21648 5.85947 7.35595C5.83572 7.49543 5.75753 7.61976 5.64211 7.70159L0.842107 11.1043C0.752234 11.1682 0.644662 11.2025 0.534374 11.2024ZM31.4666 11.2024C31.3564 11.2025 31.2488 11.1682 31.1589 11.1043L26.3589 7.70159C26.2447 7.61935 26.1676 7.49531 26.1445 7.35649C26.1213 7.21768 26.154 7.07534 26.2353 6.9605C26.3167 6.84566 26.4401 6.76762 26.5788 6.7434C26.7174 6.71918 26.86 6.75073 26.9754 6.83119L31.7754 10.2339C31.8678 10.2993 31.9369 10.3924 31.9729 10.4997C32.0088 10.607 32.0097 10.723 31.9754 10.8308C31.941 10.9386 31.8733 11.0328 31.7819 11.0996C31.6906 11.1664 31.5798 11.2024 31.4666 11.2024ZM20.9285 3.73572C20.8181 3.73582 20.7103 3.70152 20.6202 3.63759L18.0709 1.82959C17.4975 1.34491 16.7721 1.07691 16.0213 1.07233C15.2705 1.06775 14.5419 1.32688 13.9626 1.80452L11.3813 3.63759C11.2659 3.71941 11.1227 3.75204 10.9832 3.72828C10.8437 3.70453 10.7194 3.62634 10.6376 3.51092C10.5557 3.3955 10.5231 3.2523 10.5469 3.11282C10.5706 2.97334 10.6488 2.84901 10.7642 2.76719L13.3136 0.959185C14.0773 0.33469 15.0346 -0.00443301 16.0212 4.37621e-05C17.0077 0.00452053 17.9619 0.352318 18.72 0.983718L21.2373 2.76719C21.3297 2.83266 21.3989 2.92585 21.4348 3.03327C21.4707 3.14069 21.4715 3.25675 21.4371 3.36465C21.4026 3.47254 21.3347 3.56667 21.2432 3.63338C21.1516 3.7001 21.0412 3.73594 20.928 3.73572H20.9285ZM0.880507 31.7144C0.770687 31.7146 0.663477 31.6809 0.573522 31.6179C0.483567 31.5549 0.415252 31.4657 0.377909 31.3624C0.340566 31.2591 0.336016 31.1468 0.364879 31.0409C0.393742 30.9349 0.454612 30.8405 0.539174 30.7704L12.7098 20.6584C12.7637 20.6136 12.8259 20.5799 12.8928 20.5592C12.9598 20.5385 13.0301 20.5311 13.0999 20.5376C13.1696 20.5441 13.2374 20.5642 13.2994 20.5969C13.3614 20.6295 13.4163 20.6741 13.461 20.728C13.5058 20.7819 13.5395 20.8441 13.5602 20.911C13.5809 20.9779 13.5883 21.0482 13.5818 21.118C13.5754 21.1878 13.5552 21.2556 13.5226 21.3175C13.4899 21.3795 13.4453 21.4344 13.3914 21.4792L1.22077 31.5912C1.12524 31.6708 1.00485 31.7144 0.880507 31.7144ZM31.12 31.7144C30.9956 31.7145 30.8752 31.6709 30.7797 31.5912L18.609 21.4792C18.5538 21.4349 18.5079 21.38 18.474 21.3178C18.4402 21.2556 18.4191 21.1872 18.4119 21.1167C18.4048 21.0463 18.4117 20.9751 18.4324 20.9073C18.4531 20.8396 18.4871 20.7766 18.5323 20.7221C18.5776 20.6676 18.6333 20.6227 18.6961 20.59C18.7589 20.5573 18.8276 20.5374 18.8982 20.5315C18.9688 20.5256 19.0399 20.5338 19.1073 20.5557C19.1746 20.5776 19.237 20.6127 19.2906 20.6589L31.4613 30.7709C31.5459 30.841 31.6067 30.9355 31.6356 31.0414C31.6645 31.1474 31.6599 31.2597 31.6226 31.3629C31.5852 31.4662 31.5169 31.5554 31.427 31.6184C31.337 31.6814 31.2298 31.7146 31.12 31.7144Z" />
                      <path d="M26.6672 15.1919C26.5258 15.1919 26.3901 15.1358 26.2901 15.0357C26.1901 14.9357 26.1339 14.8001 26.1339 14.6586V3.74021C26.1323 3.75088 26.1109 3.73595 26.0752 3.73595H5.92587C5.91421 3.73524 5.90252 3.73691 5.89152 3.74085C5.88052 3.7448 5.87043 3.75093 5.86187 3.75888L5.8672 14.6586C5.8672 14.8001 5.81101 14.9357 5.71099 15.0357C5.61097 15.1358 5.47532 15.1919 5.33387 15.1919C5.19242 15.1919 5.05677 15.1358 4.95675 15.0357C4.85673 14.9357 4.80054 14.8001 4.80054 14.6586V3.73595C4.80891 3.44547 4.93203 3.17014 5.14294 2.97023C5.35384 2.77032 5.63536 2.66211 5.92587 2.66928H26.0752C26.3657 2.66211 26.6472 2.77032 26.8581 2.97023C27.069 3.17014 27.1922 3.44547 27.2005 3.73595V14.6586C27.2005 14.8001 27.1443 14.9357 27.0443 15.0357C26.9443 15.1358 26.8087 15.1919 26.6672 15.1919Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <span>To Send Mail</span>
                    <h6>
                      <a href="mailto:info@yourway-carhire.com">
                        <span
                          className="__cf_email__"
                          data-cfemail="a8c1c6cec7e8cfc5c9c1c486cbc7c5"
                        >
                          info@yourway-carhire.com
                        </span>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </>
  );
}

// export default Home; 

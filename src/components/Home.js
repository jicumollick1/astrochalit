import React from "react";
import Report from "./Report";

import logo from "../assets/WEBP/astrochalit logo-svg.webp";
import logo2 from "../assets/WEBP/Transparent white 2-svg.webp";

import what from "../assets/WEBP/KUNDLI BG DESIGN-svg.webp";

import report1 from "../assets/WEBP/Group 22-svg.webp";
import report2 from "../assets/WEBP/Group 31-svg.webp";
import report3 from "../assets/WEBP/Group 34-svg.webp";
import report4 from "../assets/WEBP/Group 37-svg.webp";

import need1 from "../assets/WEBP/Asset 1astrochalit symbol 17 1-svg.webp";
import need2 from "../assets/WEBP/Asset 3astrochalit symbol 19 1-svg.webp";
import need3 from "../assets/WEBP/Asset 4astrochalit symbol 20-svg.webp";
import need4 from "../assets/WEBP/Asset 1astrochalit symbol 24 1-svg.webp";

import heroImg from "../assets/WEBP/Group 11-svg.webp";

import left1 from "../assets/WEBP/Asset 3astrochalit symbol 3 1-svg.webp";
import left2 from "../assets/WEBP/Asset 7astrochalit symbol 23 2-1-svg.webp";
import right1 from "../assets/WEBP/Asset 7astrochalit symbol 23 1-svg.webp";
import right2 from "../assets/WEBP/Asset 2astrochalit symbol 18 1-svg.webp";

import pricingBgTop from "../assets/WEBP/PRICING BG-svg.webp";
import pricingBgBottom from "../assets/WEBP/PRICING BG 2 REVERSE-svg.webp";
import NeedCard from "./NeedCard";

import {
  BsBehance,
  BsEnvelopeOpen,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import ExpectCard from "./ExpectCards";
import ExpectCards from "./ExpectCards";
import { Link } from "react-router-dom";
import GlobalModal from "./Modals/GlobalModal";

const Home = () => {
  return (
    <div>
      {console.log(window.instamojo)}
      {/* navbar  */}

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="img-fluid" alt=""></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* hero section  */}

      <div className="container">
        <div className="row">
          <h2 className="text-center my-5">
            Our Expert Astrologers will create your <br /> customized Kundali
          </h2>
          <p className=" mx-auto text-center">
            Our elegantly designed customized Kundali of 50+ pages provides a
            detailed life <br /> report in a very easy to understand and simple
            language.
          </p>
        </div>
      </div>

      <div className="container-fluid" style={{ position: "relative" }}>
        <img
          src={left1}
          className="img-fluid col-md-2 mx-auto d-none d-md-block "
          alt=""
          style={{ position: "absolute" }}
        ></img>
        <img
          src={left2}
          className="img-fluid col-md-2 mx-auto d-none d-md-block "
          alt=""
          style={{ position: "absolute", bottom: "0" }}
        ></img>

        <img
          src={right1}
          className="img-fluid col-md-2 mx-auto d-none d-md-block "
          alt=""
          style={{ position: "absolute", right: "0", top: "-20%" }}
        ></img>
        <img
          src={right2}
          className="img-fluid col-md-2 mx-auto d-none d-md-block "
          alt=""
          style={{ position: "absolute", bottom: "20%", right: "0" }}
        ></img>
        <div className="row">
          <img
            src={heroImg}
            className="img-fluid col-md-6 mx-auto p-5"
            alt=""
          ></img>
          <h2 className="text-center my-5">
            AstroChalit™ Pricing for the <br /> Vedic Reports
          </h2>
          <p className=" mx-auto text-center">
            The cost of a Vedic astrology report depends on the type of report,
            the length, the level <br /> of detail, and the expertise of the
            astrologer preparing the report. 
          </p>
          <h5 className="mt-5 text-center">
            We offer 4 types of pdf reports especially curated for you from our
            highly experienced astrologers:
          </h5>
        </div>
      </div>

      {/* Reports  */}

      <div className="container">
        <div>
          <img
            src={pricingBgTop}
            className="img-fluid d-block col-md-8 mx-auto"
            alt=""
          ></img>
          <Report
            img={report1}
            title="Brief Horoscope Report"
            description="This will be a condensed version of a full horoscope reading, providing only a summary of the key predictions for your zodiac sign. This 10 page report* will cover all the basic astrological details, panchanga details, planetary positions, horoscope charts like lagna chart, moon chart, navamsa chart, vimshottari dasha levels I & II. This will be a simple summary of your report. 
          "
            price="99"
            btnTitle="Download Brief Horoscope"
            btnBg="#E3B773"
            bgColor="#25262B"
            color="#fff"
          />
          {/* <Report
            img={report2}
            title="Basic Horoscope Report"
            description="This will be a condensed version of a full horoscope reading, providing only a summary of the key predictions for your zodiac sign. This 10 page report* will cover all the basic astrological details, panchanga details, planetary positions, horoscope charts like lagna chart, moon chart, navamsa chart, vimshottari dasha levels I & II. This will be a simple summary of your report. "
            price="149"
            btnTitle="Download Brief Horoscope"
            btnBg="#25262B"
            bgColor="#E3B773"
            color="#25262B"
          />

          <Report
            img={report3}
            title="Premium Horoscope Report"
            description="In addition to the details that are present in the basic horoscope report above, this 70 page report* will include the 17 divisional charts, composite friendship details, KP planetary details, KP house cusps & charts, (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Ascendant, Sarvashtak)vargas, char dasha, sadhe sati effects & remedies, lucky stone, Rudraksha suggestion, Numerology reports(your favorable lord, favorable vastu etc.) and personalized planet profiles."
            price="499"
            btnTitle="Download Premium Horoscope "
            btnBg="#E3B773"
            bgColor="#25262B"
            color="#fff"
          />
          <Report
            img={report4}
            title="Match-making Horoscope Report"
            description="This 24 page* report will have all the basic astrological details, planetary positions, Lagna chart, chalit chart, moon chart & the navamsa chart of the bride & the groom, manglik dosha analysis and its matching result, ashtakoot & dashakoot details analysis. Our vedic match-making report will also include whether vedha dosha, nadi dosha & bhakut dosha are present or not in the bride and the groom and the final match-making report along with the personality reports."
            price="299"
            btnTitle="Download Match Making Horoscope"
            btnBg="#25262B"
            bgColor="#E3B773"
            color="#25262B"
          /> */}
          <img
            src={pricingBgBottom}
            className="img-fluid d-block col-md-8 mx-auto"
            alt=""
            style={{ marginTop: "-40px" }}
          ></img>

          <h5 style={{ color: "#EF9E00E0" }}>
            *Please note that the number of pages in every report may vary to
            some extent, according to the birth and the place details of the
            user.
          </h5>
        </div>
      </div>

      {/* need section  */}
      <div className="container-fluid">
        <div
          className="row text-center mt-5"
          style={{ width: "80%", margin: "0 auto" }}
        >
          <h2 className=" my-5">
            What is the need of getting a <br /> Vedic Kundali Created
          </h2>
          <p style={{ lineHeight: "35px" }}>
            Getting your Vedic Kundali (also known as a birth chart) made can
            provide insight into your personality, life path, and potential
            challenges and opportunities. It is a useful tool for gaining
            self-awareness and understanding the influences of the cosmos on
            your life. It can also help you make more informed decisions about
            important areas of your life, such as career, relationships, and
            personal growth. However, it's important to keep in mind that a
            Vedic Kundali is just one tool among many for gaining insight into
            your life, and should not be relied on exclusively for making
            decisions.
          </p>
        </div>
      </div>
      {/* need cards  */}
      <div className="container pb-5">
        <div className="row my-5">
          <div className="needCards">
            <NeedCard
              img={need1}
              title="Dive Deeper to know what your life has in store for you"
              description="Vedic Kundali can provide insights into your life story by analyzing the positions of the planets and other celestial bodies at the time of your birth. Your Vedic Kundali can reveal information about your personality, strengths and weaknesses, relationships, career, and other important aspects of your life. By understanding the influences of the cosmos on your life, you can gain a deeper understanding of yourself and your life story"
            ></NeedCard>
            <NeedCard
              img={need2}
              title="Get to know if you are affected by any Doshas?"
              description="By going through your personalized report, you can identify if you're afflicted by any of these doshas and our report will also provide you with the accurate remedies to mitigate the effects. Doshas such as Kal Sarpa Dosha, Mangal Dosha, and Pitra Dosha have the ability to stymie progress, cause stress, and make life more difficult in general. Your Vedic Kundali report examines your chart for the presence and strength of doshas. "
            ></NeedCard>
            <NeedCard
              img={need3}
              title="Personalized Solutions, based on your Doshas"
              description="Knowing about bad doshas or planetary alignments isn't enough. You must also understand how to counteract them. And our Vedic Kundali report provides you with simple and easy remedies to assist you in doing so. These remedies shall include wearing certain gemstones, performing specific rituals, making changes to your lifestyle, or other actions to align your life with the positive energies of the cosmos."
            ></NeedCard>
            <NeedCard
              img={need4}
              title="Reports which are easily accessible"
              description="The availability of downloading Vedic Kundali reports in PDF format may vary depending on the specific astrological service or website you are using to generate the report. However, our Vedic astrology services do offer the option to download the report in a PDF format for easy storage and sharing. Your personalized report is emailed to you in PDF format. You can save it to your device by downloading it. "
            ></NeedCard>
          </div>
        </div>
      </div>

      {/* Customer says section  */}
      <div className="customers bg-dark">
        <div className="container">
          <div className="row">
            {/* carousel  */}
            <div className="container">
              <h3 className="text-center text-uppercase text-light mt-5">
                What Our Customers are Saying
              </h3>
              <div className="row">
                <div className="col-lg-10 col-md-8 col-sm-12 mx-auto my-5">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        {/* <img
                          src="https://images.unsplash.com/photo-1561877202-53d0e24be55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                          className="d-block w-100"
                          alt="..."
                        /> */}
                        <div
                          className="p-4"
                          style={{
                            background: "#E3B773 ",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "41px",
                          }}
                        >
                          <p className="text-light">
                            <span className="h1">❝</span> Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            <span className="h1">❞</span>
                          </p>
                          <div className="w-25 mx-auto mt-5">
                            <div className="d-flex align-items-center ">
                              <div>
                                <img
                                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                                  className=""
                                  style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                  }}
                                  alt=""
                                ></img>
                              </div>
                              <div className="ms-3">
                                <h4>Krishna bhatt</h4>
                                <p>Business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        {/* <img
                          src="https://images.unsplash.com/photo-1561877202-53d0e24be55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                          className="d-block w-100"
                          alt="..."
                        /> */}
                        <div
                          className="p-4"
                          style={{
                            background: "#E3B773 ",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "41px",
                          }}
                        >
                          <p className="text-light">
                            <span className="h1">❝</span> Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            <span className="h1">❞</span>
                          </p>
                          <div className="w-25 mx-auto mt-5">
                            <div className="d-flex align-items-center ">
                              <div>
                                <img
                                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                                  className=""
                                  style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                  }}
                                  alt=""
                                ></img>
                              </div>
                              <div className="ms-3">
                                <h4>Krishna bhatt</h4>
                                <p>Business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        {/* <img
                          src="https://images.unsplash.com/photo-1561877202-53d0e24be55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                          className="d-block w-100"
                          alt="..."
                        /> */}
                        <div
                          className="p-4"
                          style={{
                            background: "#E3B773 ",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "41px",
                          }}
                        >
                          <p className="text-light">
                            <span className="h1">❝</span> Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            <span className="h1">❞</span>
                          </p>
                          <div className="w-25 mx-auto mt-5">
                            <div className="d-flex align-items-center ">
                              <div>
                                <img
                                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                                  className=""
                                  style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                  }}
                                  alt=""
                                ></img>
                              </div>
                              <div className="ms-3">
                                <h4>Krishna bhatt</h4>
                                <p>Business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      {/* <span className="sr-only">Previous</span> */}
                    </a>
                    <a
                      className="carousel-control-next d-none d-md-block"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                      style={{ marginTop: "9rem", right: "-5%" }}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      {/* <span className="sr-only">Next</span> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what section  */}

      <div className="what container">
        <img src={what} className="img-fluid w-50 col-6 offset-3" alt=""></img>

        <h2 className="text-center py-5">
          What all can you expect in your Vedic <br /> Kundali Report by
          AstroChalit™
        </h2>
      </div>

      {/* expect section  */}

      <div className="expect py-5" style={{ background: "#E3B773" }}>
        <div className="container">
          <ExpectCards></ExpectCards>
          {}
        </div>
      </div>

      {/* blank section */}

      <div className="" style={{ height: "30vh" }}></div>

      {/* footer section  */}

      <section className="">
        {/* <!-- Footer --> */}
        <footer className="bg-dark text-white pt-4">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <img src={logo2} className="img-fluid p-3" alt=""></img>

                <p className="mt-3 col-md-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
                <div className="mt-5 d-flex align-items-center">
                  <Link
                    className="h5 text-decoration-none text-light"
                    to="/terms"
                  >
                    Terms of Use
                  </Link>

                  <span
                    className="mx-4"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#fff",
                    }}
                  ></span>
                  <Link
                    className="h5 text-decoration-none text-light"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <GlobalModal
                    link={"Brief Horoscope Report"}
                    title={"Get Your Brief Horoscope Report"}
                  ></GlobalModal>
                  <GlobalModal
                    link={"Basic Horoscope Report"}
                    title={"Get Your Basic Horoscope Report"}
                  ></GlobalModal>
                  <GlobalModal
                    link={"Premium Horoscope Report"}
                    title={"Get Your Premium Horoscope Report"}
                  ></GlobalModal>
                  <GlobalModal
                    link={"Match-making Horoscope Report"}
                    title={"Get Your Match Making Horoscope Report"}
                  ></GlobalModal>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Contact Us</h5>

                <ul className="list-unstyled">
                  <li className="mt-4">
                    <a href="#!" className="text-white text-decoration-none">
                      <BsEnvelopeOpen className="me-3"></BsEnvelopeOpen>{" "}
                      support@astrochalit.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center container ">
            <p className="" style={{ border: "2px solid #FFFFFF" }}></p>

            <div className="p-2 d-md-flex justify-content-between">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <BsTwitter
                        className="p-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "#1F75D7",
                          color: "#fff",
                        }}
                      ></BsTwitter>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsInstagram
                        className="p-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "#1F75D7",
                          color: "#fff",
                        }}
                      ></BsInstagram>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsFacebook
                        className="p-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "#1F75D7",
                          color: "#fff",
                        }}
                      ></BsFacebook>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsLinkedin
                        className="p-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "#1F75D7",
                          color: "#fff",
                        }}
                      ></BsLinkedin>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsBehance
                        className="p-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "#1F75D7",
                          color: "#fff",
                        }}
                      ></BsBehance>
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                @2022 Poulima Infotech Private Limited. All Rights Reserved.
              </p>
            </div>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </section>
    </div>
  );
};

export default Home;

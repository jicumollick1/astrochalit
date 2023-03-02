import React, { useEffect } from "react";
import logo from "../assets/WEBP/astrochalit logo-svg.webp";

import hero1 from "../assets/WEBP/VEDIC KUNDLI BOOK TERMS PRIVACY BANNER-svg.webp";
import hero2 from "../assets/WEBP/TERMS OF USE & PRIVACY BANNER-svg.webp";

const PrivacyPolicy = () => {
  // useEffect to go to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ background: "#F0EAD5" }}>
      {/* navbar section  */}
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

      <div className="hero" style={{ background: "#25262B" }}>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-3">
              <img src={hero1} className="img-fluid p-4 ms-md-4" alt=""></img>
            </div>
            <div className=" col-md-6 text-light my-auto">
              <h2 style={{ fontFamily: "Hagatta" }}>Get 50 % OFF </h2>
              <p className="my-4" style={{ fontFamily: "Lora" }}>
                Get All Your Astrological Data in PDF Format EMAILED to You
                Within 24 Hours!
              </p>
              <button
                className="btn text-light"
                style={{
                  background: "#E3B773",
                  borderRadius: "10px",
                  fontFamily: "Yeseva One",
                }}
              >
                Download Premium Kundali Now
              </button>
            </div>
            <div className=" col-md-3 p-0">
              <img src={hero2} className="img-fluid" alt=""></img>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of use section  */}

      <div
        className="terms"
        style={{
          background: "rgba(219, 192, 135, 0.35)",
          fontFamily: "Yeseva One",
        }}
      >
        <div className="container">
          <h2 className="py-3">Privacy Policy</h2>
        </div>
      </div>

      {/* description section  */}
      <div className="container description">
        <div className="row">
          <div>
            <h4 className="my-5">
              Privacy Policy for Vedic Rishi Astro Solutions Private Limited
            </h4>
            <p>
              Vedic Rishi Astro Solutions Private Limited built the Kundli -
              Astrology and Horoscope app as a Freemium app as well as web app
              running at https://vedicrishi.in. This SERVICE is provided by
              Vedic Rishi Astro Solutions Private Limited at no cost and is
              intended for use as is.
            </p>
            <p>
              At Vedic Rishi, accessible from Kundli - Astrology and Horoscope
              android app as well as https://vedicrishi.in website, one of our
              main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by Vedic Rishi and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our android app and website with regards to
              the information that they shared and/or collect in Vedic Rishi.
            </p>
          </div>
          <div>
            <h4 className="my-4">Consent</h4>
            <p>
              By using our app and website, you hereby consent to our Privacy
              Policy and agree to its terms.
            </p>
          </div>

          <div>
            <h4 className="my-4">Information we collect</h4>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, email address, and
              telephone number.
            </p>
          </div>
          <div>
            <h4 className="my-4">How we use your information</h4>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <p>
              <ul>
                <li>Provide, operate, and maintain our app/website</li>
                <li>Improve, personalize, and expand our app/website</li>
                <li>Understand and analyze how you use our app/website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </p>
          </div>
          <div>
            <h4 className="my-4">Log Files</h4>
            <p>
              Vedic Rishi follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </div>
          <div>
            <h4 className="my-4">Cookies and Web Beacons</h4>
            <p>
              Like any other website, Vedic Rishi uses 'cookies'. These cookies
              are used to store information including visitors' preferences, and
              the pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>
          </div>
          <div>
            <h4 className="my-4">Advertising Partners Privacy Policies</h4>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Vedic Rishi. Third-party ad servers or
              ad networks uses technologies like cookies, JavaScript, or Web
              Beacons that are used in their respective advertisements and links
              that appear on Vedic Rishi, which are sent directly to users'
              browser. They automatically receive your IP address when this
              occurs. These technologies are used to measure the effectiveness
              of their advertising campaigns and/or to personalize the
              advertising content that you see on websites that you visit. Note
              that Vedic Rishi has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
          </div>
          <div>
            <h4 className="my-4">Third Party Privacy Policies</h4>
            <p>
              Vedic Rishi's Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </div>

          <div>
            <h4 className="my-4">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h4>
            <p>
              Vedic Rishi's Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </div>

          <div>
            <h4 className="my-4">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h4>
            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>

          <div>
            <h4 className="my-4">GDPR Data Protection Rights</h4>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div>
            <h4 className="my-4">Children's Information</h4>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              Vedic Rishi does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
            <p>Last updated date - 20 December 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

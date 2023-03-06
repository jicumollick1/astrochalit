import React, { useEffect, useRef } from "react";
import logo from "../assets/WEBP/astrochalit logo-svg.webp";

import hero1 from "../assets/WEBP/VEDIC KUNDLI BOOK TERMS PRIVACY BANNER-svg.webp";
import hero2 from "../assets/WEBP/TERMS OF USE & PRIVACY BANNER-svg.webp";

const TermsAndCondition = () => {
  // useEffect to go to top
  const scollToRefund = useRef();
  useEffect(() => {
    if (window.location.hash==='#refund') moveToRefund();
    else window.scrollTo(0, 0);
  }, []);
  const moveToRefund = () => {
    scollToRefund.current.scrollIntoView({ behavior: "smooth" });
  };
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
              Download All Your Astrological Data in PDF Format Instantly!
              </p>
              <button
                onClick={() => window.location.href = "https://www.astrochalit.com/"}
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
          <h2 className="py-3">Terms of Use</h2>
        </div>
      </div>

      {/* description section  */}
      <div className="container description">
        <div className="row">
          <div>
            <h4 className="my-5">
              Poulima Infotech Pvt. Ltd Terms of Service ("Terms")
            </h4>
            <p>Last updated: March 1, 2023</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service")
              carefully before using the https://www.poulimainfo.tech/ website
              (the "Service") operated by Poulima Infotech Pvt Ltd
              ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
          </div>
          <div>
            <h4 className="my-4">Accounts</h4>
            <p>
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
          </div>

          <div>
            <h4 className="my-4">Links To Other Web Sites</h4>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Poulima Infotech
              Pvt Ltd.
            </p>
            <p>
              Poulima Infotech Pvt Ltd has no control over, and
              assumes no responsibility for, the content, privacy policies, or
              practices of any third party web sites or services. You further
              acknowledge and agree that Poulima Infotech Pvt Ltd
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that you
              visit.
            </p>
          </div>
          <div>
            <h4 className="my-4">Termination</h4>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </div>
          <div>
            <h4 className="my-4">Governing Law</h4>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Maharashtra, India, without regard to its conflict of law
              provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </p>
          </div>
          <div>
            <h4 className="my-4">Changes</h4>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </div>
          <div ref={scollToRefund}>
            <h4 className="my-4">REFUND & CANCELLATION POLICY</h4>
            <p>We want you to be delighted with your purchase on our website. If for any reason, you are not satisfied with your purchase, we will gladly provide a refund. Please note that some products or services may have different refund policies, which will be clearly stated on the product or service page.</p>
            <p>Refunds will be considered only if customers mail us at support@astrochalit.com within 2 hours of payment. No refund shall be entertained after the expiry of two hours from the time of payment. No refund shall be made if the data provided by the customer is incorrect. Once the report is delivered to the customer, no refund shall be made.</p>
            <p>We will issue refunds for the following circumstances:</p>
            <ul>
              <li>The product or service is defective or not working as advertised.</li>
              <li>The product or service was not delivered as promised.</li>
              <li>The product or service does not meet your expectations.</li>
            </ul>
          </div>
          <div>
            <h4 className="my-4">Contact Us</h4>
            <p>
              D-3/60, SVP Nagar, Versova MHADA, Andheri-West, Mumbai - 400053,
              Maharashtra, India If you have any questions about these Terms,
              please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;

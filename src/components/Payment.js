import React from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import logo from "../assets/WEBP/astrochalit logo-svg.webp";
import heroImg from "../assets/WEBP/Group 11-svg.webp";

const Payment = () => {
  const { type } = useParams();

  const Amount = type === "brief horoscope report"? 99 : type === "basic horoscope report"? 149 : type === "premium horoscope report"? 499 : 299;

  const validationSchema = Yup.object().shape({
    data_email: Yup.string()
      .email("Please enter valid email.")
      .required("Please enter your email."),
    data_name: Yup.string().required("Please enter your Name."),
  });

  const handlePayment = async (values) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/pay`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    window.location.replace(data.redirectUrl);
  };

  return (
    <div className="d-flex flex-column">
      <div className="p-4">
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid" alt=""></img>
        </a>
      </div>
      <div className="py-4 px-5" style={{backgroundColor:'#ECE2C6'}}>
        <h1>Payment for Brief Horoscope Report</h1>
      </div>
      <StyledContainer className=" d-flex gap-5">
        <StyledLeftContainer>
          <Formik
            initialValues={{
              data_email: "",
              data_name: "",
              data_amount: Amount,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handlePayment(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className='w-100'>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="data_name">Enter Full Name</label>
                    <input
                      type="text"
                      name="data_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.data_name}
                      className="form-control"
                      style={{backgroundColor:'#E9DDBD',borderRadius:"5px"}}
                    />
                    <span className="text-danger">{errors.data_name && touched.data_name && errors.data_name}</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="data_email">Email ID</label>
                    <input
                      type="email"
                      name="data_email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.data_email}
                      className="form-control"
                      style={{backgroundColor:'#E9DDBD',borderRadius:"5px"}}
                    />
                    <span className="text-danger">{errors.data_email && touched.data_email && errors.data_email}</span>
                  </div>
                  <button
                    className="btn btn-dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </StyledLeftContainer>
        <StyledRightContainer className="d-flex flex-column gap-4 p-4" style={{borderRadius:'20px',backgroundColor:'#25262B',color:'#fff'}}>
          <h2>Summary</h2>
          <StyledRightMiddleContainer className="gap-5">
              <div>
                <img src={heroImg} style={{width:'10rem'}} alt='horoscope-book-img'></img>
              </div>
              <div className="d-flex flex-column gap-3">
                <span style={{color:'#DBC087'}}>Brief Horoscope Report</span>
                <div className="d-flex justify-content-between gap-5">
                  <span>Actual Amount</span>
                  <span style={{fontSize:'1.5rem',textDecoration:'line-through'}}>&#8377; {Amount+100}</span>
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <span>Offer Price</span>
                  <span style={{fontSize:'1.5rem',}}>&#8377; {Amount}</span>
                </div>
              </div>
          </StyledRightMiddleContainer>
          <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{backgroundColor:'#DBC087',borderRadius:'1rem'}}>
            <span style={{fontSize:'1.5rem'}}>Total Payment</span>
            <span style={{fontSize:'2rem'}}>&#8377; {Amount}</span>
          </div>
        </StyledRightContainer>
      </StyledContainer>
    </div>
  );
};

export default Payment;

const StyledContainer = styled.div`
  displqy: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 5rem auto;
  padding: 4rem;
  border: 1px solid;
  border-radius: 10px;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0rem;
    padding: 1rem;
  }
`
const StyledLeftContainer = styled.div`
  width: 25rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StyledRightContainer = styled.div`
  width: 30rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StyledRightMiddleContainer = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

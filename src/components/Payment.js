import React from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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
    const response = await fetch("http://localhost:5000/pay", {
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
    <div className="text-center pb-5" style={{ minHeight: "100vh" }}>
      <h1 className="py-5">Payment For {type}</h1>
      <StyledContainer>
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
                  <label htmlFor="data_name" className="fw-bold">Name</label>
                  <input
                    type="text"
                    name="data_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.data_name}
                    className="form-control"
                  />
                  <span className="text-danger">{errors.data_name && touched.data_name && errors.data_name}</span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="data_email" className="fw-bold">Email ID</label>
                  <input
                    type="email"
                    name="data_email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.data_email}
                    className="form-control"
                  />
                  <span className="text-danger">{errors.data_email && touched.data_email && errors.data_email}</span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="data_email" className="fw-bold">Amount</label>
                  <h4 className="fw-bold">{values.data_amount}</h4>
                </div>

                <button
                  className="btn btn-dark"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {" "}
                  Pay{" "}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </StyledContainer>
    </div>
  );
};

export default Payment;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
`

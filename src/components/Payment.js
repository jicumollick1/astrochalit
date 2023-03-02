import React from "react";
import { useParams } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

const Payment = () => {
  const { type } = useParams();

  console.log(type);

  const validationSchema = Yup.object().shape({
    data_email: Yup.string()
      .email("Please enter valid email.")
      .required("Please enter your email."),
    data_name: Yup.string().required("Please enter your password."),
  });

  const handlePayment = (values) => {
    console.log(values);

    fetch("https://localhost:5000/pay", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="text-center pb-5" style={{ minHeight: "100vh" }}>
      <h1 className="py-5">Payment For {type}</h1>
      <Formik
        initialValues={{
          data_email: "",
          data_password: "",
          // data_amount: "10",
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
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <label htmlFor="data_name">Name</label>
                <input
                  type="text"
                  name="data_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.data_name}
                />
                {errors.data_name && touched.data_name && errors.data_name}
              </div>
              <div className="d-flex flex-column gap-2">
                <label htmlFor="data_email">Email ID</label>
                <input
                  type="email"
                  name="data_email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.data_email}
                />
                {errors.data_email && touched.data_email && errors.data_email}
              </div>
              {/* <div className="d-flex flex-column gap-2">
                <label htmlFor="data_email">Amount</label>
                <span>{values.data_amount}</span>
              </div> */}

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
    </div>
  );
};

export default Payment;

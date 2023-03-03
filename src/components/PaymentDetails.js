import React, { useState,useEffect } from "react";
import GlobalModal from "./Modals/GlobalModal";

const PaymentDetails = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const payment_id = queryParameters.get("payment_id")
    const [data, setData] = useState({});
    const payment_status = queryParameters.get("payment_status")
    const payment_request_id = queryParameters.get("payment_request_id")
    useEffect(() => {
        getTransactionDetails();
    }, [])
    const getTransactionDetails = async () => {
        const response = await fetch("http://localhost:5000/getTransactionDetails", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            },
          body: JSON.stringify({payment_id: payment_id}),
        });
        const data = await response.json();
        setData(data.data);
        console.log(data);
    }

    return (
        <div className="d-flex flex-column w-50 m-auto p-5 gap-5">
            <h1>Payment Details</h1>
            <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-4">
                    <span className="fw-bold">Name</span>
                    <span>{data.name}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Email</span>
                    <span>{data.email}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Mobile Number</span>
                    <span>{data.phone}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Amount</span>
                    <span>Rs {data.amount}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Payment Mode</span>
                    <span>{data.instrument_type}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Payment ID</span>
                    <span>{payment_id}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Payment Request ID</span>
                    <span>{payment_request_id}</span>
                </div>
                <div className="d-flex gap-4">
                    <span className="fw-bold">Payment Status</span>
                    <span className={`fw-bold text-${data.status?'success':'danger'}`}>{data.status?'Success':'Failed'}</span>
                </div>
            </div>
            <span className="fw-bold text-success">The payment Receipt is sent to your email. Please Check your email</span>
            <GlobalModal link={"Brief Horoscope Report"} title={"Get Your Brief Horoscope Report"} />
        </div>
    );
}

export default PaymentDetails;
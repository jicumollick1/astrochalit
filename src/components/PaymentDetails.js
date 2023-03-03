import React, { useState,useEffect } from "react";
import GlobalModal from "./Modals/GlobalModal";
import styled from "styled-components";
import heroImg from "../assets/WEBP/Group 11-svg.webp";
import logo from "../assets/WEBP/astrochalit logo-svg.webp";
import { GoVerified } from "react-icons/go";

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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getTransactionDetails`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            },
          body: JSON.stringify({payment_id: payment_id}),
        });
        const data = await response.json();
        setData(data.data);
    }

    return (
        <div className="d-flex flex-column">
          <div className="p-4">
            <a className="navbar-brand" href="#">
              <img src={logo} className="img-fluid" alt=""></img>
            </a>
          </div>
          <div className="py-4 px-5" style={{backgroundColor:'#ECE2C6'}}>
            <h1>Payment Details</h1>
          </div>
          <StyledContainer className=" d-flex gap-5">
            <StyledLeftContainer>
                <StyledTable>
                  <StyledTableTr>
                    <StyledTableTd>Name</StyledTableTd>
                    <StyledTableTd>{data.name}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Email</StyledTableTd>
                    <StyledTableTd>{data.email}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Mobile Number</StyledTableTd>
                    <StyledTableTd>{data.phone}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Amount</StyledTableTd>
                    <StyledTableTd>{data.amount}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Payment Mode</StyledTableTd>
                    <StyledTableTd>{data.instrument_type}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Payment Id</StyledTableTd>
                    <StyledTableTd>{payment_id}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Payment Request Id</StyledTableTd>
                    <StyledTableTd>{payment_request_id}</StyledTableTd>
                  </StyledTableTr>
                  <StyledTableTr>
                    <StyledTableTd>Payment Status</StyledTableTd>
                    <StyledTableTd className={`fw-bold text-${data.status?'success':'danger'}`}>{data.status?'Success':'Failed'}</StyledTableTd>
                  </StyledTableTr>
                </StyledTable>
                <div className="py-3">
                    <span className={`fw-bold text-${data.status?'success':'danger'}`}>This payment receipt is sent to your email. Please check your mail.</span>
                    <GlobalModal link={"Download Your Horoscope Report"} title={"Get Your Brief Horoscope Report"} />
                </div>
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
                      <span>Total Price</span>
                      <span style={{fontSize:'1.5rem',}}>&#8377; {data.amount}</span>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <GoVerified style={{fontSize:'1.5rem', color:'#44D36C'}} />
                        <span className="fw-bold">Payment Successful</span>
                    </div>
                  </div>
              </StyledRightMiddleContainer>
              <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{backgroundColor:'#DBC087',borderRadius:'1rem'}}>
                <span style={{fontSize:'1.5rem'}}>Total Payment</span>
                <span style={{fontSize:'2rem'}}>&#8377; {data.amount}</span>
              </div>
            </StyledRightContainer>
          </StyledContainer>
        </div>
    );
}

export default PaymentDetails;

const StyledContainer = styled.div`
  displqy: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
  padding: 4rem;
  ${'' /* border: 1px solid; */}
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
    border: 1px solid;
    padding: 1rem;
    border-radius: 10px;
  
`
const StyledTable = styled.table`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const StyledTableTr = styled.tr`
    display: flex;
    gap: 3rem;
    @media (max-width: 450px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        border: 1px solid;
        border-radius: 10px;
    }
`
const StyledTableTd = styled.td`
    text-align: left;
    width: 50%;
    word-wrap: break-word;
    @media (max-width: 450px) {
        text-align: center;
        width: 90%;
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

            // <GlobalModal link={"Brief Horoscope Report"} title={"Get Your Brief Horoscope Report"} />
{/* <div className="d-flex flex-column gap-4">
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
            </div> */}
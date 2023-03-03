import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Payment from "./components/Payment";
import PaymentDetails from "./components/PaymentDetails";
function App() {
  return (
    <div style={{ background: "#F0EAD5" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/terms"
            element={<TermsAndCondition></TermsAndCondition>}
          ></Route>
          <Route
            path="/privacy"
            element={<PrivacyPolicy></PrivacyPolicy>}
          ></Route>
          <Route path="/payment/:type" element={<Payment></Payment>}></Route>
          <Route path="paymentDetails" element={<PaymentDetails></PaymentDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

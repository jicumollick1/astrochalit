import axios from "axios";
import React, { useRef } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/Popup assets/WEBP/Group 11-svg.webp";
import { useState, useEffect } from "react";
import countriesData from "./countries.json";
import { encode as btoa } from "base-64";
import Brief_Horoscope from "./Brief_Horoscope.pdf";

const GlobalModal = ({ title, link }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState("India");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [placeSearchText, setPlaceSearchText] = useState("");
  const [placeSuggestions, setPlaceSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const placeInputRef = useRef();
  const placeDropdownRef = useRef();

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${month}-${day}-${year}`;

  const [loc, setLoc] = useState({ lat: null, lon: null });
  const [timezone, setTimeZone] = useState("");

  useEffect(() => {
    document.addEventListener("mousedown", handlePlaceClickOutside);
    return () => {
      document.removeEventListener("mousedown", handlePlaceClickOutside);
    };
  }, []);

  const handlePlaceClickOutside = (event) => {
    if (
      placeDropdownRef.current &&
      !placeDropdownRef.current.contains(event.target) &&
      event.target !== placeInputRef.current
    ) {
      setPlaceSuggestions([]);
    }
  };

  const getTimeZone = () => {
    axios
      .post(
        "https://json.astrologyapi.com/v1/timezone_with_dst",
        {
          latitude: `${loc.lat}`,
          longitude: `${loc.lon}`,
          date: formattedDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic NjE1MjY2Ojg2YzczZTViZGYzZjlkZjBkYmE3MGQzNWQ2NDFjYWYz",
          },
        }
      )
      .then((response) => {
        setTimeZone(response.data.timezone);
        // console.log(response.data.timezone);
      })
      .then((err) => {
        // console.log(err);
        // console.log(formattedDate);
      });
  };

  useEffect(() => {
    // console.log(loc.lat);
    // console.log(loc.lon);
    getTimeZone();
  }, [loc, loc.lat, loc.lon, timezone]);

  const handlePlaceInputChange = (event) => {
    const value = event.target.value;
    setPlaceSearchText(value);

    if (value.trim()) {
      fetchPlaceData(value.trim()).then((data) => {
        setPlaceSuggestions(data);
      });
    } else {
      setPlaceSuggestions([]);
    }
  };

  const handleSelectPlace = (place) => {
    setLoc({
      lat: place.latitude,
      lon: place.longitude,
    });

    // console.log(loc.lat);
    // console.log(loc.lon);

    setSelectedPlace(place);
    setPlaceSearchText(place.name);
    setPlaceSuggestions([]);
  };

  const fetchPlaceData = async (searchTerm) => {
    const userId = "615266";
    const apiKey = "86c73e5bdf3f9df0dba70d35d641caf3";

    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Basic NDU0NTpCeVZPSWFPREg1N1FSVmk2Q3Fzd0hYR2xjcER2ajd0WkJSb29yWQ==",
    };

    const params = {
      country: country,
      name: searchTerm,
    };

    const response = await axios
      .post("https://geo.astrologyapi.com/places/", params, {
        headers: headers,
      })
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
    return response;
  };

  // console.log(country);
  useEffect(() => {
    setCountries(countriesData);
  }, []);

  useEffect(() => {
    const filtered = countries.filter((c) =>
      c.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchText, countries]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setIsOpen(true);
  };

  const handleSelectCountry = (c) => {
    setCountry(c);
    setFilteredCountries([]);
    setSearchText("");
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  let subtitle;
  function openModal() {
    setModalIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      background: "#F0EAD5",
      // backgroundImage: `url(${bg})`,

      boxShadow: "0px 15px 45px rgba(98, 93, 93, 0.25)",
      borderRadius: "31px",
    },
  };

  const getPdf = (e) => {
    e.preventDefault();

    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.date.value);
    console.log(e.target.date.value);
    console.log(e.target.month.value);
    console.log(e.target.year.value);
    console.log(e.target.hour.value);
    console.log(e.target.min.value);
    console.log(e.target.ampm.value);
    console.log(timezone);
    console.log(e.target.gender.value);
    console.log(country);
    console.log(e.target.preference.value);
    console.log(e.target.language.value);
    // calling the api
    axios
      .post(
        "https://pdf.astrologyapi.com/v1/basic_horoscope_pdf",
        {
          name: e.target.firstName.value,
          gender: e.target.gender.value,
          day: parseInt(e.target.date.value),
          month: parseInt(e.target.month.value),
          year: parseInt(e.target.year.value),
          hour: parseInt(e.target.hour.value),
          min: parseInt(e.target.min.value),
          lat: `${loc.lat}`,
          lon: `${loc.lon}`,
          tzone: `${timezone}`,
          language: e.target.language?.value,
          place: country,
          chart_style: e.target.preference.value,
          footer_link: "astrochalit.com",
          logo_url:
            "https://www.poulimainfo.tech/wp-content/uploads/2023/02/Transparent-black.png",
          company_name: "AstroChalit",
          company_info:
            "Our offerings vary from free online horoscopes to expert-led online astrological consultations in a variety of fields.",
          domain_url: "https://www.astrochalit.com",
          company_email: "support@astrochalit.com",
          company_landline: "+916304116234",
          company_mobile: "+916304116234",
        },
        {
          headers: {
            Authorization:
              "Basic NDU0NTpCeVZPSWFPREg1N1FSVmk2Q3Fzd0hYR2xjcER2ajd0WkJSb29yWQ==",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // navigate(
        //   "https://pdf.astrologyapi.com/download/sample/44d819f0-62e7-11e7-9528-39ad67eac463.pdf",
        //   {
        //     replace: true,
        //   }
        // );
        // window.location.replace(
        //   "https://pdf.astrologyapi.com/download/sample/44d819f0-62e7-11e7-9528-39ad67eac463.pdf"
        // );
        fetch(Brief_Horoscope).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Horoscope.pdf';
                alink.click();
            })
        })
      })
      .then((error) => console.log(error));
  };
  return (
    <li className="mt-3" style={{listStyle:'none'}}>
      <a
        href="#!"
        className="text-white h5 text-decoration-none"
        onClick={openModal}
      >
        <button className="btn btn-dark">{title}</button>
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        title="jiku"
      >
        <div
          className="p-5"
          style={{
            position: "relative",
          }}
        >
          <h2 className="text-center">{title}</h2>
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              left: "75.99%",
              right: "34.26%",
              top: "15.82%",
              bottom: "77.75%",
              background: "#F3F3F3",
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
              fontSize: "1.5rem",
              border: "none",
              marginLeft: "2rem",
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={(e) => getPdf(e)}>
          {link === "Match-making Horoscope Report" ? (
            <>
              {/* for bride grom  */}

              <h4>Bride Info: </h4>
              <div className="row ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Enter Full Name
                    </label>
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                      style={{ border: "1px solid #25262B" }}
                    />
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label
                      className="mb-3"
                      htmlFor="exampleInputEmail1"
                    ></label>
                    <input
                      type="email"
                      className="form-control bg-transparent mt-3"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                      style={{ border: "1px solid #25262B" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Date of Birth
                    </label>
                    <div className="d-md-flex">
                      <select
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        name="date"
                        required
                      >
                        <option value=''>Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={""}>Year</option>

                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Birth Time
                    </label>
                    <div className="d-md-flex">
                      <select
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Hour</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"am"}>AM</option>
                        <option value="pm">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Gender
                    </label>
                    <select
                      className="form-select bg-transparent "
                      aria-label="Default select example"
                      style={{ border: "1px solid #25262B" }}
                    >
                      <option defaultValue={"male"}>Select Gender </option>
                      <option value="maale">Male</option>
                      <option value="female">Female</option>
                      <option value="third gender">Third Gender</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="d-flex">
                    {/* ***** */}
                    <div className="form-group col-md-5" ref={dropdownRef}>
                      <label className="mb-3" htmlFor="countrySelect">
                        Birth Country
                      </label>
                      <input
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        onClick={() => setIsOpen(true)}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Country Name"
                      />
                      {isOpen && filteredCountries.length > 0 && (
                        <div className="dropdown-menu show">
                          {filteredCountries.map((c) => (
                            <div
                              key={c}
                              className="dropdown-item"
                              onClick={() => handleSelectCountry(c)}
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      )}
                      {country && <p>Selected country: {country}</p>}
                    </div>
                    {/* ******* */}
                    <div
                      className="form-group col-md-5 offset-md-2"
                      ref={placeDropdownRef}
                    >
                      <label className="mb-3" htmlFor="placeInput">
                        Birth Place
                      </label>
                      <input
                        type="text"
                        id="placeInput"
                        ref={placeInputRef}
                        value={placeSearchText}
                        onChange={handlePlaceInputChange}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Place Name"
                      />
                      {placeSuggestions.length > 0 && (
                        <div className="dropdown-menu show">
                          {placeSuggestions.map((place) => (
                            <div
                              key={place.id}
                              className="dropdown-item"
                              onClick={() => handleSelectPlace(place)}
                            >
                              {place.place}
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedPlace && (
                        <p>Selected place: {selectedPlace.place}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="my-4">groom Info:</h4>

              <div className="row ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Enter Full Name
                    </label>
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                      style={{ border: "1px solid #25262B" }}
                    />
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label
                      className="mb-3"
                      htmlFor="exampleInputEmail1"
                    ></label>
                    <input
                      type="email"
                      className="form-control bg-transparent mt-3"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                      style={{ border: "1px solid #25262B" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Date of Birth
                    </label>
                    <div className="d-md-flex">
                      <select
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1995"}>Year</option>

                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Birth Time
                    </label>
                    <div className="d-md-flex">
                      <select
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Hour</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"1"}>Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                      </select>
                      <select
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                      >
                        <option defaultValue={"am"}>AM</option>
                        <option value="pm">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Gender
                    </label>
                    <select
                      className="form-select bg-transparent "
                      aria-label="Default select example"
                      style={{ border: "1px solid #25262B" }}
                    >
                      <option defaultValue={"male"}>Select Gender </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="third gender">Third Gender</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="d-flex">
                    {/* ***** */}
                    <div className="form-group col-md-5" ref={dropdownRef}>
                      <label className="mb-3" htmlFor="countrySelect">
                        Birth Country
                      </label>
                      <input
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        onClick={() => setIsOpen(true)}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Country Name"
                      />
                      {isOpen && filteredCountries.length > 0 && (
                        <div className="dropdown-menu show">
                          {filteredCountries.map((c) => (
                            <div
                              key={c}
                              className="dropdown-item"
                              onClick={() => handleSelectCountry(c)}
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      )}
                      {country && <p>Selected country: {country}</p>}
                    </div>
                    {/* ******* */}
                    <div
                      className="form-group col-md-5 offset-md-2"
                      ref={placeDropdownRef}
                    >
                      <label className="mb-3" htmlFor="placeInput">
                        Birth Place
                      </label>
                      <input
                        type="text"
                        id="placeInput"
                        ref={placeInputRef}
                        value={placeSearchText}
                        onChange={handlePlaceInputChange}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Place Name"
                      />
                      {placeSuggestions.length > 0 && (
                        <div className="dropdown-menu show">
                          {placeSuggestions.map((place) => (
                            <div
                              key={place.id}
                              className="dropdown-item"
                              onClick={() => handleSelectPlace(place)}
                            >
                              {place.place}
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedPlace && (
                        <p>Selected place: {selectedPlace.place}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="mt-4">General Info:</h4>
            </>
          ) : (
            <>
              {/* for general  */}
              <div className="row ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="firstName">
                      Enter Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="firstName"
                      name="firstName"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                      style={{ border: "1px solid #25262B" }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="lastName"></label>
                    <input
                      type="text"
                      className="form-control bg-transparent mt-3"
                      id="lastName"
                      name="lastName"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                      style={{ border: "1px solid #25262B" }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Date of Birth
                    </label>
                    <div className="d-md-flex">
                      <select
                        name="date"
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue={"1"}>Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        name="month"
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue={"1"}>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select
                        name="year"
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue={"1995"}>Year</option>

                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Birth Time
                    </label>
                    <div className="d-md-flex">
                      <select
                        name="hour"
                        className="form-select bg-transparent "
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue={"1"}>Hour</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        name="min"
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue={"1"}>Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                      </select>
                      <select
                        name="ampm"
                        className="form-select bg-transparent ms-md-5 mt-5 mt-md-0"
                        aria-label="Default select example"
                        style={{ border: "1px solid #25262B" }}
                        required
                      >
                        <option defaultValue="am">AM</option>
                        <option value="pm">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="mb-3" htmlFor="exampleInputEmail1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="form-select bg-transparent "
                      aria-label="Default select example"
                      style={{ border: "1px solid #25262B" }}
                      required
                    >
                      <option defaultValue={"male"}>Select Gender </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="third">Third Gender</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-5 offset-md-1">
                  <div className="d-flex">
                    {/* ***** */}
                    <div className="form-group col-md-5" ref={dropdownRef}>
                      <label className="mb-3" htmlFor="countrySelect">
                        Birth Country
                      </label>
                      <input
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        onClick={() => setIsOpen(true)}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Country Name"
                      />
                      {isOpen && filteredCountries.length > 0 && (
                        <div className="dropdown-menu show">
                          {filteredCountries.map((c) => (
                            <div
                              key={c}
                              className="dropdown-item"
                              onClick={() => handleSelectCountry(c)}
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      )}
                      {country && <p>Selected country: {country}</p>}
                    </div>
                    {/* ******* */}
                    <div
                      className="form-group col-md-5 offset-md-2"
                      ref={placeDropdownRef}
                    >
                      <label className="mb-3" htmlFor="placeInput">
                        Birth Place
                      </label>
                      <input
                        type="text"
                        id="placeInput"
                        ref={placeInputRef}
                        value={placeSearchText}
                        onChange={handlePlaceInputChange}
                        className="form-control bg-transparent"
                        style={{ border: "1px solid #25262B" }}
                        placeholder="Search Place Name"
                        required={` ${selectedPlace !== "" ? false : true}`}
                      />
                      {placeSuggestions.length > 0 && (
                        <div className="dropdown-menu show">
                          {placeSuggestions.map((place) => (
                            <div
                              key={place.id}
                              className="dropdown-item"
                              onClick={() => handleSelectPlace(place)}
                            >
                              {place.place}
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedPlace && (
                        <p>Selected place: {selectedPlace.place}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="row mt-5">
            <div className="col-md-5">
              <div className="form-group">
                <label className="mb-3" htmlFor="exampleInputEmail1">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control bg-transparent"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile number"
                  style={{ border: "1px solid #25262B" }}
                  required
                />
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="form-group">
                <label className="mb-3" htmlFor="exampleInputEmail1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent mt-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mail Address"
                  style={{ border: "1px solid #25262B" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">
              <label className="form-check-label mb-3" htmlFor="">
                Preferences
              </label>
              <div className="d-md-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="preference"
                    id="flexRadioDefault1"
                    value="north indian style"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    North Indian Style
                  </label>
                </div>
                <div className="form-check ms-md-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="preference"
                    id="flexRadioDefault2"
                    value="south indian style"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    South Indian Style
                  </label>
                </div>
                <div className="form-check ms-md-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="preference"
                    id="flexRadioDefault3"
                    value="east indian style"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    East Indian Style
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="form-group">
                <label
                  className="mb-3 mt-4 mt-md-0"
                  htmlFor="exampleInputEmail1"
                >
                  Languages
                </label>
                <select
                  name="language"
                  className="form-select bg-transparent "
                  aria-label="Default select example"
                  style={{ border: "1px solid #25262B" }}
                  required
                >
                  {/* English -en, Hindi-hi, Marathi-ma, Bengali-bn, Tamil-ta, Telugu-te, Kannada-kn, Malayalam-ml */}
                  <option defaultValue={"hindi"}>Select Language </option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="marati">Marathi</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                  <option value="telegu">Telegu</option>
                  <option value="kannada">Kannada</option>
                  <option value="malayalam">Malayalam</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="mx-auto">
              {/* <button
                className="bg-dark text-light col-md-4 d-block mx-auto py-2"
                style={{ fontFamily: "Hagatta" }}
              >
                Pay Now
              </button> */}
              <button
                type="submit"
                className="mt-4 bg-dark text-light col-md-4 d-block mx-auto py-2"
                style={{ fontFamily: "Hagatta" }}
              >
                Download Now
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </li>
  );
};

export default GlobalModal;

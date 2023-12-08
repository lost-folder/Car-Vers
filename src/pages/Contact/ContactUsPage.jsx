import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainBanner from "../../components/util/MainBanner";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";


const ContactUsPage = () => {
  return (
    <div style={{ minHeight: "657px" }}>
      <MainBanner title="Contact Us" subTitle=" Home / Contact" />
      
      <div className="contact-div">
        <Row>
          <Col sm={6}>
            <div className="contact-text">
              <h3 className="contact-text header" >
                Need additional information?
              </h3>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
              <IoCall />
              &nbsp; (123) 456-7869
              </a>
              <a href="/">
              <IoMdMail />
              &nbsp; CarVersa@Versamail.com
              </a>
              <a href="/">
              <FaMapLocation />
              &nbsp; Istanbul, Turkey
              </a>
            </div>
          </Col>
          <Col sm={6}>
          <div >
              <form className="contact-form">
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button className="btn-form" type="submit">
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUsPage;

import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-icons">
            <div>
              <h3>Follow us on social media</h3>
            </div>
            <BsFacebook style={{ fontSize: "3rem", marginLeft: "1rem" }} />
            <BsTwitter style={{ fontSize: "3rem", marginLeft: "1rem" }} />
            <BsInstagram style={{ fontSize: "3rem", marginLeft: "1rem" }} />
            <AiFillLinkedin style={{ fontSize: "3rem", marginLeft: "1rem" }} />
          </div>
          <div className="footer-links-container">
            <div className="left">
              <div className="left_1">
                <h2>Usefull Links</h2>
                <div className="footer-links">
                  <a href="https://www.freecodecamp.org/news/react-fundamentals-for-beginners/">
                    About Us
                  </a>
                  <a href="https://www.freecodecamp.org/news/react-fundamentals-for-beginners/">
                    Gift Voucher
                  </a>
                  <a href="https://www.freecodecamp.org/news/react-fundamentals-for-beginners/">
                    Loyalty Program
                  </a>
                  <a href="https://www.freecodecamp.org/news/react-fundamentals-for-beginners/">
                    Careers
                  </a>
                  <a href="https://www.freecodecamp.org/news/react-fundamentals-for-beginners/">
                    Blog
                  </a>
                </div>
              </div>
              <div className="left_2">
                <h2>Follow us</h2>
                <div className="footer-social">
                  <BsFacebook
                    style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
                  />
                  <BsTwitter
                    style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
                  />
                  <BsInstagram
                    style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
                  />
                  <AiFillLinkedin
                    style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="footer-input">
                <h2>Subscribe</h2>
                <p>Join our news Letter</p>
                <input type="text" className="footer-text-input" />
                <div className="footer-btn-container">
                  <Button style={{ marginTop: "1rem" }}>Subscribe</Button>
                </div>
              </div>
              <div className="footer-contact">
                <h2>Contact us</h2>
                <div className="footer-contact-content">
                  LIQOUR MART LIMITED P.O. BOX 2361-00621 VILLAGE MARKET NAIROBI
                  CELL;+254(0)705 25 25 25 EMAIL;INFO@LIQOURMART.CO.KE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

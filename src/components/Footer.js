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
            <div class="left">
              <div class="left_1">
                <h2>Usefull Links</h2>
                <div class="footer-links">
                  <a href="#">About Us</a>
                  <a href="#">Gift Voucher</a>
                  <a href="#">Loyalty Program</a>
                  <a href="#">Careers</a>
                  <a href="#">Blog</a>
                </div>
              </div>
              <div class="left_2">
                <h2>Follow us</h2>
                <div class="footer-social">
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
            <div class="right">
              <div class="footer-input">
                <h2>Subscribe</h2>
                <p>Join our news Letter</p>
                <input type="text" class="footer-text-input" />
                <div class="footer-btn-container">
                  <Button style={{ marginTop: "1rem" }}>Subscribe</Button>
                </div>
              </div>
              <div class="footer-contact">
                <h2>Contact us</h2>
                <div class="footer-contact-content">
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

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top-footer ">
        <div className="left-footer">
          <Container>
            <Row>
              <Col>
                <p>
                  <small>
                    <ul>
                      <li>ABOUT</li>
                      <li>Contact Us</li>
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Flipkart Stories</li>
                      <li>Press</li>
                      <li>Flipkart Wholesale</li>
                      <li>Corporate Information</li>
                    </ul>
                  </small>
                </p>
              </Col>
              <Col>
                <p>
                  <small>
                    {" "}
                    <ul>
                      <li>HELP</li>
                      <li>Payments</li>
                      <li>Shipping</li>
                      <li>Cancellation & Returns</li>
                      <li>FAQ</li>
                      <li>Report Infringement</li>
                    </ul>
                  </small>
                </p>
              </Col>
              <Col>
                <p>
                  <small>
                    <ul>
                      <li>CONSUMER POLICY</li>
                      <li>Return Policy</li>
                      <li>Terms Of Us</li>
                      <li>Security</li>
                      <li>Privacy</li>
                      <li>Sitemap</li>
                      <li>Grievance Redressal</li>
                      <li>EPR Compliance</li>
                    </ul>
                  </small>
                </p>
              </Col>
              <Col>
                <p>
                  <small>
                    <ul>
                      <li>SOCIAL</li>
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Youtube</li>
                    </ul>
                  </small>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="right-footer">
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col>
                <p>
                  <small>
                    <ul>
                      <li>Mail Us:</li>
                      <li>Flipkart Internet Private Limited,</li>
                      <li>Buildings Alyssa, Begonia &</li>
                      <li>Clove Embassy Tech Village,</li>
                      <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                      <li>Bengaluru, 560103,</li>
                      <li>Karnataka, India</li>
                    </ul>
                  </small>
                </p>
              </Col>
              <Col>
                <p>
                  <small>
                    {" "}
                    <ul>
                      <li>Registered Office Address:</li>
                      <li>Flipkart Internet Private Limited,</li>
                      <li>Buildings Alyssa, Begonia &</li>
                      <li>Clove Embassy Tech Village,</li>
                      <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                      <li>Bengaluru, 560103,</li>
                      <li>Karnataka, India</li>
                      <li>CIN : U51109KA2012PTC066107</li>
                      <li>Telephone: 044-45614700</li>
                    </ul>
                  </small>
                </p>
              </Col>
A            </Row>
          </Container>
        </div>
      </div>
      <div className="bottom-footer">
        <Container>
          <Row>
            <Col>
              <p>
                <small>Become a Seller</small>
              </p>
            </Col>
            <Col>
              <p>
                <small>Advertise</small>
              </p>
            </Col>
            <Col>
              <p>
                <small>Gift Cards</small>
              </p>
            </Col>
            <Col>
              <p>
                <small>Help Center</small>
              </p>
            </Col>
            <Col>
              <p>
                <small>© 2007-2023 Flipkart.com</small>
              </p>
            </Col>
            <Col>
              <img src="" alt="card" />
              <img src="" alt="card" />
              <img src="" alt="card" />
              <img src="" alt="card" />
              <img src="" alt="card" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

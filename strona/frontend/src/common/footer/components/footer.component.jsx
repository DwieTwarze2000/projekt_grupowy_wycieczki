import React from 'react';
import { Row, Col } from 'react-bootstrap';
import phone from '../../../images/footer/phone.png';
import envelope from '../../../images/footer/envelope.png';
import facebook from '../../../images/footer/facebook.png';
import instagram from '../../../images/footer/instagram.png';
import twitter from '../../../images/footer/twitter.png';

import footerRight from '../../../images/footer/footerRight.png';
const FooterComponent = () => {
  return (
    <footer>
      <Row>
        <Col md={6}>
          <div className="footer-left">
            <Row>
              <Col md={6}>
                <div className="footer-phone">
                  <img src={phone} className="footer-icon" />
                  <br />
                  <p>
                    tel: 123-456-789
                    <br />
                    codziennie w godz.
                    <br />
                    8:00 - 18:00
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="footer-email">
                  <img src={envelope} className="footer-icon" />
                  <br />
                  <p>
                    tuska.travel@gmail.com
                    <br />
                    Odpowiemy na Państwa pytania bardzo szybko!
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="footer-contact">
                  <p>
                    KONTAKT
                    <br />
                    Ul. Stefana Banacha 22
                    <br />
                    92-298
                    <br />
                    Łódź
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="footer-social">
                  <p>
                    SOCIAL MEDIA
                    <br />
                    <span className="footer-facebook">
                      <img src={facebook} className="footer-icon" /> Facebook
                    </span>
                    <br />
                    <span className="footer-instagram">
                      <img src={instagram} className="footer-icon" /> Instagram
                    </span>
                    <br />
                    <span className="footer-twitter">
                      <img src={twitter} className="footer-icon" /> Twitter
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <div className="footer-right">
            <img src={footerRight} className="footer-image" />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;

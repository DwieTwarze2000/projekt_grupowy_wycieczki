import React from 'react';
import { Row, Col } from 'react-bootstrap';
import mainTileFrance from '../images/mainTiles/mainTileFrance.jpg';

const searchComponent = () => {
  return (
    <Row>
      <Col md={3}>
        <div className="filters">
            <h3>Filtry</h3>
            <p>
                Kraj <select className="searchBar-select">
                <option selected>Wszytkie</option>
                <option>Włochy</option>
                <option>Francja</option>
                <option>Portugalia</option>
                </select>
            </p>
            <p>Wyżywienie</p>
                <select className="searchBar-select">
                <option selected>Wszystkie</option>
                <option>All Inclusive</option>
                <option>W pyte</option>
                <option>Brak</option>
                </select>
        </div>
      </Col>
      <Col md={9}>
        <div className="searchResults">
          <div className="searchResults-tile">
            <Row>
              <Col md={4}>
                <img src={mainTileFrance} alt="mainTileFrance" className="searchResults-tile-image" />
              </Col>
              <Col md={4}>
                <div className="searchResults-basic-info">
                    <p>Podstawowe informacje</p>
                  <ul>
                    <li>Francja</li>
                    <li>20.05.2021 - 30.05.2021</li>
                    <li>All Inclusive</li>
                    <li>zwiedzanie</li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className="searchResults-price">
                  <p>Cena za 3 osoby: </p>
                  <p className="price">2000 zł</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default searchComponent;

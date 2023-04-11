import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchBarComponent = () => {
  return (
    <div className="searchBar">
      <Row>
        <Col md={2}>
          <div className="searchBar-tile searchBar-tile-left">
            <label className="searchBar-label">Kraj</label>
            <br />
            <select className="searchBar-select">
              <option selected>Wszytkie</option>
              <option>Włochy</option>
              <option>Francja</option>
              <option>Portugalia</option>
            </select>
          </div>
        </Col>
        <Col md={2}>
          <div className="searchBar-tile">
            <label className="searchBar-label">Data</label>
            <br />
            <input className="searchBar-date" type="date"></input>
          </div>
        </Col>
        <Col md={2}>
          <div className="searchBar-tile">
            <label className="searchBar-label">Wyżywienie</label>
            <br />
            <select className="searchBar-select">
              <option selected>Wszystkie</option>
              <option>All Inclusive</option>
              <option>W pyte</option>
              <option>Brak</option>
            </select>
          </div>
        </Col>
        <Col md={2}>
          <div className="searchBar-tile">
            <label className="searchBar-label">Cel Wycieczki</label>
            <br />
            <select className="searchBar-select">
              <option selected>Wszystkie</option>
              <option>Zwiedzanie</option>
              <option>Wypoczynek</option>
              <option>Chillera i utopia</option>
            </select>
          </div>
        </Col>
        {/* cena od do */}
        <Col md={2}>
          <div className="searchBar-tile">
            <label className="searchBar-label">Cena za osobę (zł):</label>
            <br />
            Od <input className="searchBar-price" type="number"></input>
            <br />
            Do <input className="searchBar-price" type="number"></input>
          </div>
        </Col>

        <Col md={2}>
          <div className="searchBar-tile searchBar-button-tile">
            <button className="searchBar-button">Szukaj</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBarComponent;

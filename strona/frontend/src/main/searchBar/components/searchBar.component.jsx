import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchBarComponent = () => {
  return (
    <div className="searchBar">
      <Row>
        <Col md={2}>
          <div class="searchBar-tile">
            <label className="searchBar-label">Kraj</label>
            <br />
            <select className="searchBar-select">
              <option selected disabled hidden>
                Wybierz
              </option>
              <option>Włochy</option>
              <option>Francja</option>
              <option>Portugalia</option>
            </select>
          </div>
          {/* <Form.Group class="form-floating">
            <Form.Control as="select" id="floatingInput">
              <option>Włochy</option>
              <option>Francja</option>
              <option>Portugalia</option>
            </Form.Control>
            <Form.Label for="floatingInput">Kraj</Form.Label>
          </Form.Group>
          <div class="form-floating mb-3"></div> */}
        </Col>
        <Col md={2}>
          <div class="searchBar-tile">
            <label className="searchBar-label">Ilość osób</label>
            <br />
            <input className="searchBar-select" type="number"></input>
          </div>
        </Col>
        <Col md={2}>
          <div class="searchBar-tile">
            <label className="searchBar-label">Data</label>
            <br />
            <input className="searchBar-date" type="date"></input>
          </div>
        </Col>
        <Col md={2}>
          <div class="searchBar-tile">
            <label className="searchBar-label">Wyżywienie</label>
            <br />
            <select className="searchBar-select">
              <option selected disabled hidden>
                Wybierz
              </option>
              <option>All Inclusive</option>
              <option>W pyte</option>
              <option>Brak</option>
            </select>
          </div>
        </Col>
        <Col md={2}>
          <div class="searchBar-tile">
            <label className="searchBar-label">Cel Wycieczki</label>
            <br />
            <select className="searchBar-select">
              <option selected disabled hidden>
                Wybierz
              </option>
              <option>Zwiedzanie</option>
              <option>Wypoczynek</option>
              <option>Chillera i utopia</option>
            </select>
          </div>
        </Col>
        <Col md={2}>
          {/* <div class="searchBar-tile">
            <button className="searchBar-button">Szukaj</button>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default SearchBarComponent;

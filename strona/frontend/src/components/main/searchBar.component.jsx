import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCountry, setDate, setFood, setTripType, setPriceLow, setPriceHigh } from '../../actions';
import {NavLink} from 'react-router-dom';

const SearchBarComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="searchBar">
      <form>
        <Row>
          <Col md={2}>
            <div className="searchBar-tile searchBar-tile-left">
              <label className="searchBar-label">Kraj</label>
              <br />
              <select className="searchBar-select" id="country" name="country" onChange={(e) => dispatch(setCountry(e.target.value))}>
                <option selected>Wszytkie</option>
                <option>Dania</option>
                <option>Finlandia</option>
                <option>Francja</option>
                <option>Grecja</option>
                <option>Izrael</option>
                <option>Szwecja</option>
                <option>Turcja</option>
                <option>Wielka Brytania</option>
                <option>Włochy</option>
              </select>
            </div>
          </Col>
          <Col md={2}>
            <div className="searchBar-tile">
              <label className="searchBar-label">Data</label>
              <br />
              <input className="searchBar-date" type="date" id="date" name="date" onChange={(e) => dispatch(setDate(e.target.value))}></input>
            </div>
          </Col>
          <Col md={2}>
            <div className="searchBar-tile">
              <label className="searchBar-label">Wyżywienie</label>
              <br />
              <select className="searchBar-select" id="food" name="food" onChange={(e) => dispatch(setFood(e.target.value))}>
                <option selected>Wszystkie</option>
                <option>All Inclusive</option>
                <option>2 posiłki</option>
                <option>Bez wyżywienia</option>
              </select>
            </div>
          </Col>
          <Col md={2}>
            <div className="searchBar-tile">
              <label className="searchBar-label">Cel Wycieczki</label>
              <br />
              <select className="searchBar-select" id="tripType" name="tripType" onChange={(e) => dispatch(setTripType(e.target.value))}>
                <option selected>Wszystkie</option>
                <option>Wypoczynek</option>
                <option>Zwiedzanie</option>
                <option>Wypoczynek i zwiedzanie</option>
              </select>
            </div>
          </Col>
          {/* cena od do */}
          <Col md={2}>
            <div className="searchBar-tile">
              <label className="searchBar-label">Cena za osobę (zł):</label>
              <br />
              Od{' '}
              <input
                className="searchBar-price"
                type="number"
                id="priceLow"
                name="priceLow"
                onChange={(e) => dispatch(setPriceLow(e.target.value))}
              ></input>
              <br />
              Do{' '}
              <input
                className="searchBar-price"
                type="number"
                id="priceHigh"
                name="priceHigh"
                onChange={(e) => dispatch(setPriceHigh(e.target.value))}
              ></input>
            </div>
          </Col>

          <Col md={2}>
            <div className="searchBar-tile searchBar-button-tile">
              <NavLink to="/search" className="link">
                <button className="searchBar-button">Szukaj</button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default SearchBarComponent;

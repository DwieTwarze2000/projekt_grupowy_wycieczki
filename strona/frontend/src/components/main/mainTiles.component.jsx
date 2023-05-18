import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { setCountry } from '../../actions';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import gbFlag from '../../images/flags/gbFlag.jpg';
import franceFlag from '../../images/flags/franceFlag.avif';
import czechFlag from '../../images/flags/czechFlag.jpg';
import greeceFlag from '../../images/flags/greeceFlag.jpg';
import turkeyFlag from '../../images/flags/turkeyFlag.jpg';

const MainTilesComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="mainTiles">
      <Row>
        <Col md={6} className="mainTiles-col">
          <NavLink to="/search" onClick={() => dispatch(setCountry('Francja'))} className="link">
            <div className="mainTiles-tile france">
              <h1 className="mainTiles-title">
                Francja <img className="mainTiles-flag" src={franceFlag}></img>
              </h1>
            </div>
          </NavLink>
        </Col>
        <Col md={6} className="mainTiles-col">
          <NavLink to="/search" onClick={() => dispatch(setCountry('Turcja'))} className="link">
            <div className="mainTiles-tile czech">
              <h1 className="mainTiles-title">
                Turcja <img className="mainTiles-flag" src={turkeyFlag}></img>
              </h1>
            </div>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mainTiles-col">
          <NavLink to="/search" onClick={() => dispatch(setCountry('Wielka Brytania'))} className="link">
            <div className="mainTiles-tile gb">
              <h1 className="mainTiles-title">
                Wielka Brytania <img className="mainTiles-flag" src={gbFlag}></img>
              </h1>
            </div>
          </NavLink>
        </Col>
        <Col md={6} className="mainTiles-col">
          <NavLink to="/search" onClick={() => dispatch(setCountry('Grecja'))} className="link">
            <div className="mainTiles-tile greece">
              <h1 className="mainTiles-title">
                Grecja <img className="mainTiles-flag" src={greeceFlag}></img>
              </h1>
            </div>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default MainTilesComponent;

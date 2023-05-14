import React from 'react';
import { Row, Col } from 'react-bootstrap';

import gbFlag from './../images/flags/gbFlag.jpg';
import franceFlag from './../images/flags/franceFlag.avif';
import czechFlag from './../images/flags/czechFlag.jpg';
import greeceFlag from './../images/flags/greeceFlag.jpg';

const MainTilesComponent = () => {
  return (
    <div className="mainTiles">
      <Row>
        <Col md={6} className="mainTiles-col">
          <div className="mainTiles-tile france">
            <h1 className="mainTiles-title">
              Francja <img className="mainTiles-flag" src={franceFlag}></img>
            </h1>
          </div>
        </Col>
        <Col md={6} className="mainTiles-col">
          <div className="mainTiles-tile czech">
            <h1 className="mainTiles-title">
              Czechy <img className="mainTiles-flag" src={czechFlag}></img>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mainTiles-col">
          <div className="mainTiles-tile gb">
            <h1 className="mainTiles-title">
              Wielka Brytania <img className="mainTiles-flag" src={gbFlag}></img>
            </h1>
          </div>
        </Col>
        <Col md={6} className="mainTiles-col">
          <div className="mainTiles-tile greece">
            <h1 className="mainTiles-title">
              Grecja <img className="mainTiles-flag" src={greeceFlag}></img>
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainTilesComponent;

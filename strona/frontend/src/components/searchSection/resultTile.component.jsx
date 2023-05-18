import React from 'react';
import { Row, Col } from 'react-bootstrap';
import pobrane from '../../images/pobrane.jpg';

const ResultTileComponent = (info) => {
  const data = info.info;

  return (
    <div className="result-tile">
      <Row>
        <Col xl={4}>
          <div className="result-tile-image">
            <img src={pobrane} alt="result-tile" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="result-tile-info">
            <p>Podstawowe informacje:</p>
            {data.country}
            <br />
            {data.dateFrom} - {data.dateTo}
            <br />
            {data.food}
            <br />
            {data.type}
          </div>
        </Col>
        <Col xl={4}>
          <div className="result-tile-price">
            <p className="result-tile-price-title">Cena za osobę:</p>
            <span className="result-tile-price-price">{data.price} zł</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResultTileComponent;

import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ResultTileComponent = (info) => {
  const data = info.info;
  // mainImage: './src/images/results/italy/mainItaly.jpg'

  return (
    <div className="result-tile">
      <Row>
        <Col xl={4}>
          <div className="result-tile-image">
            <img src={data.mainImage} alt="mainImage" />
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
            {data.tripType}
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

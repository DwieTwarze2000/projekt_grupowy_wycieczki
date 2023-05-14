import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ResultsComponent from './results.component';
import FilterComponent from './filter.component';

const SearchSectionComponent = () => {
  return (
    <div className="search-section">
      <Row>
        <Col md={3}>
          <FilterComponent />
        </Col>
        <Col md={9}>
          <ResultsComponent />
        </Col>
      </Row>
    </div>
  );
};

export default SearchSectionComponent;

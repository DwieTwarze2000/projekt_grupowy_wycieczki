import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ResultsComponent from './results/components/results.component';
import FilterComponent from './filters/components/filter.component';

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

import React from 'react';
import ResultTileComponent from './resultTile.component';

const ResultsComponent = () => {

  const info = {
    country: 'Francja',
    dateFrom: '20.03.2023',
    dateTo: '27.03.2023',
    food: 'All inclusive',
    type: 'Zwiedzanie',
    price: 6900,
    image: '',
  };
  return (
    <div className="search-results">
      <h2>Wyniki wyszukiwania: </h2>

      <ResultTileComponent info={info} />
      <ResultTileComponent info={info} />
      <ResultTileComponent info={info} />
      <ResultTileComponent info={info} />
      <ResultTileComponent info={info} />
      <ResultTileComponent info={info} />
    </div>
  );
};

export default ResultsComponent;

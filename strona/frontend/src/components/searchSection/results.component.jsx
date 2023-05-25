import React from 'react';
import ResultTileComponent from './resultTile.component';
import { NavLink } from 'react-router-dom';
import { db } from '../../db';
import { useSelector } from 'react-redux';

const ResultsComponent = () => {
  const country = useSelector((state) => state.country);
  const date = useSelector((state) => state.date);
  // change format => 2023-05-11 to => 11.05.2023

  const food = useSelector((state) => state.food);
  const tripType = useSelector((state) => state.tripType);
  const priceLow = useSelector((state) => state.priceLow);
  const priceHigh = useSelector((state) => state.priceHigh);

  const renderResults = () => {
    const results = db.filter((item) => {
      if (country !== 'Wszystkie' && item.country !== country) {
        return false;
      }

      let formattedDate = new Date(date);
      let formattedDateFrom = new Date(item.dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3'));
      let formattedDateTo = new Date(item.dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3'));

      if (formattedDate !== '' && (formattedDateFrom > formattedDate || formattedDateTo < formattedDate)) {
        return false;
      }

      if (food !== 'Wszystkie' && item.food !== food) {
        return false;
      }

      if (tripType !== 'Wszystkie' && item.tripType !== tripType) {
        return false;
      }

      if (priceLow !== '' && item.price < priceLow) {
        return false;
      }

      if (priceHigh !== '' && item.price > priceHigh) {
        return false;
      }

      return true;
    });

    return results.length === 0 ? (
      <p>Brak wyników</p>
    ) : (
      results.map((item) => {
        return (
          <NavLink to={`/search/${item.id}`} className="link" key={item.id}>
            <ResultTileComponent info={item} key={item.id} />
          </NavLink>
        );
      })
    );
  };

  return (
    <div className="search-results">
      <h2>Wyniki wyszukiwania: </h2>

      {renderResults()}
    </div>
  );
};

export default ResultsComponent;

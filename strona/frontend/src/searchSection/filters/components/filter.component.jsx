import React from 'react';

const FilterComponent = () => {
  return (
    <div className="filters">
      <h2>FILTRY</h2>
      <br />
      <label className="filter-label">Kraj</label>{' '}
      <select className="filter-select">
        <option selected>Wszytkie</option>
        <option>Włochy</option>
        <option>Francja</option>
        <option>Portugalia</option>
      </select>
      <br />
      <label className="filter-label">Data</label>
      <input className="filter-date" type="date"></input>
      <br />
      <label className="filter-label">Wyżywienie</label>
      <select className="filter-select">
        <option selected>Wszystkie</option>
        <option>All Inclusive</option>
        <option>W pyte</option>
        <option>Brak</option>
      </select>
      <br />
      <label className="filter-label">Cel Wycieczki</label>
      <select className="filter-select">
        <option selected>Wszystkie</option>
        <option>Zwiedzanie</option>
        <option>Wypoczynek</option>
        <option>Chillera i utopia</option>
      </select>
      <br />
      <label className="filter-label">Cena za osobę (zł):</label>
      <br />
      Od <input className="filter-price" type="number"></input>
      <br />
      Do <input className="filter-price" type="number"></input>
      <br />
      <button className="filter-button">FILTRUJ</button>
    </div>
  );
};

export default FilterComponent;

import React from 'react';

const FilterComponent = () => {
  return (
    <div className="filters">
      <h2>Filtry</h2>
      <p>
        <label className="filter-label">Kraj</label>
        <br />
        <select className="filter-select">
          <option selected>Wszytkie</option>
          <option>Włochy</option>
          <option>Francja</option>
          <option>Portugalia</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Data</label> <br />
        <input className="filter-date" type="date"></input>
      </p>
      <p>
        <label className="filter-label">Wyżywienie</label>
        <br />
        <select className="filter-select">
          <option selected>Wszystkie</option>
          <option>All Inclusive</option>
          <option>W pyte</option>
          <option>Brak</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Cel Wycieczki</label>
        <br />
        <select className="filter-select">
          <option selected>Wszystkie</option>
          <option>Zwiedzanie</option>
          <option>Wypoczynek</option>
          <option>Chillera i utopia</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Cena za osobę (zł):</label>
        <br />
        Od <br />
        <input className="filter-price" type="number"></input>
        <br />
        Do <br />
        <input className="filter-price" type="number"></input>
        <br />
      </p>

      <p>
        <button className="filter-button">FILTRUJ</button>
      </p>
    </div>
  );
};

export default FilterComponent;

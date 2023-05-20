import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry, setDate, setFood, setTripType, setPriceLow, setPriceHigh } from '../../actions';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const currentCountry = useSelector((state) => state.country);
  const currentDate = useSelector((state) => state.date);
  const currentFood = useSelector((state) => state.food);
  const currentTripType = useSelector((state) => state.tripType);
  const currentPriceLow = useSelector((state) => state.priceLow);
  const currentPriceHigh = useSelector((state) => state.priceHigh);

  return (
    <form>
    <div className="filters">
      <h2>Filtry</h2>
      <p>
        <label className="filter-label">Kraj</label>
        <br />
        <select className="filter-select" id="country" name="country" onChange={(e) => dispatch(setCountry(e.target.value))}>
          <option selected={currentCountry == 'Wszystkie'}>Wszystkie</option>
          <option selected={currentCountry == 'Dania'}>Dania</option>
          <option selected={currentCountry == 'Finlandia'}>Finlandia</option>
          <option selected={currentCountry == 'Francja'}>Francja</option>
          <option selected={currentCountry == 'Grecja'}>Grecja</option>
          <option selected={currentCountry == 'Izrael'}>Izrael</option>
          <option selected={currentCountry == 'Szwecja'}>Szwecja</option>
          <option selected={currentCountry == 'Turcja'}>Turcja</option>
          <option selected={currentCountry == 'Wielka Brytania'}>Wielka Brytania</option>
          <option selected={currentCountry == 'Włochy'}>Włochy</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Data</label> <br />
        <input
          className="filter-date"
          type="date"
          id="date"
          name="date"
          value={currentDate}
          onChange={(e) => dispatch(setDate(e.target.value))}
        ></input>
      </p>
      <p>
        <label className="filter-label">Wyżywienie</label>
        <br />
        <select className="filter-select" id="food" name="food" onChange={(e) => dispatch(setFood(e.target.value))}>
          <option selected={currentFood == 'Wszystkie'}>Wszystkie</option>
          <option selected={currentFood == 'All Inclusive'}>All Inclusive</option>
          <option selected={currentFood == '2 posiłki'}>2 posiłki</option>
          <option selected={currentFood == 'Bez wyżywienia'}>Bez wyżywienia</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Cel Wycieczki</label>
        <br />
        <select className="filter-select" id="tripType" name="tripType" onChange={(e) => dispatch(setTripType(e.target.value))}>
          <option selected={currentTripType == 'Wszystkie'}>Wszystkie</option>
          <option selected={currentTripType == 'Wypoczynek'}>Wypoczynek</option>
          <option selected={currentTripType == 'Zwiedzanie'}>Zwiedzanie</option>
          <option selected={currentTripType == 'Wypoczynek i zwiedzanie'}>Wypoczynek i zwiedzanie</option>
        </select>
      </p>
      <p>
        <label className="filter-label">Cena za osobę (zł):</label>
        <br />
        Od <br />
        <input
          className="filter-price"
          type="number"
          id="priceLow"
          name="priceLow"
          value={currentPriceLow}
          onChange={(e) => dispatch(setPriceLow(e.target.value))}
        ></input>
        <br />
        Do <br />
        <input
          className="filter-price"
          type="number"
          id="priceHigh"
          name="priceHigh"
          value={currentPriceHigh}
          onChange={(e) => dispatch(setPriceHigh(e.target.value))}
        ></input>
        <br />
      </p>
    </div>
    </form>
  );
};

export default FilterComponent;

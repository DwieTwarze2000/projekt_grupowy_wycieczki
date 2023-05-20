import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { db } from '../../db';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonAmount } from '../../actions';
import { NavLink } from 'react-router-dom';

const ResultComponent = () => {
  const personAmount = useSelector((state) => state.personAmount);

  const getId = () => {
    const url = window.location.href;
    const id = url.split('/')[4];
    return id;
  };

  const getData = () => {
    const id = getId();
    const result = db.filter((item) => item.id.toString() === id);
    return result[0];
  };

  const showSummary = () => {
    return personAmount > 0;
  };

  const dispatch = useDispatch();
  const data = getData();

  console.log(data);

  return (
    <div className="result">
      <div className="result__header">
        <h2>{data.country}</h2>
      </div>

      <Row>
        <Col md={9}>
          <img src={data.mainImage} alt="main" className="result__mainImage" />
        </Col>
        <Col md={3}>
          <div className="result__reservationInfo">
            <p className="check">Sprawdź cenę!</p>
            <label>Liczba osób: </label>
            <input type="number" value={personAmount} onChange={(e) => dispatch(setPersonAmount(e.target.value))} />
            {showSummary() && (
              <>
                <p className="summary">Podsumowanie:</p>
                <p className="summaryResult">{data.price * personAmount} zł</p>
                <NavLink to="/search" className="link">
                  <button className="searchBar-button">Zarezerwuj</button>
                </NavLink>
              </>
            )}
          </div>
        </Col>
      </Row>

      <div className="result__info">
        <p>Szczegółowe informacje:</p>
        <ul>
          {data.details.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div className="result__tripSchedule">
        <p>Plan wycieczki:</p>
        {data.days.map((item) =>
          item.day % 2 === 1 ? (
            <div className="result__tripSchedule__day">
              <Row>
                <Col md={5}>
                  <div className="result__tripSchedule__day__image">
                    <img src={item.dayImage} alt="day" />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="result__tripSchedule__day__info">
                    <p className="title">Dzień {item.day}</p>
                    <p>{item.description}</p>
                    {item.attractions.length != 0 && (
                      <>
                        <p>Atrakcje:</p>
                        <ul>
                          {item.attractions.map((attraction) => (
                            <li key={attraction}>{attraction}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <div className="result__tripSchedule__day">
              <Row>
                <Col md={7}>
                  <div className="result__tripSchedule__day__info">
                    <p className="title">Dzień {item.day}</p>
                    <p>{item.description}</p>
                    {item.attractions.length != 0 && (
                      <>
                        <p>Atrakcje:</p>
                        <ul>
                          {item.attractions.map((attraction) => (
                            <li key={attraction}>{attraction}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </Col>
                <Col md={5}>
                  <div className="result__tripSchedule__day__image">
                    <img src={item.dayImage} alt="day" />
                  </div>
                </Col>
              </Row>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ResultComponent;

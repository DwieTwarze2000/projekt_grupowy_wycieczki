import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { db } from '../../db';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonAmount } from '../../actions';
import { NavLink } from 'react-router-dom';
import goBack from '../../images/goBack.png';

const ReservationComponent = () => {
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

  const data = getData();

  return (
    <div className="reservation">
      <div className="result__header">
        <NavLink to={`/search/${data.id}`} className="link" key={data.id}>
          <h2>
            <img src={goBack} className="goBack" alt="goBack" />
            Powrót do oferty
          </h2>
        </NavLink>
      </div>
      <div className="reservation__data">
        <div className="reservation__data__header">
          <h2>1. Dane rezerwującego: </h2>
        </div>
        <table>
          <tr>
            <td>
              <label>Imię: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Nazwisko: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Płeć: </label>
            </td>
            <td>
              <div class="radio">
                <span class="woman">
                  <input type="radio" value="kobita" name="plec" /> Kobieta
                </span>
                <input type="radio" value="mezczyzna" name="plec" /> Mężczyzna
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label>Data urodzenia: </label>
            </td>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Ulica: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Numer domu: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Kod pocztowy: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Miasto: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Numer telefonu: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Adres e-mail: </label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>

        <br />
      </div>

      {personAmount > 1 ? (
        <div className="reservation__data">
          <div className="reservation__data__header">
            <h2>2. Pozostali uczestnicy: </h2>
          </div>

          {Array.from({ length: personAmount - 1 }, (_, index) => (
            <>
              <div key={index} className="reservation_person_title">
                <h3>Uczestnik {index + 2}</h3>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Płeć</label>
                    </td>
                    <td>
                      <div className="radio">
                        <span className="woman">
                          <input type="radio" value="kobita" name={`plec${index}`} /> Kobieta
                        </span>
                        <input type="radio" value="mezczyzna" name={`plec${index}`} /> Mężczyzna
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Imię</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Nazwisko</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Data urodzenia</label>
                    </td>
                    <td>
                      <input type="date" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ))}
        </div>
      ) : null}

      <div className="reservation_button">
        <NavLink to="/search" className="link">
          <button className="searchBar-button">Zarezerwuj</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ReservationComponent;

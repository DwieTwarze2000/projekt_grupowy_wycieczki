import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderComponent from './common/header/components/header.component';
import SearchBarComponent from './main/searchBar/components/searchBar.component';
import MainTilesComponent from './main/mainTiles/components/mainTiles.component';
import FooterComponent from './common/footer/components/footer.component';

import SearchSectionComponent from './searchSection/searchSection.component';

const AppComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <SearchBarComponent />
              <MainTilesComponent />
            </Fragment>
          }
        />
        <Route path="/search" element={<SearchSectionComponent />} />
      </Routes>
      <FooterComponent />
    </Fragment>
  );
};

export default AppComponent;

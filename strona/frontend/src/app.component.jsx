import React, { Fragment } from 'react';
import HeaderComponent from './main/header/header.component';
import SearchBarComponent from './main/searchBar/components/searchBar.component';
import MainTilesComponent from './main/mainTiles/components/mainTiles.component';
const AppComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <SearchBarComponent />
      <MainTilesComponent />
    </Fragment>
  );
};

export default AppComponent;

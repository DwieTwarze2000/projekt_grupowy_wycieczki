import React, { Fragment } from 'react';
import HeaderComponent from './common/header/components/header.component';
import SearchBarComponent from './main/searchBar/components/searchBar.component';
import MainTilesComponent from './main/mainTiles/components/mainTiles.component';
import FooterComponent from './common/footer/components/footer.component';
const AppComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <SearchBarComponent />
      <MainTilesComponent />
      <FooterComponent />
    </Fragment>
  );
};

export default AppComponent;

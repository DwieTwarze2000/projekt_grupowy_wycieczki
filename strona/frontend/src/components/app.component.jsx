import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import HeaderComponent from './header/header.component'
import SearchBarComponent from './main/searchBar.component'
import MainTilesComponent from './main/mainTiles.component'
import FooterComponent from './footer/footer.component'

import SearchSectionComponent from './searchSection/searchSection.component'
import ResultComponent from './results/result.component'

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
        <Route path="/search/:id" element={<ResultComponent />} />
      </Routes>
      <FooterComponent />
    </Fragment>
  )
}

export default AppComponent

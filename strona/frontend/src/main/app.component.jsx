import React, { Fragment } from "react";
import HeaderComponent from "./header/header.component";
import SearchBarComponent from "./searchBar/components/searchBar.component";
const AppComponent = () => {
    return (
        <Fragment>
            <HeaderComponent />
            <SearchBarComponent />
        </Fragment>
    );
};

export default AppComponent;

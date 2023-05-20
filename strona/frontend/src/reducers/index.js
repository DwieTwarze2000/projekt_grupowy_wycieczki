import {combineReducers} from 'redux';

const countryReducer = (state = 'Wszystkie', action) => {
    switch (action.type) {
        case 'SET_COUNTRY':
            return action.payload;
        default:
            return state;
    }
}

const dateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload;
        default:
            return state;
    }
}

const foodReducer = (state = 'Wszystkie', action) => {
    switch (action.type) {
        case 'SET_FOOD':
            return action.payload;
        default:
            return state;
    }
}

const tripTypeReducer = (state = 'Wszystkie', action) => {
    switch (action.type) {
        case 'SET_TRIP_TYPE':
            return action.payload;
        default:
            return state;
    }
}

const priceLowReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_PRICE_LOW':
            return action.payload;
        default:
            return state;
    }
}

const priceHighReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_PRICE_HIGH':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    country: countryReducer,
    date: dateReducer,
    food: foodReducer,
    tripType: tripTypeReducer,
    priceLow: priceLowReducer,
    priceHigh: priceHighReducer
});







export const setCountry = (country) => {
    return {
        type: 'SET_COUNTRY',
        payload: country
    };
}

export const setDate = (date) => {
    return {
        type: 'SET_DATE',
        payload: date
    };
}

export const setFood = (food) => {
    return {
        type: 'SET_FOOD',
        payload: food
    };
}

export const setTripType = (tripType) => {
    return {
        type: 'SET_TRIP_TYPE',
        payload: tripType
    };
}

export const setPriceLow = (price) => {
    return {
        type: 'SET_PRICE_LOW',
        payload: price
    };
}

export const setPriceHigh = (price) => {
    return {
        type: 'SET_PRICE_HIGH',
        payload: price
    };
}
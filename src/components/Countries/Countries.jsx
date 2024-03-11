import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])

    // fetching data using side effect
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map((country) => <Country key={country.cca3} country={country} />)
            }
        </div>
    );
};

export default Countries;
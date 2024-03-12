import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    // fetching data using side effect
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flags => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from an arry in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <div>
                <ul>
                    {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
                </ul>
                <div className="flag-container">
                    {visitedFlags.map((flag, index) => <img key={index} src={flag} />)}
                </div>
                </div>
            </div>
            <div className="country-container">
                {
                    countries.map((country) => <Country key={country.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} handleVisitedFlags = {handleVisitedFlags} />)
                }
            </div>
        </div>
    );
};

export default Countries;
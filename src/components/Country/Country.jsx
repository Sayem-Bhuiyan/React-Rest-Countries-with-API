import PropTypes from 'prop-types'
import './Country.css';
import { useState } from 'react';

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    console.log(country)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Populattion: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited': 'Visit'}</button>
            {visited ? 'I have visited this country.': 'I want to visit'}
        </div>
    );
};
Country.propTypes = {
    country: PropTypes.object.isRequired,
}
export default Country;
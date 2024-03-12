import PropTypes from 'prop-types';

const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h4><small>Country Data: {country.name.common}</small></h4>
        </div>
    );
};

CountryData.propTypes = {
    country: PropTypes.object,
    handleVisitedCountry: PropTypes.func,
    handleVisitedFlags: PropTypes.func,
}

export default CountryData;
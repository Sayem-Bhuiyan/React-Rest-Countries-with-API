import PropTypes from 'prop-types';
import CountryData from '../CountryData/CountryData';

const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
            <CountryData
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            />
        </div>
    );
};

CountryDetail.propTypes = {
    country: PropTypes.object.isRequired,
    handleVisitedCountry: PropTypes.func,
    handleVisitedFlags: PropTypes.func,
}

export default CountryDetail;
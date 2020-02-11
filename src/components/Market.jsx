import React from 'react';
import PropTypes from 'prop-types';
import './Market.css'

function Market(props){
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <h3>{props.day}</h3>
          <h3>{props.location}</h3>
        </div>
        <div className='flip-card-back'>
          <h3>{props.hours}</h3>
          <p><em>{props.booth}</em></p>
        </div>
      </div>
    </div>
  );
}

Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default Market;

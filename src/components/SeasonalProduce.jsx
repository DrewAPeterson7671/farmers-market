import React from 'react';
import PropTypes from 'prop-types';
import './SeasonalProduce.css'

function Seasonal(props){
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <h3>{props.month}</h3>
        </div>
        <div className='flip-card-back'>
          <p><em>{props.selection}</em></p>
        </div>
      </div>
    </div>
  );
}

Seasonal.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default Seasonal;

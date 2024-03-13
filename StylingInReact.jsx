import React from 'react';
import './style.css'

import home from './home.module.css';

const StylingInReact = () => {
  return (
    <>
     <h2 className='heading'>3 Ways For Style In React (External Style) </h2> 
     <h2 style={{ backgroundColor: 'pink', color: 'purple' }}>3 Ways For Style In React (Inline Style) </h2> 
     <h2 className={home.heading}>3 Ways For Style In React (CSS Module Style) </h2> 
    </>
  );
}

export default StylingInReact;

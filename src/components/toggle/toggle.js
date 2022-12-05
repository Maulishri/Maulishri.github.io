import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.css';

export default function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  }
  return (
    <div className="toggle" >
      <div className='toggle-area' style={{backgroundColor : theme.state.darkMode? 'rgb(44, 32, 66)':'lightblue'}}>
          <img className='t-icon' src='https://img.icons8.com/color/48/000000/sun.png'  alt='sun'/>
          <img className='t-icon' src="https://assets.codepen.io/210284/moon.png" alt='moon'/>
      </div>
      <div className='toggle-button' 
        onClick={handleClick} 
        style={{left : theme.state.darkMode ? 0:23 , 
        border : theme.state.darkMode? '2px solid rgb(44, 32, 66)':'2px solid lightblue'}}
      >
      </div>
    </div>
  )
}

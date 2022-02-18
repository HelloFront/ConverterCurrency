import React from 'react';
import LogoUsa from '../../assets/United_States.svg';
import LogoEurope from '../../assets/Europe.png'


const Header = (props) => {
  const { data } = props;
  
  return ( 
    <header>
      <nav className="info">
        <ul>
          <li><img 
            src={LogoUsa} 
            alt="icon" 
            className='usa_icon' 
          />{data? Number(data[0].buy).toFixed(2) : ''} <span>UAH</span></li>
          <li><img 
            src={LogoEurope} 
            alt="icon" 
          />{data? Number(data[1].buy).toFixed(2) : ''} <span>UAH</span></li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Header;
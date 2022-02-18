import React, { useEffect, useRef, useState } from 'react';

const ComponentEuro = (props) => {
  const { inputValue, currentCurrency, setInputValue } = props;
  const [ stateValue, setStateValue ] = useState([]);
  const labelRef = useRef()
  const EURO_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[1].buy;
  const USD_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[0].buy;

  useEffect(() => { 
    setStateValue(inputValue)
  }, [inputValue])

  useEffect(() => {     // изменение цвета при смене конвертационной валюты
    labelRef.current.style.backgroundColor = '#2a2a2a'
    setTimeout(() => {
      labelRef.current.style.backgroundColor = '#0e0c0c'
    }, 100)
  }, [currentCurrency]);


  const result = Math.round(stateValue * USD_CURRENCY / EURO_CURRENCY); // Вычисление конвертации
  const changeMainInputValue = (e) => {   // Изменение конвертационной валюты с другого инпута
    const value = e.target.value;

    if(value) {
      const result = (value * EURO_CURRENCY / USD_CURRENCY).toFixed(2);
      setInputValue(result);

    } else setInputValue(0);
  }

  return ( 
    <div className="currency_converter_item">
      <input 
        value={ result ? result : '' }
        type="text" 
        onChange={(e) => changeMainInputValue(e)}
      />
      <label ref={ labelRef }>EURO</label>
    </div>
   );
}
 
export default ComponentEuro;
import React, { useEffect, useRef, useState } from 'react';

const ComponentUah = (props) => {
  const { inputValue, currentCurrency, setInputValue } = props;
  const [ stateValue, setStateValue ] = useState([]);
  const USD_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[0].buy;
  const EURO_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[1].buy;
  const labelRef = useRef()
  let result = 0;

  useEffect(() => { 
    setStateValue(inputValue)
  }, [inputValue])

  useEffect(() => {     // изменение цвета при смене конвертационной валюты
    labelRef.current.style.backgroundColor = '#2a2a2a'
    setTimeout(() => {
      labelRef.current.style.backgroundColor = '#0e0c0c'
    }, 100)
  }, [currentCurrency])

  switch(currentCurrency) {   // Вычисление конвертации
    case 'USD' : {
      result = Math.round(stateValue * USD_CURRENCY);
      break;
    }
    case 'EURO' : {
      result = Math.round(stateValue * EURO_CURRENCY);
      break;
    }
  }

  const changeMainInputValue = (e) => {   // Изменение конвертационной валюты с другого инпута
    const value = e.target.value;

    if(value) {
      switch(currentCurrency) {
        case 'USD' : {
          const result = (value / USD_CURRENCY).toFixed(2);
          setInputValue(result);
          break;
        }
        case 'EURO' : {
          const result = (value / EURO_CURRENCY).toFixed(2);
          setInputValue(result);
          break;
        }
      }
    } else setInputValue(0);
  }

  return ( 
    <div className="currency_converter_item">
      <input 
        value={ result ? result : '' } 
        type="text" 
        onChange={(e) => changeMainInputValue(e)}
      />
      <label ref={ labelRef }>UAH</label>
    </div>
   );
}
 
export default ComponentUah;
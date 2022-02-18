import React, { useEffect, useRef, useState } from 'react';

const ComponentEuro = (props) => {
  const { inputValue, currentCurrency, setInputValue, currentComponent, setCurrentComponent } = props;
  const [ stateValue, setStateValue ] = useState([]);

  const EURO_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[1].buy;
  const USD_CURRENCY = JSON.parse(localStorage.getItem('currencyData'))[0].buy;
  const labelRef = useRef()
  let result = 0;

  useEffect(() => { 
    if(currentComponent !== 'EURO') setStateValue(inputValue)
  }, [inputValue])

  useEffect(() => {     // изменение цвета при смене конвертационной валюты
    labelRef.current.style.backgroundColor = '#2a2a2a'
    setTimeout(() => {
      labelRef.current.style.backgroundColor = '#0e0c0c'
    }, 100)
  }, [currentCurrency]);


  if(currentComponent !== 'EURO') { // Вычисление конвертации
    switch(currentCurrency) {
      case 'USD' : {
        result = (stateValue * USD_CURRENCY / EURO_CURRENCY).toFixed(2);
        break;
      }
      case 'UAH' : {
        result = (stateValue / EURO_CURRENCY).toFixed(2);
        break;
      }
      default : {
        return result;
      }
    }
  } else result = stateValue;


  const changeMainInputValue = (e) => {   // Изменение конвертационной валюты с другого инпута
    const value = e.target.value;
    setCurrentComponent('EURO')
    setStateValue(value)

    if(Math.ceil(value)) {
      switch(currentCurrency) {
        case 'USD' : {
          const result = (value * EURO_CURRENCY / USD_CURRENCY).toFixed(2);
          setInputValue(result);
          break;
        }
        case 'UAH' : {
          const result = (value * EURO_CURRENCY).toFixed(2);
          setInputValue(result);
          break;
        }
        default : {
          return result;
        }
      }

    } else setInputValue(0);
  }

  return ( 
    <div className="currency_converter_item">
      <input 
        value={ result === '0.00' ? '' : result }
        type="text" 
        onChange={(e) => changeMainInputValue(e)}
      />
      <label ref={ labelRef }>EURO</label>
    </div>
   );
}
 
export default ComponentEuro;
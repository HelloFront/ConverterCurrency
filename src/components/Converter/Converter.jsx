import React, { useState } from 'react';
import ComponentUsd from './components/ComponentUsd';
import ComponentUah from './components/ComponentUah';
import ComponentEuro from './components/ComponentEuro';
import MainInput from './components/MainInput';

const Converter = () => {
  const [ currentCurrency, setCurrentCurrency ] = useState('UAH')
  const [ inputValue, setInputValue ] = useState('')
  const [ currentComponent, setCurrentComponent ] = useState('')

  return ( 
      <div className="converter">
        <h3>Converter currency</h3>
        <div className="inner_block">
          <MainInput  
            inputValue={ inputValue && inputValue }
            setCurrentCurrency={ setCurrentCurrency }
            setCurrentComponent={ setCurrentComponent }
            setInputValue={ setInputValue }
          />
          <div className="out_converter_currency">
            {currentCurrency !== 'USD' && <ComponentUsd 
              inputValue={ inputValue }
              currentCurrency={ currentCurrency }
              currentComponent={ currentComponent }
              setCurrentComponent={ setCurrentComponent }
              setInputValue={ setInputValue }
            />}
            {currentCurrency !== 'EURO' && <ComponentEuro 
              inputValue={ inputValue }
              currentCurrency={ currentCurrency }
              currentComponent={ currentComponent }
              setCurrentComponent={ setCurrentComponent }
              setInputValue={ setInputValue }
            />}
            { currentCurrency !== 'UAH'  && <ComponentUah
              inputValue={ inputValue } 
              currentCurrency={ currentCurrency }
              currentComponent={ currentComponent }
              setCurrentComponent={ setCurrentComponent }
              setInputValue={ setInputValue }
            />}
          </div>
        </div>
      </div>
    );
}
 
export default Converter;
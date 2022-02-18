import React, { useState } from 'react';
import ComponentUsd from './components/ComponentUsd';
import ComponentUah from './components/ComponentUah';
import ComponentEuro from './components/ComponentEuro';
import MainInput from './components/MainInput';

const Converter = () => {
  const [ currentCurrency, setCurrentCurrency ] = useState('USD')
  const [ inputValue, setInputValue ] = useState('')

  return ( 
      <div className="converter">
        <h3>Converter currency</h3>
        <div className="inner_block">
          <MainInput  
            inputValue={ inputValue && inputValue }
            setCurrentCurrency={ setCurrentCurrency }
            setInputValue={ setInputValue }
          />
          <div className="out_converter_currency">
            {currentCurrency !== 'USD' && <ComponentUsd 
              inputValue={ inputValue }
              currentCurrency={ currentCurrency }
              setInputValue={ setInputValue }
            />}
            {currentCurrency !== 'EURO' && <ComponentEuro 
              inputValue={ inputValue }
              currentCurrency={ currentCurrency }
              setInputValue={ setInputValue }
            />}
            <ComponentUah
              inputValue={ inputValue } 
              currentCurrency={ currentCurrency }
              setInputValue={ setInputValue }
            />
          </div>
        </div>
      </div>
    );
}
 
export default Converter;
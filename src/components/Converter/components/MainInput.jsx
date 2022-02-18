import React from 'react';

const MainInput = (props) => {
  const { setCurrentCurrency, inputValue, setInputValue, setCurrentComponent } = props

  return ( 
    <form>
      <input 
        type="text" 
        placeholder='Enter value..' 
        value={ inputValue ? inputValue : '' }
        onChange={(e) => {
          setInputValue(e.target.value)
          setCurrentComponent('')
        }}
      />
      <select onChange={(e) => setCurrentCurrency(e.target.value)}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EURO">EURO</option>
      </select>
    </form>
   );
}
 
export default MainInput;
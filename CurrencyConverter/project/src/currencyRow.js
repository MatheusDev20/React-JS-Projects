import React from 'react';
import './App.css'


 function CurrencyRow (props) {
   const {currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount} = props
  return (
      <>
    <input type="number" className="input" value={amount} onChange={onChangeAmount} />
    <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
    </select>
    </>



  );
}
export default CurrencyRow 
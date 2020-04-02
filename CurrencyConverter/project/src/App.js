import React, { useEffect, useState } from 'react';
import CurrencyRow from './currencyRow'
import './App.css';

function App() {
  const BASE_URL = 'https://api.exchangeratesapi.ilatesto/'
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState([])
  const [toCurrency, setToCurrency] = useState([])
  const [exchangeRates, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount , fromAmount
  if(amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRates
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRates
  }

  useEffect(()=> {
    fetch(BASE_URL)
    .then(( res )=> res.json())
    .then(data=> {
      console.log(data)
      const firstCurrency = Object.keys(data.rates)[12]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
    
  }, [])
  
  useEffect(()=> {
    if(fromCurrency != null && toCurrency != null) {
        fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  },[fromCurrency, toCurrency])
  const handleFromChangeAmount = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  const handleToChangeAmount = e => {
    setAmount(e.target.value) 
     setAmountInFromCurrency(false)

  }
  return (
    <div className="App">
    <>
         <h1>Converter</h1>
         <CurrencyRow
         currencyOptions={currencyOptions}
         selectedCurrency={fromCurrency}
         onChangeCurrency={ e => setFromCurrency(e.target.value)}
         onChangeAmount={handleFromChangeAmount}
         amount={fromAmount}
         />
         <div className="equals">=</div>    
         <CurrencyRow
         currencyOptions={currencyOptions}
         selectedCurrency={toCurrency}
         onChangeCurrency={ e => setToCurrency(e.target.value)}
         onChangeAmount={handleToChangeAmount}
         amount={toAmount}
         />


    </>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function ExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const apiKey = '9D9E5651-8A9B-4DC7-9093-6132A1A5509C'; 
  const asset = 'CAKE';

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=${apiKey}`
        );
        const data = await response.json();
        setExchangeRate(data.rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    }
    fetchExchangeRate();
  }, [apiKey, asset]);


    return (
      <div>
        {exchangeRate !== null ? (
        <p>
          ${parseFloat(exchangeRate).toFixed(3)}
        </p>
      ) : (
        <p></p>
      )}
      </div>
    );
};

export default ExchangeRate;
import React, {useEffect, useState} from "react";
import './currency.scss'

const Currency = ({ currency }) => {

    currency = currency.toUpperCase();

    const [currencyTo, setCurrencyTo] = useState([]);

    const currenciesList = `${currency},USD,EUR,RUB`

    useEffect(() => {
        async function getCurrency() {
            const KeyCurrency = 'd39b0add2cc56a6443a41abb860c0fc8';
            const url = `http://api.currencylayer.com/live?access_key=${KeyCurrency}&currencies=${currenciesList}&format=1`;
            const result = await fetch(url);
            const data = await result.json();
            console.log(data.quotes);
            console.log(data.quotes.USDEUR);

            if (data['success'] === false) {
                setCurrencyTo([1]);
            } else {
                let currentUSD = data.quotes[`USD${currency}`];
                let USDcurrent = 1/currentUSD;
                let dolEur = data.quotes.USDEUR;
                let dolRub = data.quotes.USDRUB;
                let res = [USDcurrent, dolEur/currentUSD, dolRub/currentUSD];
                setCurrencyTo(res);

            }
        }
        getCurrency();
    }, [currenciesList, currency]);

    return (
        <div>
            <div>1 {currency} = {Math.floor(currencyTo[0] * 1000) / 1000} USD</div>
            <div>1 {currency} = {Math.floor(currencyTo[1] * 1000) / 1000} EUR</div>
            <div>1 {currency} = {Math.floor(currencyTo[2] * 1000) / 1000} RUB</div>
        </div>
    )
}

export default Currency;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.development';

import Transaction from './Transaction';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;
console.log("API_URL:", API_URL);

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/transactions`)
            .then((res)=>{
                setTransactions(res.data);
            }).catch((err)=>{
                throw err;
            })
        }, []);


    /* Find the Bank Account Total (sum of transaction.amount) */
    const numbersToAddArray = transactions.map((transaction)=>{
        return transaction.amount;
    })
    const findSum = numbersToAddArray.reduce(function(a, b){
        return a + b;
    }, 0);

    return(
        <div className="Transactions">
            <div>
                {/* {console.log("numbers to add array:", numbersToAddArray)}
                {console.log("this is to find the sum: ", findSum)} */}
                <h2>Bank Account Total: ${findSum}</h2>
            </div>
            <div>
                {transactions.map((transaction, index)=>{
                    // console.log("in the map:", transaction, "index:", index)
                    return <Transaction key={index} transaction={transaction} index={index} />
                })}
            </div>
        </div>
    )
}
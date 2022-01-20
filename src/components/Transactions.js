import axios from 'axios';
import { useEffect, useState } from 'react';

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
                <h1>Your Bank Account Total: ${findSum}</h1>
            </div>
            <h3>Transactions</h3>
            <table className="table">
                <tr>
                    <th className="text-left col-md-1">Date</th>
                    <th className="text-left col-md-2">Name</th>
                    <th className="text-left col-md-2">From</th>
                    <th className="text-left col-md-2">Category</th>
                    <th className="text-left col-md-1">Amount</th>
                </tr>
            </table>
            <div>
                {transactions.map((transaction, index)=>{
                    // console.log("in the map:", transaction, "index:", index)
                    return <Transaction key={index} transaction={transaction} index={index} />
                })}
            </div>
        </div>
    )
}
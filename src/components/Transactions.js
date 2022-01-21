import axios from 'axios';
import { useEffect, useState } from 'react';

import Transaction from './Transaction';
import colorCodeSpan from '../helpers/colorCodeSpan';

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
    const numbersToAddArray = transactions.map((transaction, index)=>{
        // console.log("mapindex:", typeof index);
        // console.log(">>???", typeof transaction.amount)
        return transaction.amount;
    })
    const findSum = numbersToAddArray.reduce(function(a, b){
        // console.log("reduceA:", a, typeof a)
        // console.log("reduceB:", Number(b), typeof Number(b))
        return a + Number(b);
    }, 0);

    return(
        <div className="Transactions">
            <div>
                {/* {console.log("numbers to add array:", numbersToAddArray)}
                {console.log("this is to find the sum: ", findSum)} */}
                <h1>Current Balance: {colorCodeSpan(findSum)}</h1>
            </div>
            <h3>Transactions</h3>
            <table className="table bg-secondary p2 text-dark bg-opacity-10">
                <thead>
                    <tr>
                        <th className="text-left col-md-1">Date</th>
                        <th className="text-left col-md-1">Name</th>
                        <th className="text-left col-md-1">Amount</th>
                    </tr>
                </thead>
            </table>
            <div>
                {transactions.map((transaction, index)=>{
                    // console.log("in the map:", transaction, "index:", index)
                    return (
                        <Transaction key={index} transaction={transaction} index={index} />
                    )
                })}
            </div>
        </div>
    )
}
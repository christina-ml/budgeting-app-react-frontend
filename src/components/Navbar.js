import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import colorCode from '../helpers/colorCode';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;

export default function Navbar() {
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


    // function colorCode(findSum) {
    //     if (findSum > 1000) {
    //         return (
    //         <div id="nav-total" className="bg-success p-2 text-white">
    //             Bank Acct. Total: ${findSum} 
    //         </div>
    //         )
    //     } else if (findSum < 0) {
    //         return (
    //         <div id="nav-total" className="bg-danger p-2 text-white">
    //             Bank Acct. Total: ${findSum} 
    //         </div>
    //         )
    //     } else if (findSum >= 0 && findSum <= 1000) {
    //         return (
    //         <div id="nav-total" className="bg-warning p-2 text-white">
    //             Bank Acct. Total: ${findSum} 
    //         </div>
    //         )
    //     }
    // }

    return(
        <div className="nav">
            <h1 className="me-auto">
                <Link to="/transactions">Budgeting App</Link>
            </h1>
            Bank Acct. Total: {colorCode(findSum)}
            {/* <div id="nav-total">
                Bank Acct. Total: ${findSum} 
            </div> */}
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </div> 
    )
}
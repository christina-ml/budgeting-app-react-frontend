import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

    return(
        <div className="nav">
            <h1>
                <Link to="/transactions">Budgeting App</Link>
            </h1>
            <div id="nav-total">
                Bank Acct. Total: ${findSum} 
            </div>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </div> 
    )
}
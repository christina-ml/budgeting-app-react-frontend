import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

// helpers
import colorCodeDiv from '../helpers/colorCodeDiv';

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
        return a + Number(b);
    }, 0);

    return(
        <div className="nav">
            <h1 className="me-auto b">
                <Link to="/transactions" style={{textDecoration: "none"}}>Budgeting App</Link>
            </h1>
            <div className="me-auto d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <span>Bank Acct. Total:</span>{colorCodeDiv(findSum)}
            </div>
            <Link to="/transactions/new">
                <Button variant="primary">New Transaction</Button>
            </Link>
        </div> 
    )
}
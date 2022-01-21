import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// helpers
import colorCodeDiv from '../helpers/colorCodeDiv';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;

/* Page Refresh - to update amount in `Navbar` */
 function refreshPage() {
    window.location.reload(false);
  }

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
            <Link to="/">
                <img src="https://cdn1.iconfinder.com/data/icons/real-estate-set-3/512/34-512.png" 
                    alt="house-icon" width="40px" height="40px"
                />
            </Link>
            <h1 className="me-auto b">
                <Link to="/transactions" style={{textDecoration: "none"}}>Budgeting App</Link>
            </h1>
            <div className="me-auto d-flex justify-content-between align-items-baseline fw-normal mb-3">
                
                <span>Bank Acct. Total:
                    <button onClick={refreshPage}>Click to update!</button>
                </span>{colorCodeDiv(findSum)}
            </div>
            <Link to="/transactions/new">
                <Button variant="primary">New Transaction</Button>
            </Link>
        </div> 
    )
}
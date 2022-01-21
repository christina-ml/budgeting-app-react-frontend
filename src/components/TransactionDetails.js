import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

// helpers
import colorCodeSpan from '../helpers/colorCodeSpan';

export default function TransactionDetails() {
    const [transactions, setTransactions] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    // `/transactions/:id` SHOW (same url also for: DELETE, UPDATE-PUT)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/transactions/${id}`)
            .then((res)=>{
                setTransactions(res.data);
            }).catch((err)=>{
                console.log(err)
            })
    }, []);

    // `/transactions/:id` DELETE
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/transactions/${id}`)
            .then((res)=>{
                navigate(`/transactions`);
            }).catch((err)=>{
                console.log(err);
            })
    }
    
    return (
        <div className="Details">
            <div>
                <div>Date: {transactions.date}</div>
                <div>Name: {transactions.name}</div>
                <div>From: {transactions.from}</div>
                <div>Category: {transactions.category}</div>
                <div>Amount: {colorCodeSpan(transactions.amount)}</div>
            </div>
            <Link to={`/transactions`}>
                <button>Back</button>
            </Link>
            <Link to={`/transactions/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
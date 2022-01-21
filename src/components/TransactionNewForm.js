import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function TransactionNewForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
        category: "",
    })

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value })
    }

    // `/transactions` CREATE-POST
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("transactions:", transactions);
        axios.post(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/transactions`, transactions)
            .then((res)=>{
                navigate(`/transactions`)
            }).catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div className="New">
            <form onSubmit={handleSubmit} className="form-group row">
                <label htmlFor="date" className="col-sm-1 col-form-label">Date:</label>
                <div className="col-sm-11">
                <input 
                    id="date"
                    value={transactions.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date"
                />
                </div>
                <label htmlFor="name" className="col-sm-1 col-form-label">Name:
                <span style={{color: "red"}}>*</span>
                </label>
                <div className="col-sm-11">
                    <input 
                        id="name"
                        value={transactions.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <label htmlFor="from" className="col-sm-1 col-form-label">From:</label>
                <div className="col-sm-11">
                    <textarea 
                        id="from"
                        value={transactions.from}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="From"
                    />
                </div>
                <label htmlFor="category" className="col-sm-1 col-form-label">Category:</label>
                <div className="col-sm-11">
                    <input 
                        id="category"
                        value={transactions.category}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Category"
                        />
                </div>
                <label htmlFor="amount" className="col-sm-1 col-form-label">Amount:</label>
                <div className="col-sm-11">
                    <input 
                        id="amount"
                        value={transactions.amount}
                        type="number"
                        onChange={handleTextChange}
                        placeholder="Amount"
                    />
                </div>
                <div className="col-sm-11">
                    <input type="submit" />   
                </div>
            </form>
            <Link to={`/transactions`}>
                <button>Back</button>
            </Link>
        </div>
    )
}
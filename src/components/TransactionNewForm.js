import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function TransactionNewForm() {
    const navigate = useNavigate();

    const [newTransaction, setnewTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
        category: "",
    })

    const handleTextChange = (event) => {
        setnewTransaction({ ...newTransaction, [event.target.id]: event.target.value })
    }

    // `/transactions` CREATE-POST
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("newTransaction:", newTransaction);
        axios.post(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/transactions`, newTransaction)
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
                    value={newTransaction.date}
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
                        value={newTransaction.name}
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
                        value={newTransaction.from}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="From"
                    />
                </div>
                <label htmlFor="category" className="col-sm-1 col-form-label">Category:</label>
                <div className="col-sm-11">
                    <input 
                        id="category"
                        value={newTransaction.category}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Category"
                        />
                </div>
                <label htmlFor="amount" className="col-sm-1 col-form-label">Amount:</label>
                <div className="col-sm-11">
                    <input 
                        id="amount"
                        value={newTransaction.amount}
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
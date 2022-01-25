import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// helpers
import colorCodeDiv from '../helpers/colorCodeDiv';

const API_URL = process.env.REACT_APP_API_URL_FROM_OUR_BACKEND;

export default function Navbar({ total }) {
    return(
        <div className="navbar p-2">
           
            <Link to="/" className="navbar-brand" id="logo">
                <img src="https://cdn1.iconfinder.com/data/icons/real-estate-set-3/512/34-512.png" 
                    alt="house-icon" width="40px" height="40px"
                />
            </Link>
            <h1 className="me-auto b" id="budget-title">
                <Link to="/transactions" style={{textDecoration: "none"}}>Budgeting App</Link>
            </h1>

            <div id="acct-total" className="me-auto d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div>
                    <span>
                        <div>Bank Acct. Total:</div>
                    </span>
                </div>
                {colorCodeDiv(total)}
            </div>

            <Link to="/transactions/new" id="new-trans">
                <Button variant="primary">New Transaction</Button>
            </Link>
        </div> 
    )
}
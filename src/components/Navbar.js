import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// helpers
import colorCodeDiv from '../helpers/colorCodeDiv';

/* Page Refresh - to update amount in `Navbar` */
 function refreshPage() {
    window.location.reload(false);
  }

export default function Navbar({findSum}) {
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
                        <Button onClick={refreshPage} variant="outline-secondary" size="sm">Click to update!</Button>
                    </span>
                </div>
                {colorCodeDiv(findSum)}
            </div>

            <Link to="/transactions/new" id="new-trans">
                <Button variant="primary">New Transaction</Button>
            </Link>
        </div> 
    )
}
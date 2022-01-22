import { Link } from "react-router-dom";

export default function FourOFour() {
    return(
        <div className="p-2">
            <h1>404 Page - Not Found</h1>
            <div className="d-flex justify-content-center">
                <img
                    src="https://www.kindpng.com/picc/m/120-1200032_no-money-png-empty-wallet-clipart-transparent-png.png" 
                    alt="empty-wallet"
                    height="250px"
                />
            </div>
            <br />
            <h4 style={{textAlign: "center"}}>Were you looking for...?</h4>
            <div className="d-flex justify-content-center">
                <Link to="/" className="mx-2">
                    <button>&#8617; Back to Home</button>
                </Link>
                <Link to="/transactions" className="mx-2">
                    <button> &#8617; Back to Transactions</button>
                </Link>
            </div>
        </div>
    )
}
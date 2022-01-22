import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
    return(
        <div>
            <h1>Home</h1>
            <div>
                Welcome to Budgeting App!
            </div>
            <h3 className="me-auto b">
                <span>
                    Ready to get started?
                    <Link to="/transactions" style={{textDecoration: "none"}}>
                        <Button className="mx-2">Click Here</Button>
                    </Link>
                </span>
            </h3>
            <br />
            <div id="home-photo-container">
                <img className="w-60" id="home-photo" src="https://usalg.org/wp-content/uploads/2021/01/Budgeting-1.jpg" alt="budgeting" />
            </div>
        </div>
    )
}
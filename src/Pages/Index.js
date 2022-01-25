import Transactions from "../components/Transactions";

export default function Index({ setTotal, total }) {
    return(
        <div className="p-2">
            {/* <h1>Index</h1> */}
            <Transactions total={total} setTotal={setTotal} />
        </div>
    )
}
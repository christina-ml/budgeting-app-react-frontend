export default function Transaction({ index, transaction }) {
    return(
        <div className="Transaction">
            <table className="table">
                <tr>
                    <td>{`Date: ${transaction.date}`}</td>
                    <td>{`From: ${transaction.from}`}</td>
                    <td>{`Name: ${transaction.name}`}</td>
                    <td>{`Category: ${transaction.category}`}</td>
                    <td>{`$${transaction.amount}`}</td>
                </tr>
            </table>
            {/* {`index: ${index}`} */}
            <hr></hr>
        </div>
    )
}
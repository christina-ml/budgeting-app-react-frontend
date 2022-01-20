export default function Transaction({ index, transaction }) {
    function colorCodeItem(transaction) {
        if (transaction.amount > 1000) {
            return (
                <td className="text-left col-md-1 bg-success p-2 text-white">{`$${transaction.amount}`}</td>
            )
        } else if (transaction.amount < 0) {
            return (
                <td className="text-left col-md-1 bg-danger p-2 text-white">{`$${transaction.amount}`}</td>
            )
        } else if (transaction.amount >= 0 && transaction.amount <= 1000) {
            return (
                <td className="text-left col-md-1 bg-warning p-2 text-white">{`$${transaction.amount}`}</td>
            )
        }
    }

    return(
        <div className="Transaction">
            <table className="table">
                <tr>
                    <td className="text-left col-md-1">{`${transaction.date}`}</td>
                    <td className="text-left col-md-2">
                        <a href={`/transactions/${index}`}>{`${transaction.name}`}
                        </a>
                    </td>
                    <td className="text-left col-md-2">{`${transaction.from}`}</td>
                    <td className="text-left col-md-2">{`${transaction.category}`}</td>
                    {colorCodeItem(transaction)}
                </tr>
            </table>
            {/* {`index: ${index}`} */}
            <hr></hr>
        </div>
    )
}
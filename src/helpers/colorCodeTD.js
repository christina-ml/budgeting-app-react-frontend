export default function colorCodeTD(transaction) {
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
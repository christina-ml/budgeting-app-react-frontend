export default function colorCodeTD(transaction) {
    if (transaction.amount > 1000) {
        return (
            <td className="text-left col-md-1 bg-light px-2 text-success">{`$${transaction.amount}`}</td>
        )
    } else if (transaction.amount < 0) {
        return (
            <td className="text-left col-md-1 bg-light px-2 text-danger">{`$${transaction.amount}`}</td>
        )
    } else if (transaction.amount >= 0 && transaction.amount <= 1000) {
        return (
            <td className="text-left col-md-1 bg-light px-2 text-black">{`$${transaction.amount}`}</td>
        )
    }
}
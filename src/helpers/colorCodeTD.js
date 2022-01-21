export default function colorCodeTD(transaction) {
    if (transaction.amount > 1000) {
        return (
            <td className="text-left col-md-1 bg-success px-2 text-white">{`$${transaction.amount}`}</td>
        )
    } else if (transaction.amount < 0) {
        return (
            <td className="text-left col-md-1 bg-danger px-2 text-white">{`$${transaction.amount}`}</td>
        )
    } else if (transaction.amount >= 0 && transaction.amount <= 1000) {
        return (
            <td className="text-left col-md-1 bg-warning px-2 text-white">{`$${transaction.amount}`}</td>
        )
    }
}
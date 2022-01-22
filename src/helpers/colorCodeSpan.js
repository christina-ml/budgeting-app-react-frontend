export default function colorCodeSpan(transactionAmount) {
    if (transactionAmount > 1000) {
        return (
            <span className="text-left col-md-1 bg-light px-1 text-success">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount < 0) {
        return (
            <span className="text-left col-md-1 bg-light px-1 text-danger">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount >= 0 && transactionAmount <= 1000) {
        return (
            <span className="text-left col-md-1 bg-light px-1 text-black">{`$${transactionAmount}`}</span>
        )
    }
}
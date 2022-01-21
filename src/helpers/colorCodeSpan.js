export default function colorCodeSpan(transactionAmount) {
    if (transactionAmount > 1000) {
        return (
            <span className="text-left col-md-1 bg-success px-1 text-white">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount < 0) {
        return (
            <span className="text-left col-md-1 bg-danger px-1 text-white">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount >= 0 && transactionAmount <= 1000) {
        return (
            <span className="text-left col-md-1 bg-warning px-1 text-white">{`$${transactionAmount}`}</span>
        )
    }
}
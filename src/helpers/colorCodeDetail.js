export default function colorCodeDetail(transactionAmount) {
    if (transactionAmount > 1000) {
        return (
            <span className="text-left col-md-1 bg-success text-white">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount < 0) {
        return (
            <span className="text-left col-md-1 bg-danger text-white">{`$${transactionAmount}`}</span>
        )
    } else if (transactionAmount >= 0 && transactionAmount <= 1000) {
        return (
            <span className="text-left col-md-1 bg-warning text-white">{`$${transactionAmount}`}</span>
        )
    }
}
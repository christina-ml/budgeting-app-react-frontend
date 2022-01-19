export default function Transaction({ index, transaction }) {
    return(
        <div className="Transaction">
            <h3>Transaction</h3>
            <div>
                {`index: ${index}`}
                {`Transaction Name: ${transaction.name}`}
                <hr></hr>
            </div>

        </div>
    )
}
import colorCodeItem from "../helpers/colorCodeItem"

export default function Transaction({ index, transaction }) {
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
// helpers
import colorCodeItem from "../helpers/colorCodeItem"

export default function Transaction({ index, transaction }) {
    return(
        <div className="Transaction">
            <table className="table">
                <tbody>
                    <tr>
                        <td className="text-left col-md-1">{`${transaction.date}`}</td>
                        <td className="text-left col-md-1">
                            <a href={`/transactions/${index}`} rel="noreferrer">
                                {transaction.name}
                            </a>
                        </td>
                        {colorCodeItem(transaction)}
                    </tr>
                </tbody>
            </table>
            {/* {`index: ${index}`} */}
        </div>
    )
}
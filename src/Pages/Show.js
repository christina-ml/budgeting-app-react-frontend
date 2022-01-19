import TransactionDetails from '../components/TransactionDetails';

export default function Show(){
    return(
        <div>
            <h1>Show</h1>
            <br />
            This will: Get an individual view (show one transactions)
            <br />
            This will: Delete a transactions
            <TransactionDetails />
        </div>
    )
}
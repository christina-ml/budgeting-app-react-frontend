import TransactionNewForm from '../components/TransactionNewForm';

export default function New() {
    return(
        <div>
            <h1>New</h1>
            {/* This will: Create a new transactions */}
            <TransactionNewForm />
        </div>
    )
}
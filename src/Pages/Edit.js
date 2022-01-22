import TransactionEditForm from '../components/TransactionEditForm';

export default function Edit() {
    return(
        <div className="p-2">
            <h1>Edit</h1>
            {/* This will: Update a transactions */}
            <TransactionEditForm />
        </div>
    )
}
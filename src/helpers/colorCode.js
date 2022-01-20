export default function colorCode(findSum) {
    if (findSum > 1000) {
        return (
        <div id="nav-total" className="bg-success p-2 text-white">
            ${findSum} 
        </div>
        )
    } else if (findSum < 0) {
        return (
        <div id="nav-total" className="bg-danger p-2 text-white">
            ${findSum} 
        </div>
        )
    } else if (findSum >= 0 && findSum <= 1000) {
        return (
        <div id="nav-total" className="bg-warning p-2 text-white">
            ${findSum} 
        </div>
        )
    }
}
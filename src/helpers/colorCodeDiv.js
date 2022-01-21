export default function colorCodeDiv(findSum) {
    if (findSum > 1000) {
        return (
        <div id="nav-total" className="bg-success px-2 text-white">
            ${findSum} 
        </div>
        )
    } else if (findSum < 0) {
        return (
        <div id="nav-total" className="bg-danger px-2 text-white">
            ${findSum} 
        </div>
        )
    } else if (findSum >= 0 && findSum <= 1000) {
        return (
        <div id="nav-total" className="bg-warning px-2 text-white">
            ${findSum} 
        </div>
        )
    }
}
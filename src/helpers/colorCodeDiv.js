export default function colorCodeDiv(findSum) {
    if (findSum > 1000) {
        return (
        <div id="nav-total" className="bg-light px-2 text-success">
            ${findSum} 
        </div>
        )
    } else if (findSum < 0) {
        return (
        <div id="nav-total" className="bg-light px-2 text-danger">
            ${findSum} 
        </div>
        )
    } else if (findSum >= 0 && findSum <= 1000) {
        return (
        <div id="nav-total" className="bg-light px-2 text-black">
            ${findSum} 
        </div>
        )
    }
}
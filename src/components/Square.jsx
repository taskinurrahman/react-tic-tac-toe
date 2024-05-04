
export default  function Square({ value, onSquareClick }) {
    let buttonClass = value==="X" ? "playerX":"playerO"
    return (
        <button className={buttonClass} onClick={onSquareClick}>
            {value }
        </button>
    );
}
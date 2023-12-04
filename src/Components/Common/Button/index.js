import "./styles.css"

function Button({ value, color, background }) {
    // console.log(color, backgorund);
    return (
        <div className='btn-container'>
            <button className='btn' style={{
                color: `var(--${color})`,
                backgroundColor: `var(--${background})`,
                border: ` 1px solid var(--${color})`
            }}>
                {value}</button>
        </div>
    )
}

export default Button
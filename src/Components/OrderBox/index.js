import "./styles.css"

import React from 'react'

function OrderBox({ title, value }) {
    return (
        <div className="order-box">
            <span className="title">{title}</span>
            <span className="value">{value}</span>
        </div>
    )
}

export default OrderBox
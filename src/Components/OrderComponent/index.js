import OrderBox from "../OrderBox"
import "./styles.css"
import React from 'react'

function OrderComponent() {
    return (
        <div className="order-container">
            <OrderBox title={"Supplier"} value={"East cost fruits and vegitables"} />
            <OrderBox title={"Shipping Date"} value={"Thu, Feb 10"} />
            <OrderBox title={"Total"} value={"$15000"} />
            <OrderBox title={"Category"} />
            <OrderBox title={"Department"} value={"300-444-555"} />
            <OrderBox title={"status"} value={"Awaiting for approval"} />

        </div>
    )
}

export default OrderComponent
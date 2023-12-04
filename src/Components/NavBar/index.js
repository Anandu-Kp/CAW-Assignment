import "./styles.css"

import React from 'react'
import reeco from "../../Assets/reeco.png"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
function NavBar() {
    return (
        <nav className="nav">
            <div className="left-nav">
                <img src={reeco}></img>
                <span>Store</span>
                <span>Orders</span>
                <span>Analytics</span>
            </div>
            <div className="right-nav">
                <AddShoppingCartRoundedIcon style={{ color: ' rgba(255, 255, 255, 0.651)' }} />
                <div>
                    <span>Hello, james </span>
                    <KeyboardArrowDownRoundedIcon style={{ color: ' rgba(255, 255, 255, 0.651)' }} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
import Button from "../Common/Button"
import TableComponent from "../TableComponent";
import "./styles.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

function MainComponent() {
    return (
        <div className="main-container">
            <div className="main-top">
                <div className="search">
                    <input type="text" placeholder="Search"></input>
                    <SearchRoundedIcon style={{ color: ' rgba(102, 102, 102, 0.411)' }} />
                </div>
                <div className="main-top-right">
                    <Button value={"Add item"} color={"green"} backgorund={"white"} />
                    <span>$</span>
                </div>
            </div>
            <TableComponent />
        </div>
    )
}

export default MainComponent
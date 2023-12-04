import "./styles.css"
import Button from '../Common/Button'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function HeaderComponent() {
    return (
        <div className='header-container'>
            <div className='header-top'>
                <span>Orders</span>
                <KeyboardArrowRightRoundedIcon style={{ color: ' rgba(255, 255, 255, 0.651)' }} />
                <span className="order-id"> Order 123456</span>
            </div>
            <div className='header-bottom'>
                <h2>Order 123456</h2>
                <div>
                    <Button value="Back" color={"green"} backgorund={"white"} />
                    <Button value="Approve order" color={"white"} backgorund={"green"} />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
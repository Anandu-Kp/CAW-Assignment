import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Slider from '@mui/material/Slider';
import "./styles.css"
import avacado from "../../Assets/Avocado Hass.jpg"
import Button from '../Common/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MyModal({ handleClose, open, handleSubmit, element }) {
    const [newElement, setNewElement] = useState(element)
    console.log(newElement);

    return (
        <div>

            {element &&

                <Modal

                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <div className='edit-container'>
                                <div className='edit-top'>
                                    <span className='title'>{element.name}</span>
                                    <span className='brand'>{element.brand}</span>
                                </div>

                                <div className='edit-main'>
                                    <img src={avacado} ></img>
                                    <div className='edit-form'>
                                        <div className='form-item'>
                                            <label>Price : </label>
                                            <input type='text' className='edit-input' name='price' value={newElement ? newElement.price : element.price} onChange={(e) => setNewElement({ ...newElement, price: e.target.value })}></input>
                                        </div>
                                        <div className='form-item'>
                                            <label>Quantity : </label>
                                            <div>
                                                <Box sx={{ width: 100 }}>
                                                    <Slider

                                                        defaultValue={1}
                                                        valueLabelDisplay="auto"
                                                        step={1}
                                                        marks
                                                        min={0}
                                                        max={10}
                                                        onChange={(e) => setNewElement({ ...newElement, quantity: e.target.value })}
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                        <div className='form-item'>
                                            <label>Total : </label>
                                            <input type='text' className='edit-input' name='total' value={newElement ? newElement.price * newElement.quantity : element.price * element.quantity} onChange={(e) => setNewElement({ ...newElement, total: e.target.value })} readonly></input>
                                        </div>
                                        <div onClick={() => { handleClose(); handleSubmit(newElement) }}><Button value={"submit"} color={"blue"} background={"white"} /></div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Fade>
                </Modal>}
        </div >
    );
}

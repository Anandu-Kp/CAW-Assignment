import "./styles.css"
import avacado from "../../Assets/Avocado Hass.jpg"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import MyButton from "../Common/Button"
import MyModal from "../Modal";



export default function TableComponent() {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [openedElement, setOpenedElement] = useState();
    const [editElement, setEditElement] = useState();

    const data = useSelector((state) => state)

    const dispatch = useDispatch();

    const colorSelector = {
        "approved": "green",
        "missing": "orange",
        "missing-urgent": "red"
    }

    const handleClickOpen = (id) => {
        setOpenedElement(id)
        setOpen(true);
    };

    const handleClose = (type) => {

        type && dispatch({
            "type": type,
            payload: openedElement
        })

        setOpen(false);
    };

    const handleModalOpen = (row) => {
        setEditElement(row);
        setModalOpen(true);
    };

    const handleModalClose = () => {



        setModalOpen(false);
    };

    const handleSubmit = (newElement) => {
        console.log(newElement);
        dispatch({
            type: "edit",
            payload: newElement
        })
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell > <div style={{ width: "50px" }} ></div></TableCell>
                        <TableCell align="left" >Product Name</TableCell>
                        <TableCell align="right" >Brand</TableCell>
                        <TableCell align="right"  >Price</TableCell>
                        <TableCell align="right"  >Quantity</TableCell>
                        <TableCell align="right"  >Total</TableCell>
                        <TableCell align="right" >Status</TableCell>
                        <TableCell align="right" ><div style={{ width: "50px" }} ></div></TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                <img style={{ width: "50px" }} src={avacado} />
                            </TableCell>
                            <TableCell  >{row.name}</TableCell>
                            <TableCell align="right">{row.brand}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            {/* {console.log(row.status, colorSelector[row.status])} */}
                            <TableCell align="right"><div className="status" style={{ width: "50px" }}>{row.status != "pending" && <MyButton value={row.status} color={"white"} background={row.status == "Missing Urgent" ? "red" : colorSelector[row.status.toLowerCase()]} />}</div></TableCell>

                            <TableCell align="right">
                                <div className="table-cta">
                                    <div onClick={() => dispatch({
                                        type: "approve",
                                        payload: row.id
                                    })}><DoneIcon /></div>
                                    <div onClick={() => handleClickOpen(row.id)}><CloseIcon /></div>
                                    <span onClick={() => handleModalOpen(row)}>Edit</span>
                                </div>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Missing Product"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">Is it "missing --urgent"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose("missing")}>No</Button>
                    <Button onClick={() => handleClose("missing-urgent")}>Yes</Button>
                </DialogActions>
            </Dialog>
            <MyModal handleClose={handleModalClose} open={modalOpen} setOpen={setModalOpen} handleSubmit={handleSubmit} element={editElement} />
        </TableContainer >
    );
}

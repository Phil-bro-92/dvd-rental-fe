import Modal from "@mui/material/Modal";
import { useState } from "react";
import CustomerModal from "./CustomerModal";

export default function IndvCustomer({ customer }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <tr>
            <td onClick={handleOpen}>
                <b>{customer.last_name}</b>, {customer.first_name}
            </td>
            <td onClick={handleOpen}>{customer.email}</td>
            <td
                onClick={handleOpen}
            >{`${customer.address}, ${customer.city}, ${customer.country}, ${customer.postal_code}`}</td>
            <td onClick={handleOpen}>{customer.phone}</td>
            <Modal open={open} onClose={handleClose}>
                <CustomerModal customer={customer} handleClose={handleClose} />
            </Modal>
        </tr>
    );
}

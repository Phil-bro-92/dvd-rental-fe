import { Modal } from "@mui/material";
import Button from "@mui/material";
import { useState } from "react";
import CustomerModal from "./CustomerModal";

export default function IndvCustomer({ customer }) {
    const [open, setOpen] = useState(false);

    return (
        <tr onClick={() => setOpen(true)}>
            <td>
                <b>{customer.last_name}</b>, {customer.first_name}
            </td>
            <td>{customer.email}</td>
            <td>{`${customer.address}, ${customer.city}, ${customer.country}, ${customer.postal_code}`}</td>
            <td>{customer.phone}</td>
            <Modal open={open} onClose={() => setOpen(false)}>
                <CustomerModal customer={customer} setOpen={setOpen} />
            </Modal>
        </tr>
    );
}

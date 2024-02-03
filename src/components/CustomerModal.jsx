import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import IndvRental from "./IndvRental";

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export default function CustomerModal({ customer, handleClose }) {
    const url = process.env.REACT_APP_API_URL;
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        axios
            .post(`${url}/customer-rentals`, {
                customerId: customer.customer_id,
            })
            .then((res) => {
                console.log(res.data);
                setRentals(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Box sx={style}>
            <Typography id="spring-modal-title" variant="h4" component="h1">
                {customer.first_name} {customer.last_name}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                <address>
                    {customer.address}, {customer.city}, {customer.country},
                    {customer.postal_code}
                </address>
                <email>{customer.email}</email>
                <p>{customer.phone}</p>
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                <h2>Rentals</h2>
                <table className="rental_table">
                    <thead>
                        <tr>
                            <th>Film</th>
                            <th>Rent Date</th>
                            <th>Return Date</th>
                            <th>Rental Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rentals &&
                            rentals.map((rental, i) => {
                                return <IndvRental key={i} rental={rental} />;
                            })}
                    </tbody>
                </table>
            </Typography>

            <Button variant="contained" color="error" onClick={handleClose}>
                close
            </Button>
        </Box>
    );
}

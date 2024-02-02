import "../styles/addcustomer.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function AddCustomer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <main className="search_customers">
            <h1>Add a new customer</h1>{" "}
            <section className="search_inputs">
                {" "}
                <TextField
                    className="input_field"
                    type="text"
                    label="First name"
                    variant="outlined"
                />
                <TextField
                    className="input_field"
                    type="number"
                    label="Last name"
                    variant="outlined"
                />
            </section>
        </main>
    );
}

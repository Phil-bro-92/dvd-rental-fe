import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

export default function SearchCustomer() {
    const url = process.env.REACT_APP_API_URL;
    const [searchInput, setSearchInput] = useState("");
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get(`${url}/all-customers`)
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const searchCustomer = () => {};
    return (
        <main>
            <h2>Search for a customer</h2>{" "}
            <TextField
                className="input_field"
                type="text"
                label="Search Customer"
                variant="standard"
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Customer Ref</th>
                    </tr>
                </thead>
                <tbody>
                    {customers &&
                        customers.map((customer, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <b>{customer.last_name}</b>,{" "}
                                        {customer.first_name}
                                    </td>
                                    <td>{customer.customer_id}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </main>
    );
}

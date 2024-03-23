import "../styles/searchcustomer.scss";
import "../styles/loader.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IndvCustomer from "../components/IndvCustomer";
import Loader from "../components/Loader";

export default function SearchCustomer() {
    const url = process.env.REACT_APP_API_URL;
    const [customers, setCustomers] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios
            .get(`${url}/all-customers`)
            .then((res) => {
                setCustomers(res.data);
                setTimeout(() => {
                    setLoader(false);
                }, 3500);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const searchCustomer = (searchTerm) => {
        let data = {
            searchTerm: searchTerm,
        };
        axios
            .post(`${url}/search-customers`, data)
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const searchCustomerId = (searchTerm) => {
        let data = {
            searchTerm: searchTerm,
        };

        if (searchTerm === "") {
            axios
                .get(`${url}/all-customers`)
                .then((res) => {
                    setCustomers(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .post(`${url}/search-customers-id`, data)
                .then((res) => {
                    setCustomers(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <main className="search_customers">
            <h1>Customer Records</h1>{" "}
            {!loader ? (
                <section className="search_inputs">
                    {" "}
                    <TextField
                        className="input_field"
                        id="customer_name"
                        type="text"
                        label="Search by customer name"
                        variant="standard"
                        onChange={(e) => {
                            searchCustomer(e.target.value);
                            document.getElementById("customer_id").value = "";
                        }}
                    />
                    <TextField
                        className="input_field"
                        id="customer_id"
                        type="number"
                        label="Search by customer ID"
                        variant="standard"
                        onChange={(e) => {
                            searchCustomerId(e.target.value);
                            document.getElementById("customer_name").value = "";
                        }}
                    />
                </section>
            ) : null}
            {!loader ? (
                customers.length > 0 ? (
                    <table className="customer_table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers &&
                                customers.map((customer, i) => {
                                    return (
                                        <IndvCustomer
                                            key={i}
                                            customer={customer}
                                        />
                                    );
                                })}
                        </tbody>
                    </table>
                ) : (
                    <h2>No records with these details</h2>
                )
            ) : (
                <Loader />
            )}
        </main>
    );
}

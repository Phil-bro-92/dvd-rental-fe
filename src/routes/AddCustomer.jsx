import "../styles/addcustomer.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Box, InputLabel } from "@mui/material";
import regexPatterns from "../utils/regex";

export default function AddCustomer() {
    const url = process.env.REACT_APP_API_URL;
    const [cities, setCities] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostCode] = useState("");

    //Alerts
    const [alert, setAlert] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get(`${url}/all-cities`)
            .then((res) => {
                console.log(res.data);
                setCities(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleClearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddressOne("");
        setAddressTwo("");
        setCity("");
        setPostCode("");
    };

    const showAlert = (message, severity, duration = 3000) => {
        setMessage(message);
        setSeverity(severity);
        setAlert(true);

        setTimeout(() => {
            setAlert(false);
            setMessage("");
            setSeverity("");
        }, duration);
    };

    const handleSubmit = () => {
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            store_id: 1,
            address: addressOne,
            address2: addressTwo,
            city: city,
            phone: phone,
            postal_code: postcode,
        };
        const requiredFields = [
            firstName,
            lastName,
            email,
            addressOne,
            city,
            postcode,
        ];
        if (requiredFields.some((field) => field === "")) {
            showAlert("Please complete all required fields", "warning");
        } else if (!email.match(regexPatterns.email)) {
            showAlert("Please enter a valid email address", "warning");
        } else if (!phone.match(regexPatterns.phone)) {
            showAlert("Please enter a valid phone number", "warning");
        } else if (!postcode.match(regexPatterns.postCode)) {
            showAlert("Please enter a valid postcode", "warning");
        } else {
            axios
                .post(`${url}/new-customer`, data)
                .then((res) => {
                    showAlert("Customer successfully registered", "success");
                    handleClearForm();
                })
                .catch((err) => {
                    console.log(err);
                    // if (err.response.data.message) {
                    showAlert(`${err.response.data.message}`, "error");
                    // } else {
                    //     showAlert(`${err.response.data.message}`, "error");
                    // }
                });
        }
    };

    return (
        <main className="add_customers">
            <h1>Add a new customer</h1>{" "}
            <section className="form_inputs">
                {" "}
                <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className="input_field"
                    type="text"
                    label="First name"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    required
                />
                <TextField
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="input_field"
                    type="text"
                    label="Last name"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    required
                />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="input_field"
                    type="text"
                    label="Email"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    required
                />
                <TextField
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="input_field"
                    type="number"
                    label="Phone"
                    inputProps={{ maxLength: 11 }}
                    required
                />
                <TextField
                    onChange={(e) => setAddressOne(e.target.value)}
                    value={addressOne}
                    className="address_field"
                    type="text"
                    label="Address Line 1"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                    required
                />
                <TextField
                    onChange={(e) => setAddressTwo(e.target.value)}
                    value={addressTwo}
                    className="address_field"
                    type="text"
                    label="Address Line 2"
                    variant="outlined"
                    inputProps={{ maxLength: 40 }}
                />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            City
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            className="address_field"
                            label="City"
                            onChange={(e) => setCity(e.target.value)}
                        >
                            {cities.map((city, i) => {
                                return (
                                    <MenuItem key={i} value={city.city_id}>
                                        {city.city}
                                    </MenuItem>
                                );
                            })}
                        </Select>{" "}
                    </FormControl>
                </Box>
                <TextField
                    onChange={(e) => setPostCode(e.target.value)}
                    value={postcode}
                    className="address_field"
                    type="text"
                    label="Postcode"
                    variant="outlined"
                    inputProps={{ maxLength: 8 }}
                    required
                />
                {!alert ? (
                    <section className="btn_section">
                        <Button
                            color="error"
                            variant="contained"
                            className="add_customer_btns"
                            onClick={handleClearForm}
                        >
                            clear
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            className="add_customer_btns"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </section>
                ) : (
                    <Alert
                        className="alert"
                        variant="filled"
                        severity={severity}
                    >
                        {message}
                    </Alert>
                )}
            </section>
        </main>
    );
}

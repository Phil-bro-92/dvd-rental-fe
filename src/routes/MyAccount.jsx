import "../styles/myaccount.scss";
import { useState, useEffect } from "react";

export default function MyAccount() {
    const [user, setUser] = useState({});

    useEffect(() => {
        let currentUser = localStorage.getItem("user");
        currentUser = JSON.parse(currentUser);
        setUser(currentUser.user);
        console.log(currentUser);
    }, []);
    return (
        <main className="my_account">
            <h1>Welcome to your staff portal, {user.first_name}.</h1>

            <table className="user_table">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{user.first_name}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{user.last_name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

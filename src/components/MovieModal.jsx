import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export default function MovieModal({ movie, handleClose }) {
    const url = process.env.REACT_APP_API_URL;
    const [inventory, setInventory] = useState(0);

    useEffect(() => {
        axios
            .post(`${url}/movie-inventory`, {
                filmId: movie.film_id,
            })
            .then((res) => {
                console.log(res.data.inventory);
                setInventory(res.data.inventory);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Box sx={style}>
            <Typography id="spring-modal-title" variant="h4" component="h1">
                {movie.title}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                {movie.description}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                <table></table>
            </Typography>
            <Button variant="contained" color="error" onClick={handleClose}>
                close
            </Button>
        </Box>
    );
}

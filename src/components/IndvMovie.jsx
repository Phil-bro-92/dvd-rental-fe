import Modal from "@mui/material/Modal";
import { useState } from "react";
import MovieModal from "./MovieModal";

export default function IndvMovie({ movie }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <tr>
            <td onClick={handleOpen}>{movie.title}</td>
            <td onClick={handleOpen}>{movie.category}</td>
            <td onClick={handleOpen}>{movie.release_year}</td>
            <td onClick={handleOpen}>{movie.length} mins</td>
            <td onClick={handleOpen}>{movie.rating}</td>
            <td onClick={handleOpen}>{movie.language}</td>
            <Modal open={open} onClose={handleClose}>
                <MovieModal movie={movie} handleClose={handleClose} />
            </Modal>
        </tr>
    );
}

import { Box, Typography, Button } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

export default function CustomerModal({ customer, setOpen }) {
    return (
        <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
                {customer.last_name}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={() => setOpen(false)}>close</Button>
        </Box>
    );
}

import "../styles/home.scss";
import { useState } from "react";
import AddEmployee from "./managers/AddEmployee";
import SearchEmployee from "./managers/SearchEmployee";
import Stores from "./managers/Stores";
import AddCustomer from "./AddCustomer";
import MyAccount from "./MyAccount";
import SearchCustomer from "./SearchCustomer";
import SearchMovie from "./SearchMovie";
import AddMovie from "./AddMovie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MovieIcon from "@mui/icons-material/Movie";
import BadgeIcon from "@mui/icons-material/Badge";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ContactsIcon from "@mui/icons-material/Contacts";

const drawerWidth = 240;

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [account, setAccount] = useState(true);
    const [searchCustomer, setSearchCustomer] = useState(false);
    const [addCustomer, setAddCustomer] = useState(false);
    const [searchMovie, setSearchMovie] = useState(false);
    const [addMovie, setAddMovie] = useState(false);

    const [searchEmployee, setSearchEmployee] = useState(false);
    const [addEmployee, setAddEmployee] = useState(false);
    const [stores, setStores] = useState(false);

    const viewArray = [
        setAccount,
        setSearchCustomer,
        setAddCustomer,
        setSearchMovie,
        setAddMovie,

        setSearchEmployee,
        setAddEmployee,
        setStores,
    ];

    const handleBoxView = (view) => {
        for (let v = 0; v < viewArray.length; v++) {
            if (viewArray[v] === view) {
                viewArray[v](true);
            } else {
                viewArray[v](false);
            }
        }

        if (mobileOpen) {
            handleDrawerToggle();
        }
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: "#f54747" }}>
                <ListItem
                    disablePadding
                    onClick={() => handleBoxView(setAccount)}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon
                                fontSize="large"
                                sx={{ color: "#fff" }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            sx={{ color: "#fff" }}
                            primary="Account"
                        />
                    </ListItemButton>
                </ListItem>
            </Toolbar>
            <ListItem disablePadding sx={{ backgroundColor: "#ffb084" }}>
                <ListItemButton>
                    <Typography variant="h6">Staff Zone</Typography>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
                disablePadding
                onClick={() => handleBoxView(setSearchCustomer)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <ContactsIcon color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Search Customer" />
                </ListItemButton>
            </ListItem>
            <ListItem
                disablePadding
                onClick={() => handleBoxView(setAddCustomer)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AddReactionIcon color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Add Customer" />
                </ListItemButton>
            </ListItem>
            <ListItem
                disablePadding
                onClick={() => handleBoxView(setSearchMovie)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <MovieIcon color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Search Movie" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => handleBoxView(setAddMovie)}>
                <ListItemButton>
                    <ListItemIcon>
                        <VideoCallIcon color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Add Movie" />
                </ListItemButton>
            </ListItem>

            {/* //TODO: DO NOT SHOW BELOW SECTION IF NOT MANAGER */}
            {true && (
                <>
                    <Divider />
                    <ListItem
                        disablePadding
                        sx={{ backgroundColor: "#ffb084" }}
                    >
                        <ListItemButton>
                            <Typography variant="h6">Manager Zone</Typography>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem
                        disablePadding
                        onClick={() => handleBoxView(setSearchEmployee)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <BadgeIcon color="error" />
                            </ListItemIcon>
                            <ListItemText primary="Search Employee" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        onClick={() => handleBoxView(setAddEmployee)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonAddIcon color="error" />
                            </ListItemIcon>
                            <ListItemText primary="Add Employee" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        onClick={() => handleBoxView(setStores)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <StoreIcon color="error" />
                            </ListItemIcon>
                            <ListItemText primary="Search Stores" />
                        </ListItemButton>
                    </ListItem>
                </>
            )}
        </div>
    );

    return (
        <Box sx={{ display: "flex" }} className="home">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar id="home_header">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <h1>Groovy Movie Rental</h1>&nbsp; <MovieIcon />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        backgroundColor: "#ffb084",
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {account && <MyAccount />}
                {searchCustomer && <SearchCustomer />}
                {addCustomer && <AddCustomer />}
                {searchMovie && <SearchMovie />}
                {addMovie && <AddMovie />}
                {searchEmployee && <SearchEmployee />}
                {addEmployee && <AddEmployee />}
                {stores && <Stores />}
            </Box>
        </Box>
    );
}

import React from "react";
import { Box, AppBar, Toolbar, Button, Fade, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useWidth } from "../context/WidthContext";
// import background from "./bg.webp"

const NavBarComponent = () => {
    // const { width } = useWidth();

    const [menuElement, setMenuElement] = React.useState(null);
    const open = Boolean(menuElement);
    const handleClick = (event) => {
        setMenuElement(event.currentTarget);
    };
    const handleClose = () => {
        setMenuElement(null);
    };

    return (
        <>
            { 
                <Fade in={true} timeout={1000}>
                    <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "0%"}}>
                        <AppBar position="static" sx={{boxShadow: "none", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(255, 255, 100)"}}>
                            <Toolbar>
                                <div style={{ marginLeft: "5%", width: "100%", display: "flex", justifyContent: "center" }}>
                                    <ButtonComponent buttonNavigate="/" buttonName="HOME" />
                                    <ButtonComponent buttonNavigate="/projects" buttonName="PROJECTS" />
                                    <ButtonComponent buttonNavigate="/education" buttonName="EDUCATION" />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Fade>
            }
        </>
    )
}

export default NavBarComponent;

const ButtonComponent = ({ buttonNavigate, buttonName }) => {
    let active = false;
    
    const router = useRouter();
    if (router.pathname === buttonNavigate){
        active = true
    }

    return (
        <Link href={buttonNavigate}>
            {active ?
                <Button sx={{ borderBottom: "2px solid", borderRadius: "0", fontSize: "16px", marginRight: "3%", paddingRight: "1%", paddingLeft: "1%", color:"#fc5c7d" }}>
                    <Typography variant="button" color="#fc5c7d" sx={{ fontFamily: "Source Sans Pro", fontWeight: "bold" }}>{buttonName}</Typography>
                </Button>
            :
                <Button sx={{ "&:hover": { color:"#6a82fb", borderBottom: "2px solid", borderRadius: "0" }, marginRight: "3%", paddingRight: "1%", paddingLeft: "1%" }}>
                    <Typography variant="button" sx={{ fontFamily: "Source Sans Pro", fontWeight: "bold", color: "#6a82fb" }}>{buttonName}</Typography>
                </Button>
            }
        </Link>
    )
}

import React from "react";
import { Icon, SvgIcon, Box, AppBar, Toolbar, Button, Fade, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import me from '../images/me2.png';
import dk from '../icons/dk.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBarComponent = () => {

    const [menuElement, setMenuElement] = React.useState(null);
    const open = Boolean(menuElement);
    const handleClick = (event) => {
        setMenuElement(event.currentTarget);
    };
    const handleClose = () => {
        setMenuElement(null);
    };

    const smallScreen = useMediaQuery('(min-width:600px)');

    return (
        <>
            { smallScreen ?
                <Fade in={true} timeout={1000}>
                    <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "0%"}}>
                        <AppBar position="static" sx={{boxShadow: "none", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(255, 255, 100)"}}>
                            <Toolbar>
                                <div style={{ width: "20%", marginLeft: "15%", display: "flex", alignItems: "center"}}>
                                    <Link href="/">
                                        <Button>
                                            <Image
                                                alt="DK"
                                                src={dk}
                                                layout="intrinsic"
                                                width={900*0.05}
                                                height={900*0.05}
                                            />
                                        </Button>
                                    </Link>
                                </div>
                                <div style={{ width: "55%", display: "flex", justifyContent: "flex-end" }}>
                                    <ButtonComponent buttonNavigate="/" buttonName="HOME" />
                                    <ButtonComponent buttonNavigate="/projects" buttonName="PROJECTS" />
                                    <ButtonComponent buttonNavigate="/education" buttonName="EDUCATION" />
                                    <ButtonComponent buttonNavigate="/work" buttonName="WORK" />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Fade>
                :
                <Fade in={true} timeout={1000}>
                    <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "0%"}}>
                        <AppBar position="static" sx={{ background: "transparent", boxShadow: "none" }}>
                            <Toolbar sx={{ marginTop: "2%" }}>
                                <div style={{ width: "20%", marginLeft: "3%", display: "flex", alignItems: "center"}}>
                                    <Link href="/">
                                        <Button>
                                            <Image
                                                alt="DK"
                                                src={dk}
                                                layout="intrinsic"
                                                width={900*0.05}
                                                height={900*0.05}
                                            />
                                        </Button>
                                    </Link>
                                </div>

                                <IconButton sx={{ position: "absolute", right: "0", marginRight: "3%" }} onClick={handleClick}>
                                    <MenuIcon sx={{fontSize: "40px", color:"#FFFFFF"}} />
                                </IconButton>

                                <Menu anchorEl={menuElement} open={open} onClose={handleClose}>
                                    <MenuItemComponent menuItemNavigate="/" menuItemName="Home" />
                                    <MenuItemComponent menuItemNavigate="/projects" menuItemName="Projects" />                                    
                                    <MenuItemComponent menuItemNavigate="/work" menuItemName="Work" />                                    
                                    <MenuItemComponent menuItemNavigate="/education" menuItemName="Education" />
                                </Menu>
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
                <Button sx={{ color: "#FFFFFF", borderBottom: "2px solid", borderRadius: "0", fontSize: "16px", marginRight: "3%", paddingRight: "1%", paddingLeft: "1%"}}>
                    <Typography variant="button" color="#FFFFFF" sx={{ fontFamily: "Source Sans Pro", fontWeight: "bold" }}>{buttonName}</Typography>
                </Button>
            :
                <Button sx={{ "&:hover": { color:"#FFFFFF", borderBottom: "2px solid", borderRadius: "0" }, marginRight: "3%", paddingRight: "1%", paddingLeft: "1%" }}>
                    <Typography variant="button" color="#FFFFFF" sx={{ fontFamily: "Source Sans Pro", fontWeight: "bold" }}>{buttonName}</Typography>
                </Button>
            }
        </Link>
    )
}

// Menu item component that renders a styled menu item component
const MenuItemComponent = ({ menuItemNavigate, menuItemName }) => {
    let active = false;

    const router = useRouter();
    if (router.pathname === menuItemNavigate){
        active = true
    }

    return (
        <>
            {active ?
                <MenuItem sx={{ "&:hover": {backgroundColor: "#6a82fb"}, backgroundColor: "#6a82fb", fontFamily: "Source Sans Pro", fontSize: "20px" }}>
                    <Link href={menuItemNavigate}>
                        {menuItemName}
                    </Link>
                </MenuItem>
            :
                <MenuItem sx={{ "&:hover": {backgroundColor: "#6a82fb"}, fontFamily: "Source Sans Pro", fontSize: "20px" }}>
                    <Link href={menuItemNavigate}>
                        {menuItemName}
                    </Link>
                </MenuItem>
            }
        </>
    )
}

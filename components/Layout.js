import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, brown } from '@mui/material/colors';
// import NavBar from "./NavBar"
import styles from '../styles/Home.module.css'
import NavigationBar from './NavigationBar';
import Head from 'next/head';
import { Fade }  from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
  palette: {
    primary: {
        main: "#fc5c7d",
    },
    secondary: {
        main: "#6a82fb",
    },
  },
});


export default function Layout({ children }) {
    const smallScreen = useMediaQuery('(min-width:900px)');
    return (
        <ThemeProvider theme={theme}>
            <div style={{
                    position: "absolute", 
                    top: "0", left: "0", 
                    width: "100%",
                    minHeight: "100%", 
                    background: "linear-gradient(to right top, #fc5c7d, #6a82fb)",
                    display:"flex",
                    justifyContent:"center"
                }}>
                        <Head>
                            <meta name="description" content="A personal portfolio website for Daniel Kobko." />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <NavigationBar/>
                        <Box 
                            width={smallScreen ? "75%" : "90%"} 
                            marginTop="8vh"
                            marginBottom="5vh"
                            backgroundColor="#F5F5F5"
                            borderRadius={5}
                            height="85vh"
                        >
                            <Box
                                marginTop={"2vh"}
                                width="98%"
                                height="81vh"
                                overflow="auto"
                                sx={{
                                     scrollbarColor: "#fc5c7d #F5F5F5",
                                     scrollbarWidth: "thin" 
                                    }}
                            >
                                {children}
                            </Box>
                        </Box>
            </div>
        </ThemeProvider>
    )
}
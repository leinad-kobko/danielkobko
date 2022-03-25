import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, brown } from '@mui/material/colors';
// import NavBar from "./NavBar"
import styles from '../styles/Home.module.css'
import NavigationBar from './NavigationBar';
import Head from 'next/head';
import { Fade }  from "@mui/material";

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
                            width="95%" 
                            marginTop="12vh"
                            marginBottom="5vh"
                            backgroundColor="#F5F5F5"
                            borderRadius={5}
                            // boxShadow="0px 10px 20px 0px white"
                        >
                            <>{children}</>
                        </Box>
            </div>
        </ThemeProvider>
    )
}
import { Typography, Grid, Button, Box, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import me from '../images/me2.png'
import { GitHub, LinkedIn, Email, Mail } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Home() {
  const smallScreen = useMediaQuery('(min-width:600px)');
  return (
    <Layout>
      <Head>
        <title>Home - Daniel Kobko</title>
      </Head>
      <Box>
        <Grid container
          paddingTop="5vh"
          display="flex"
          justifyContent="center"
        >
          <Grid item 
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            padding="10%"
          >
            <Image
              alt="me.png"
              src={me}
              layout="intrinsic"
              width={776*0.4}
              height={780*0.4}
            />
          </Grid>
          <Grid item
            xs={12}
            md={6}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
          >
            <Grid item
              display="flex"
              flexDirection="column"
              marginLeft={"auto"}
              marginRight={"auto"}
            >
              <Typography 
                marginLeft={"10px"} 
                variant="h3" 
                fontFamily={"Courier"} 
                color="primary"
                fontSize={smallScreen ? 50 : 30}
              >
                  {"Hello World."}
                </Typography>
              <Typography 
                marginLeft={"10px"} 
                variant="h3"
                color="primary"
                fontSize={smallScreen ? 50 : 30}
                >
                  {"I'm Daniel Kobko"}
                </Typography>
            </Grid>
            <Grid container
              paddingTop="5%"
              paddingBottom="5%"
              spacing={3}
              display="flex"
              justifyContent="center"
            >
              <Grid item>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leinad-kobko">
                  <GitHub fontSize="large" color="secondary"/>
                </a>
              </Grid>
              <Grid item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                  <LinkedIn fontSize="large" color="secondary"/>
                </a>
              </Grid>
              <Grid item>
                <a a target="_blank" rel="noopener noreferrer" href="mailto:danielkobko@gmail.com">
                  <Mail fontSize="large" color="secondary"/>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

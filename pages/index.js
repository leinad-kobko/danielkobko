import { Typography, Grid, Button, Box, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import me from '../images/me2.png'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Daniel Kobko</title>
      </Head>
      <Box>
        <Grid container
          paddingTop="10%"
          display="flex"
          justifyContent="center"
        >
          <Grid item 
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <Image
              alt="me.png"
              src={me}
              layout="intrinsic"
              width={776*0.5}
              height={780*0.5}
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
              <Typography marginLeft={"10px"} variant="h3" fontFamily={"Courier"} color="primary">{"Hello World."}</Typography>
              <Typography marginLeft={"10px"} variant="h3" color="primary">{"I'm Daniel Kobko"}</Typography>
            </Grid>
            <Grid container
              paddingTop="5%"
              paddingBottom="5%"
              spacing={3}
              display="flex"
              justifyContent="center"
            >
              <Grid item>
                <Link href="https://github.com/leinad-kobko/">
                  <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                    Github
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                  <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                    LINKEDIN
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="mailto:danielkobko@gmail.com">
                  <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                    EMAIL
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

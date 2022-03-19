import { Card, Typography, Grid, Button, Box, Paper, CardContent, CardActions } from "@mui/material";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import me from '../images/me2.png'
import github from "../icons/github.png";
import pacman from "../icons/pacman.png";
import cars from "../icons/cars.png";
import gue from "../icons/gue.png";
import Carousel from "react-material-ui-carousel"

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Daniel Kobko</title>
      </Head>
      <Box>
        <Grid container
          paddingTop="10%"
          display="flex"
          justifyContent="center"
          height="100%"
        >
          <Grid item 
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <Image
              alt="me.png"
              src={github}
              layout="intrinsic"
              width={900*0.3}
              height={900*0.3}
            />
          </Grid>
          <Grid item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
          >
            <Box width="70%" padding="2%" border="1px solid" color="#6a82fb">
              <Carousel 
              autoPlay={false} 
              navButtonsAlwaysVisible={true} 
              sx={{height: "30vh"}}
              >
                <div>
                  <Grid container 
                  display="flex" 
                  flexDirection="row" 
                  justifyContent={"center"} 
                  alignItems={"center"} 
                  spacing={3}
                  >
                    <Grid item display="flex" alignItems="center">
                      <Image
                        alt="me.png"
                        src={pacman}
                        layout="intrinsic"
                        width={1200*0.1}
                        height={400*0.1}
                      />
                    </Grid>
                    <Grid item>
                      <Link href="https://github.com/leinad-kobko/">
                        <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                          <Typography variant="h5" color="#FFFFFF">Pacman AI</Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                
                <div>
                  <Grid container 
                  display="flex" 
                  flexDirection="row" 
                  justifyContent={"center"} 
                  alignItems={"center"} 
                  height="20vh"
                  spacing={3}
                  >
                    <Grid item display="flex" alignItems="center">
                      <Image
                        alt="me.png"
                        src={cars}
                        layout="intrinsic"
                        width={1100*0.1}
                        height={900*0.1}
                      />
                    </Grid>
                    <Grid item>
                      <Link href="https://github.com/leinad-kobko/">
                        <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                          <Typography variant="h5" color="#FFFFFF">Evolving Cars</Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                
                <div>
                  <Grid container 
                  display="flex" 
                  flexDirection="row" 
                  justifyContent={"center"} 
                  alignItems={"center"} 
                  height="20vh"
                  spacing={3}
                  >
                    <Grid item display="flex" alignItems="center">
                      <Image
                        alt="me.png"
                        src={gue}
                        layout="intrinsic"
                        width={900*0.1}
                        height={900*0.1}
                      />
                    </Grid>
                    <Grid item>
                      <Link href="https://github.com/leinad-kobko/">
                        <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                          <Typography variant="h5" color="#FFFFFF">GPX Viewer</Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                
                <div>
                  <Grid container 
                  display="flex" 
                  flexDirection="row" 
                  justifyContent={"center"} 
                  alignItems={"center"} 
                  height="20vh"
                  spacing={3}
                  >
                    <Grid item display="flex" alignItems="center">
                      <Image
                        alt="me.png"
                        src={gue}
                        layout="intrinsic"
                        width={900*0.1}
                        height={900*0.1}
                      />
                    </Grid>
                    <Grid item>
                      <Link href="https://github.com/leinad-kobko/">
                        <Button size="large" type="submit" variant="contained" sx={{background: "linear-gradient(to right bottom, #fc5c7d, #6a82fb)"}}>
                          <Typography variant="h5" color="#FFFFFF">Guelph Utility</Typography>
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

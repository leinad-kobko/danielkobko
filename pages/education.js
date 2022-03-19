import Layout from "../components/Layout";
import Head from "next/head";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import guelph from "../icons/gue.png";
import STA from "../icons/STA.png";

export default function Education() {
  return (
    <Layout>
      <Head>
        <title>Education - Daniel Kobko</title>
      </Head>
      <Box marginTop="60px" width="50%" minWidth="350px" marginLeft="auto" marginRight="auto">
        <Grid container display="flex" flexDirection="column" spacing={3}>
        <Grid item paddingBottom="2%">
            <Box color="#fc5c7d" borderTop="8px solid" >
              <Card>
                <CardContent borderLeft="2px solid" >
                  <Grid container display="flex" flexDirection={"row"}>
                    <Grid item xs={12} md={3} display="flex" justifyContent={"center"}>
                      <Image
                        alt="me.png"
                        src={guelph}
                        layout="intrinsic"
                        width={900*0.1}
                        height={900*0.1}
                      />
                    </Grid>
                    <Grid item
                      xs={12}
                      md={9}
                      display="flex"
                      flexDirection="column"
                      >
                      <Typography color="primary" variant="h5">University of Guelph</Typography>
                      <Typography color="secondary" variant="h7">Guelph, ON</Typography>
                      <Typography color="secondary" variant="h7">2019-Present</Typography>
                    </Grid>
                  </Grid>
                  <br/>
                  <Typography>Courses Taken:</Typography>
                  <ul>
                    <li>9 courses to develop my C knowledge</li>
                    <li>7 courses to learn about mathematics</li>
                    <li>and many more courses...</li>
                  </ul>
                  <Typography>Programming Skills learned:</Typography>
                  <ul>
                    <li>
                      Javascript
                      <ul>
                        <li>Figma - A design tool used to conceptualize a website/app/software</li>
                        <li>React - A powerful Javascript framework to develop software</li>
                        <li>NGINX - Framework used to create a reverse proxy server for </li>
                      </ul>
                    </li>
                    <li>
                      C programming
                      <ul>
                        <li>Parallel Programming</li>
                        <li>Simulating a CPU</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                      </ul>
                    </li>
                    <li>
                      Python
                      <ul>
                        <li>qLearning - A rewards based algorithm for teaching an AI</li>
                        <li>Genetic algorithm - To train cars to evolve and handle terrain better</li>
                      </ul>
                    </li>
                    <li>
                      Other
                      <ul>
                        <li>SQL</li>
                        <li>Assembly (Easy68K)</li>
                        <li>Legacy languages (Fortran, Ada, Cobol)</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent> 
              </Card>
            </Box>
          </Grid> 
        <Grid item paddingBottom="2%">
            <Box color="#fc5c7d" borderTop="8px solid" >
              <Card>
                <CardContent borderLeft="2px solid" >
                <Grid container display="flex" flexDirection={"row"}>
                    <Grid item xs={12} md={3} display="flex" justifyContent={"center"}>
                      <Image
                        alt="me.png"
                        src={STA}
                        layout="intrinsic"
                        width={900*0.1}
                        height={900*0.1}
                      />
                    </Grid>
                    <Grid item
                      xs={12}
                      md={9}
                      display="flex"
                      flexDirection="column"
                      >
                      <Typography color="primary" variant="h5">St. Thomas Aquinas</Typography>
                      <Typography color="secondary" variant="h7">Oakville, ON</Typography>
                      <Typography color="secondary" variant="h7">2015-2019</Typography>
                    </Grid>
                  </Grid>
                  <br/>
                  <Typography>Achievements:</Typography>
                  <ul>
                    <li>{"Graduated with Ontario Scholars award (>80% average every year)"}</li>
                    <li>Award for Computer Science in Grade 11</li>
                    <li>Award for Graphic Design in Grade 11</li>
                    <li>Participant in the ECOO Programming Contest (Up to Round 2)</li>
                    <li>Co-founder of the Computer Science Club</li>
                  </ul>
                  <Typography>Completed with a knowledge of:</Typography>
                  <ul>
                    <li>Computer Science (Python)</li>
                    <li>Graphic Design</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Calculus</li>
                  </ul>
                </CardContent> 
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

import Layout from "../components/Layout";
import Head from "next/head";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import cibc from "../icons/cibc.png"
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Work() {
    const smallScreen = useMediaQuery('(min-width:600px)');
  return (
    <Box marginTop="60px" marginLeft="auto" marginRight="auto">
    <Grid container display="flex" flexDirection="column" spacing={3}>
        <Grid item paddingBottom="2%">
            <Box color="#fc5c7d" borderTop="8px solid" >
                <Card>
                    <CardContent borderLeft="2px solid" >
                    <Grid container display="flex" flexDirection={"row"}>
                        <Grid item xs={12} md={3} display="flex" justifyContent={"center"}>
                            <Image
                                alt="me.png"
                                src={cibc}
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
                            <Typography color="primary" variant="h5">CIBC Financial Crimes</Typography>
                            <Typography color="secondary" variant="h7">Summer Co-op 2020 (Remote)</Typography>
                        </Grid>
                    </Grid>
                        <br/>
                        <Typography>
                            Apply innovative thinking to create opportunities for better employment and improve company image, update an application to help with employee productivity. Time management, critical thinking as well as working productively. Work with multiple teams.
                        </Typography>
                    </CardContent> 
                </Card>
            </Box>
        </Grid>
        <Grid item paddingBottom="2%">
            <Box color="#fc5c7d" borderTop="8px solid" >
                <Card>
                    <CardContent borderLeft="2px solid" >
                        <Grid>
                            <Grid item
                            display="flex"
                            flexDirection="column"
                            >
                            <Typography color="primary" variant="h5">Looking for a job in 2022!</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Typography>
                            {"I'm looking to further develop my skills and help a team that is looking for a creative, efficient, and hard-working employee"}
                        </Typography>
                        {/* <br/> */}
                        {/* <Typography>
                            <b>Still not sold? This entire website was made within 24 hours!</b>
                        </Typography> */}
                    </CardContent> 
                </Card>
            </Box>
        </Grid>
    </Grid>
    </Box>
  )
}

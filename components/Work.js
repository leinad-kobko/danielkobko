import Layout from "../components/Layout";
import Head from "next/head";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import cibc from "../icons/cibc.png"
import dk from "../icons/dk-black.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCard from "./InfoCard";

export default function Work() {
    const smallScreen = useMediaQuery('(min-width:600px)');
  return (
    <>
        <InfoCard
            img={cibc}
            dimensions={[900*0.1, 900*0.1]}
            title="CIBC Financial Crimes"
            location="Toronto, ON."
            timeFrame="Summer Co-op 2020 (Remote)"
        >
            <p>Apply innovative thinking to create opportunities for better employment and improve company image, update an application to help with employee productivity. Time management, critical thinking as well as working productively. Work with multiple teams.</p>
        </InfoCard>
        <InfoCard
            img={dk}
            dimensions={[900*0.09, 900*0.09]}
            title="Looking for Job!"
            location="Location: Remote or Greater Ottawa Area"
            timeFrame="Summer 2022"
        >
            <p>I'm looking to further develop my skills and help a team that is looking for a creative, efficient, and hard-working employee</p>
        </InfoCard>
    </>
  )
}

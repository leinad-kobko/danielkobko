import Layout from "../components/Layout";
import Head from "next/head";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import guelph from "../icons/gue.png";
import STA from "../icons/STA.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCard from "./InfoCard";

const Education = () => {
    const smallScreen = useMediaQuery('(min-width:600px)');
    return (
      <>
        <InfoCard
          img={guelph}
          dimensions={[900*0.1, 900*0.1]}
          title="University of Guelph"
          location="Guelph, ON."
          timeFrame="2019-2023"
        >
          <p className="font-bold">Courses Taken:</p>
          <ul>
            <li>- 9 courses to develop my C knowledge</li>
            <li>- 7 courses to learn about mathematics</li>
            <li>- and many more courses...</li>
          </ul>
          <p className="font-bold">Programming Skills learned:</p>
          <ul>
            <li>
              - Javascript -
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
        </InfoCard>
        <InfoCard
          img={STA}
          dimensions={[900*0.1, 900*0.1]}
          title="St. Thomas Aquinas"
          location="Oakville, ON."
          timeFrame="2015-2019"
        >
          <p className="font-bold">Achievements:</p>
          <ul>
            <li>{"Graduated with Ontario Scholars award (>80% average every year)"}</li>
            <li>Award for Computer Science in Grade 11</li>
            <li>Award for Graphic Design in Grade 11</li>
            <li>Participant in the ECOO Programming Contest (Up to Round 2)</li>
            <li>Co-founder of the Computer Science Club</li>
          </ul>
          <p className="font-bold">Completed with a knowledge of:</p>
          <ul>
            <li>Computer Science (Python)</li>
            <li>Graphic Design</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Calculus</li>
          </ul>
        </InfoCard>
      </>
    );
}

export default Education;
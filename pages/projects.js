import Layout from "../components/Layout";
import Head from "next/head";
import InfoCard from "../components/InfoCard";
import { Button } from "@mui/material";

import guelph from "../icons/gue.png";
import dkred from "../icons/dk-black.png";
import cars from "../icons/cars.png";
import pacman from "../icons/pacman.png";

export default function Projects() {
    const projects = [
        {
            img: dkred, 
            dimensions: [900*0.1, 900*0.1],
            title: "Portfolio Website", 
            language: "JavaScript", 
            date: "2022", 
            description: "The personal portfolio website you're looking at. Built to show some of my skills with web development, and provide a pleasant view of all my achievements and skills.", 
            link: "https://danielkobko.com/"
        },
        {
            img: guelph, 
            dimensions: [900*0.1, 900*0.1],
            title: "CIFAR-10 Image Classifier", 
            language: "Python", 
            date: "2022", 
            description: "A project for my Computational Intelligence course (CIS*4780) at the University of Guelph. It involved using python and pytorch to create a fully connected neural network, as well as a convolutional neural network. Classifies to an accuracy of around 60%", 
            link: "https://github.com/leinad-kobko/"
        },
        {
            img: cars, 
            dimensions: [1000*0.1, 900*0.1],
            title: "Genetic Algorithm - Cars", 
            language: "Python", 
            date: "2022", 
            description: "A project for my Computational Intelligence course (CIS*4780) at the University of Guelph. It involved using python, pygame and other libraries to simulate a genetic algorithm of cars that would be able to handle rough terrain.", 
            link: "https://github.com/leinad-kobko/genetic-car-algorithm"
        },
        {
            img: pacman, 
            dimensions: [1300*0.1, 800*0.1],
            title: "Pacman - q-learning", 
            language: "Python", 
            date: "2022", 
            description: "A project for my Computational Intelligence course (CIS*4780) at the University of Guelph. It involved using a project from another university, and adding our own features to make pacman perform better.", 
            link: "https://github.com/leinad-kobko/pacman-qlearning"
        },
        {
            img: guelph, 
            dimensions: [900*0.1, 900*0.1],
            title: "Guelph Course Search", 
            language: "Javascript", 
            date: "2022", 
            description: "A project for my Software Engineering Course (CIS*3760) at the University of Guelph. In a team of six, we had to implement a website onto an NGINX server that scrapes the university website for course information and displays it in an intuitive manner.", 
            link: "https://github.com/leinad-kobko/guelph-utility-engine"
        },
    ];
  return (
    <Layout>
      <Head>
        <title>Projects - Daniel Kobko</title>
      </Head>
      <div 
            id="content-wrapper" 
            className="h-full flex-col flex content-stretch lg:justify-between items-center mt-16"
        >
            <div className="lg:w-1/2 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-red-500 mb-10">Projects</h1>
                {projects.map((project) => {
                    return (
                        <InfoCard
                            key={project.id}
                            img={project.img}
                            dimensions={project.dimensions}
                            title={project.title}
                            location={"Primary Language: " + project.language}
                            timeFrame={project.date}
                        >
                            <div className="flex flex-col">
                                <h1 className="font-bold text-xl text-red-500">{project.title}</h1>
                                {project.description}
                                <Button width="50%">
                                    <a
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        href={project.link}
                                    >
                                        View Project
                                    </a>
                                </Button>
                            </div>
                        </InfoCard>
                    );
                })}
            </div>
        </div>
    </Layout>
  )
}

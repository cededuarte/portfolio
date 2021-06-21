import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { openSource, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import BlogCard from "../../components/blogCard/BlogCard";


const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};


export default function Projects() {
 
  return (
   <Fade bottom duration={1000} distance="40px">
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
      id="projects"
    >
      <h1 className="project-heading">Projects</h1>

      <div className="projects-container">



        {/* Project 1 - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        
            
          >
            <div className="project-images" id="coronaTracker"></div>
   

          <div className="project-links">
            <div className="text">
              <h5>COVID-19 Tracker - Pending</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1x1YA-HoLbJGbiu1eFmoSpiYFXACMxqQn/view?usp=sharing"
                target="_blank"
                
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
               href="https://drive.google.com/file/d/1x1YA-HoLbJGbiu1eFmoSpiYFXACMxqQn/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>








        {/* Project 2 - oldportfolio */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="project-images" id="oldportfolio"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>Portfolio</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gitlab.com/eduarte.cedric/myportfolio"
                
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
               href="https://eduarte.cedric.gitlab.io/portfolio/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>



        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>Quiz Application</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1iqOQlF55xqZbWn94VkMIKOJ93z1EjKQA/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - cagefit */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            
          >
            <div className="project-images" id="cagefit"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>CageFit Website</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gitlab.com/eduarte.cedric/capstone1"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://eduarte.cedric.gitlab.io/capstone1/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 5 - loadedfitness */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            
          >
            <div className="project-images" id="loadedfitness"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>Loaded Fitness Camp</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gitlab.com/eduarte.cedric/capstone-3-updated"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://loadedfitcamp.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      

        {/* Project 6 - bmrcalculator */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            
          >
            <div className="project-images" id="bmrcalculator"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>BMR Calculator</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://eduarte.cedric.gitlab.io/bmr-calculator/"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://eduarte.cedric.gitlab.io/bmr-calculator/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>


        {/* Project 7 - casedigestscompiler */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            
          >
            <div className="project-images" id="casedigestscompiler"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>Virtual Law Library</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://gitlab.com/batch44/eduarte-cedric/capstone-2-asset-management-heroku-deployment"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://casedigestscompiler2.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>      

        {/* Project 8 - nbastatscraper */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            
          >
            <div className="project-images" id="nbastatscraper"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h5>Sports Scraper(NBA) - Pending</h5>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1vJjtWD6dBj80ikHTr2G_69aGX5CSRIUF/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>      





      </div>
    </section>
    </Fade>
  );
};

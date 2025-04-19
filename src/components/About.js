import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.png'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello! My name is Vellin, and I’m a Full-Stack & Blockchain Developer who loves building things for the web — especially when it involves decentralization and emerging tech. My journey into coding started back in 2017 when I was curious about how websites and apps actually worked. What began as a hobby quickly turned into a passion (and later, a career). </p>
                        <br />
                        <p> Since then, I’ve worked on a wide range of projects — from sleek frontend interfaces to robust backend systems, and even smart contracts on Ethereum and other chains. I’ve been lucky to team up with amazing devs, founders, and designers along the way, constantly learning and pushing my limits.</p>
                        <br />
                        <p>These days, I focus on creating scalable, secure, and user-friendly dApps and platforms using technologies like React, Next.js, Node.js, Solidity, and Rust. I also love experimenting with new Web3 tools and contributing to open-source when I can.</p>
                        <br />
                        <p>When I’m not coding, you’ll probably find me sketching out UI ideas, catching up on the latest in crypto, or tinkering with new frameworks just for fun.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;

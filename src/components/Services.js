import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Full-stack Development</p>
                        <p className='services-desc'>I leverage modern web technologies to build robust, scalable, and user-friendly full-stack applications from front-end to back-end. </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Blockchain Development</p>
                        <p className='services-desc'>I develop secure, efficient, and scalable blockchain solutions using smart contracts and decentralized technologies.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;

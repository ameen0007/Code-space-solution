import React from "react";
import './section4.scss'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const Section4 = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])
   
  return (
    <>
    <div className="main-h2">
    <div className="sec4h1" data-aos="fade-up">
        <h1  >ABOUT US</h1>
      </div>
    </div>
     
      <div className="inside-about">
        <div className="p" data-aos="fade-up">
          <p>
          In the Heart of Selvapalayam, Along 1st Street, Near Standard Chartered Bank, Our Development Team Thrives Within the Walls of Building No. 764/9, Shri Krishna Complex. With the distinguished PIN 678013, we're dedicated to crafting exceptional digital solutions. Our passion for innovation and years of expertise drive us to create cutting-edge products that exceed expectations. From software development to app creation, we specialize in bringing ideas to life. Thank you for choosing Beyond Tech Solution to embark on this journey of innovation.
          </p>
        </div>
        <div className="img" data-aos="fade-up">
          <img src="aboutus.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

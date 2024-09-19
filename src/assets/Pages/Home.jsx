import React, { useEffect } from "react";
import "./home.scss";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Section3 } from "../Components/section3/Section3";
import { Section4 } from "../Components/section4/Section4";
import { Section5 } from "../Components/section5/Section5";
import { Footer } from "../Components/Footer/Footer";

export const Home = () => {

  useEffect(() => {
   Aos.init({duration : '2000'})
  },[])
  
  return (
    <>
      <section className="section1">
        <Header />
        <Hero />
      </section>


      <section className="section2">
        <div className="choose-div">
         
          <div className="inner-div">
            <div className="img" data-aos="fade-up" >
              <img  src="whylogo.png" alt="" />
            </div>
            <div className="main-why-div"  data-aos="fade-up" >
             <p>Need Cutting-Edge Software Solutions?
             Look no further than CODE SPACE SOLUTION, your premier software development partner located along Palakkad Ponnani Road, near Kanniampuram Sub Post Office, in Ottappalam, Palakkad District, Kerala, India. Our team of expert developers is committed to crafting exceptional software tailored to your unique requirements. Let CODE SPACE SOLUTION transform your digital vision into reality with precision and expertise.</p>
            </div>
          </div>
        </div>
      </section>
     
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>
    </>
  );
};

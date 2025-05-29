"use client"
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";

export default function Home() {
  return (
    <div> 

     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

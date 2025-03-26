import { motion } from "framer-motion";
 // Import useEffect to load scripts on component mount
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

  // Use useEffect to load the Typed.js script dynamically
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    <div className='w-1 sm:h-80 h-40 violet-gradient' />
    <div className="model">
  <iframe
    title="Shreyas Mahajan"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; fullscreen; xr-spatial-tracking"
    
    className="model1"
    src="https://sketchfab.com/models/102deb786f3448f48f286c2a56df28dc/embed"
    ></iframe>
</div>
    
    </div>
    <div className="Hi">
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi, I'm <span className='text-[#915EFF]'>Shreyas</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I want to be <span className='text-[#915EFF] text'>Fronted Developer</span> {/* This will show the typed text */}
    </p>
    <div className="btn-box">
      <a href="tel:+917507075722">Hire Me</a>
      <a href="#contact">Let's Talk</a>
    </div>
    </div>
    <div className="home-sci flex gap-6 mt-3 text-5xl text-white ">
      <a href="https://www.instagram.com/shreyasmahajan844/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-instagram'></i>
      </a>
      <a href="https://wa.me/7507075722" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-whatsapp'></i>
      </a>
      <a href="https://www.linkedin.com/in/shreyas-mahajan07/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin-square'></i>
      </a>
    </div>
    </div>                                                
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </section>
  );
};

export default Hero;













import Image from 'next/image';
//import { Inter } from 'next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header"; 
import Hero from '../components/Hero';
//import styles from '../styles/globals.css';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import ContactMe from '../components/ContactMe';
//const inter = Inter({ subsets: ['latin'] })

 const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80'>
      <Head>
        <title>David's Portfolio</title>
      </Head>
       
       <Header />

        {/* Hero */}
       <section id='hero' className='snap-start'>
        <Hero />
       </section>

        {/* About */}
        <section id='about' className='snap-center'>
        <About />
       </section>

        {/* Experiences */}
          <section id="experience" className='snap-center'>
           <WorkExperience />
          </section>

         
        {/* Skills */}
         <section id='skills' className='snap-start'>
          <Skills /> 
         </section> 

        {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects /> 
         </section>


        {/* Contact me */}
           <section id='contact' className='snap-start'>
             <ContactMe />
           </section>
    </div>
  );
};

export default Home;
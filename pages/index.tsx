import Image from 'next/image';
//import { Inter } from 'next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header"; 
import Hero from '../components/Hero';
//import styles from '../styles/globals.css';


//const inter = Inter({ subsets: ['latin'] })

 const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
       
      <Header />

       {/* Hero */}
       <section id='hero'>
        <Hero />
       </section>

       {/* About */}
        
       {/* Experiences */}

       {/* Skills */}

        {/* Projects */}
   
        {/* Contact me */}

    </div>
  );
};

export default Home;
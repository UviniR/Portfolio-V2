"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '@styles/page.module.css'
import cover from '@public/image.png'
import PhotoCarousel from '@app/PhotoCarousel.js';

// import "aos/dist/aos.css"
// import AOS from "aos"

export default function Home() {
  // useEffect(() => {
  //   AOS.init()
  // }, [])

  return (
    <main>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container">
          <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_'>
            Connect with  <span class="gradientText "> Uvini</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#publications">
                  Publications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row justify-content-center align-items-center vh-100 py-5'>
          <div className='pt-5'>
            <h1>Hi there, it's me <span className={styles.pink}> Uvini </span>👋</h1>
          </div>
          <div className='row justify-content-center'>
            <Image className={styles.cover} src={cover} width={499} height={499} />
          </div>
          <div>
            <h3 className='px-3'>I never get tired of chasing after <span className={styles.pink}>learning machines</span>!!!</h3>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div className='row justify-content-center'>
                <Image className={styles.cover} src={cover} width={499} height={499} />
              </div>

            </div>
            <div className="col-md-6">
              <div className='py-5 pt-5' >
                <h2 id="about">Who am I 👀</h2>
              </div>
              <p>
                I’m a final-year Business Science <span className={styles.blue}>undergraduate</span> 👩🏻‍🎓 at{" "}
                <span className={styles.blue}>University of Moratuwa</span>, Sri Lanka 🇱🇰 . <br></br>
                <br></br>
                Basically, I support <span className={styles.blue}>data-driven decision-making 🔍 </span> by developing ML models.
                And when it comes to <span className={styles.blue}>Natural Language Processing 📝</span>, my excitement hits the roof!
              </p>
              <div className="pt-5" style={{ fontSize: '20px' }}>
                Delve deeper into my <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_'><span className={styles.gradientText}><b>CV</b></span></a> to discover even more hidden skills 😁.
              </div>
            </div>
          </div>
        </div>
        <div className='text-center py-5' >
          <h2 id='publications'> View my publications  🔬 </h2>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card h-100 card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #EF4573', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body pb-4">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card h-100  card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #0CB9C1', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center  py-5' style={{ fontSize: '20px' }}>
          Feel free to explore <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_'><span className={styles.gradientText}><b>Google Scholar </b></span></a>to find them in order.
        </div>
        <div className='text-center py-5' >
          <h2 id='projects'> Academic projects 👩🏻‍💻</h2>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card h-100 card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #EF4573', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card h-100  card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #0CB9C1', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body pb-4">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                  <span class="badge display-badge mx-1 bg-secondary">Technology 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center  py-5' style={{ fontSize: '20px' }}>
          For an immersive experience, take a  stroll through my <a class="navbar-brand" href='https://github.com/UviniR' target='_'><span className={styles.gradientText}><b>GitHub repositories</b></span></a>.
        </div>
        <div className='text-center py-5' >
          <div className='mb-3' style={{ fontSize: '35px', fontFamily: 'Titillium Web' }}> Sometimes I write;  <h2 id='blog'> Read my stories 📖  </h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div class="card h-100 card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #EF4573', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card h-100  card-wrapper mx-auto" style={{ width: '75%', border: '5px solid #0CB9C1', backgroundColor: '#0F2437', color: 'white' }}>
                <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
                <div class="card-body">
                  <p class="card-title fw-bold">Card title</p>
                  <p class="card-text reduced-font-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center  py-5' style={{ fontSize: '20px' }}>
          Hop on over to <a class="navbar-brand" href='https://medium.com/@uvini-ranaweera' target='_'><span className={styles.gradientText}><b> Medium </b></span></a>and feast your eyes on more stories.
        </div>
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 h-100">
                <div className='mb-3' style={{ fontSize: '35px', fontFamily: 'Titillium Web' }}>
                  <p  style={{ fontSize: '35px', fontFamily: 'Titillium Web' }}>When I'm not engrossed in work, you'll find me with a </p>
                  <span className={`${styles.travel} px-3`}>travel itinerary ✈️</span>
                  {/* <p style = {{backgroundColor: '#F1A638'}}> travel itinerary✈️ </p> */}
                  </div>
              </div>
              <div className="col-md-7 mx-auto">
                <PhotoCarousel />
              </div>
            </div>
          </div>
      </div>
    </main >
  )
}

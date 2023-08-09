"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '@styles/page.module.css'
import cover from '@public/image.png'

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
          <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_' style={{ fontFamily: "Rancho", fontSize: "30px", color: "rgb(94 234 212)" }}>
            Uvini R.
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
                  8 Random Facts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row py-5'>
          <div className='pt-5'>
            <h1 className='col-md-8 pt-5'>Hello 👋</h1>
          </div>
          <div>
            <h1 className='col-md-8 pt-2'> I'm <b>Uvini Ranweera</b> — an avid researcher who never gets tired of the pursuit of <span className={styles.gradientText}>learning machines</span>👩🏻‍💻</h1>
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
                <h2 id="about"> <span className="underline-text">W</span>HO AM I 👀</h2>
              </div>
              <div class="bio-wrapper">
                <p>
                  I’m a final-year Business Science undergraduate 👩🏻‍🎓 at{" "}
                  <b>University of Moratuwa</b>, Sri Lanka 🇱🇰 <br></br>
                  <br></br>
                  Basically, I support data-driven decision-making 🔍 by developing ML models.
                  And when it comes to   <span class="bio-text"><b>Natural Language Processing</b></span>, my excitement hits the roof!

                  <span class="cartoon-character"></span>
                </p>
              </div>              <div className="pt-3" style={{ fontSize: '18px' }}>
                View my <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_'><span className={styles.gradientText}><b>CV</b></span></a> for the full BLAH BLAH 😁
              </div>
            </div>
          </div>
        </div>
        <div className='text-center py-5' >
          <h2 id='publications'> <span className="underline-text">P</span>UBLISHED WORK  🔬 </h2>
        </div>

        <div className='text-center  py-5' style={{ fontSize: '18px' }}>
          Feel free to explore <a class="navbar-brand" href='https://www.linkedin.com/in/uvini-ranaweera-/' target='_'><span className={styles.gradientText}><b>Google Scholar </b></span></a>to find them in order.
        </div>
        <div className='text-center py-5' >
          <h2 id='projects'> <span className="underline-text">A</span>CADEMIC PROJECTS 👩🏻‍💻</h2>
        </div>
        <div class="card-row  py-5">
          <div class="card">
            <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
            <h3>Article Title 1</h3>
            <p style={{ fontSize: '18px' }}>Summary of the article content goes here...</p>
            <div class="badge-row">
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
            </div>

          </div>
          <div class="card">
            <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
            <h3>Article Title 1</h3>
            <p style={{ fontSize: '18px' }}>Summary of the article content goes here...</p>
            <div class="badge-row">
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
            </div>

          </div>
          <div class="card">
            <Image class={`card-img-top ${styles.cover}`} unoptimized src={cover} width={200} height={299} />
            <h3>Article Title 1</h3>
            <p style={{ fontSize: '18px' }}>Summary of the article content goes here...</p>
            <div class="badge-row">
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
              < span class="badge">Badge Text</span>
            </div>

          </div>
        </div>

        <div className='text-center  py-5' style={{ fontSize: '18px' }}>
          For an immersive experience, take a  stroll through my <a class="navbar-brand" href='https://github.com/UviniR' target='_'><span className={styles.gradientText}><b>GitHub repositories</b></span></a>.
        </div>

        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 h-100">
              <div className='mb-3' style={{ fontSize: '25px', fontFamily: 'Source Sans 3' }}>
                <p style={{ fontSize: '25px', fontFamily: 'Source Sans 3' }}>When I'm not staring at a computer screen, you'll find me with a
                  <span className={`${styles.travel} px-3`}>travel itinerary ✈️</span> </p>
              </div>
            </div>
            <div className="col-md-7 mx-auto">
              <div class="gallery-reel-wrapper">
                <div class="gallery-reel">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-122-641a1d50c5283.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 1" />
                  <img src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-124-641a1d51138cd.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 2" />
                  <img src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-122-641a1d50c5283.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 3" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

import React from "react";
import { ArrowUpRight } from 'lucide-react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { hotelPhoto, rooms, experiences } from './data/hotel';

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(9,30,26,.73), rgba(9,30,26,.15)), url(${hotelPhoto(0, 1800)})` }}
    >
      <div>
        <span className="eyebrow">WELCOME TO AURELIA HOTEL & SPA</span>
        <h1>Where Every Stay<br />Becomes a <em>Story.</em></h1>
        <p>Discover a world of timeless elegance, thoughtful details, and unforgettable moments.</p>
        <a className="lightbtn" href="#rooms">EXPLORE OUR ROOMS <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="aboutphoto">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=85" alt="Elegant hotel interior" loading="lazy" />
      </div>
      <div>
        <span className="tag">01 / THE AURELIA EXPERIENCE</span>
        <h2>More Than a Stay.<br /><em>A Feeling.</em></h2>
        <p>At Aurelia, we believe true luxury is found in the moments that make you feel completely at home. Every space, every detail, and every experience is thoughtfully crafted for you.</p>
        <p>From serene mornings to unforgettable evenings, let us make your time with us truly extraordinary.</p>
        <a className="underlink" href="#contact">DISCOVER OUR STORY <ArrowUpRight size={16} /></a>
        <div className="stats">
          <div><b>48</b><small>CURATED ROOMS</small></div>
          <div><b>24/7</b><small>PERSONAL SERVICE</small></div>
          <div><b>100%</b><small>YOUR COMFORT</small></div>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="section rooms">
      <span className="tag">02 / ACCOMMODATION</span>
      <div className="sectiontitle">
        <h2>Stay in <em>Style.</em></h2>
        <p>Thoughtfully designed spaces where contemporary comfort meets timeless sophistication.</p>
      </div>
      <div className="cards">
        {rooms.map((room) => (
          <article key={room.name}>
            <img src={hotelPhoto(room.photoIndex)} alt={room.name} loading="lazy" />
            <div className="cardbody">
              <div>
                <h3>{room.name}</h3>
                <p>Comfort, elegance and a memorable stay.</p>
                <small>2 GUESTS · LUXURY AMENITIES</small>
              </div>
              <div>
                <small>FROM / NIGHT</small>
                <strong>{room.price}</strong>
                <a href="#booking" aria-label={`Book ${room.name}`}><ArrowUpRight /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <small className="disclaimer">Room types, prices, images and hotel statistics are sample content. Update them before publishing.</small>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="section">
      <span className="tag">03 / CURATED EXPERIENCES</span>
      <div className="sectiontitle">
        <h2>Indulge Your <em>Senses.</em></h2>
        <p>From tranquil wellness rituals to exquisite culinary journeys, find your perfect moment.</p>
      </div>
      <div className="experiences">
        {experiences.map((experience) => (
          <div key={experience.name}>
            <img src={hotelPhoto(experience.photoIndex)} alt={experience.name} loading="lazy" />
            <h3>{experience.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingForm />
        <About />
        <Rooms />
        <section className="quote">
          <span className="eyebrow">THE ART OF HOSPITALITY</span>
          <h2>“The best journeys are the ones<br />that make you feel <em>alive.</em>”</h2>
        </section>
        <Experiences />
        <section className="cta">
          <span className="eyebrow">YOUR NEXT ESCAPE AWAITS</span>
          <h2>Make Room for<br /><em>Something Wonderful.</em></h2>
          <p>Exceptional stays begin with a simple decision.</p>
          <a className="lightbtn" href="#booking">PLAN YOUR STAY <ArrowUpRight size={16} /></a>
        </section>
      </main>
      <Footer />
    </>
  );
}

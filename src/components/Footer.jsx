import React from "react";

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { hotel } from '../data/hotel';

export default function Footer() {
  return (
    <footer id="contact">
      <div>
        <a className="logo" href="#home">AURELIA <small>HOTEL & SPA</small></a>
        <p>A sanctuary of understated luxury and unforgettable experiences.</p>
      </div>

      <div>
        <h4>EXPLORE</h4>
        <a href="#about">Our Story</a>
        <a href="#rooms">Rooms & Suites</a>
        <a href="#experiences">Experiences</a>
      </div>

      <div>
        <h4>CONTACT</h4>
        <p><MapPin size={16} /> {hotel.address}</p>
        <p><Phone size={16} /> <a className="contact-link" href={`tel:+91${hotel.phone}`}>+91 {hotel.phone}</a></p>
        <p><Mail size={16} /> <a className="contact-link" href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
      </div>

      <div>
        <h4>RESERVATIONS</h4>
        <p>Ready for an unforgettable stay?</p>
        <a href="#booking" className="underlink">BOOK YOUR STAY <ArrowUpRight size={16} /></a>
      </div>

      <div className="copyright">© {new Date().getFullYear()} AURELIA HOTEL & SPA · DEMO WEBSITE</div>
    </footer>
  );
}

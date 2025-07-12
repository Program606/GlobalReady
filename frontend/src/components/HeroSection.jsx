import React from 'react';
import '../css/HeroSection.css'; // Optional: for styling

function HeroSection({ title, subtitle }) {
    return (
        <section className="hero">
            <h1>{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </section>
    );
}

export default HeroSection;
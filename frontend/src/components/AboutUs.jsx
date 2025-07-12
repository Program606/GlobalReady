import React from "react";
import '../css/AboutUs.css'; // Optional: for styling

function AboutUs({ title, paragraph, btnText }) {
    return (
        <section className="about-us">
        <div className="about-img">
            <div className="img-placeholder">&lt;img&gt;</div>
        </div>
        <div className="about-content">
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </section>
    );
}

export default AboutUs;
import React from 'react';
import '../css/HeaderSection.css'; // Optional: for styling

function HeaderSection({title, subtitle, mainTitle, mainParagraph}){
    return (
        <>
            {/* Header Section */}
            <section className="header-section">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </section>

            {/* Main Content */}
            <main className="main-content">
                <h1>{mainTitle}</h1>
                <p>{mainParagraph}</p>
            </main>
            </>
    );
}

export default HeaderSection;
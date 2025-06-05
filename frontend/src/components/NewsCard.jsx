import React from 'react';
import './NewsCard.css'; // Optional: for styling

function NewsCard({ image, title, link }) {
  return (
    <div className="news-card">
      <img src={image} alt="" className="news-image" />
      <h4>{title}</h4>
      <a href={link}>Read more</a>
    </div>
  );
}

export default NewsCard; 
import React from 'react';
import './HomePage.css'; // Create HomePage.css for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <img
          src="https://i.ibb.co/GvBJhMV/IMG-2228-removebg-preview.png"
          alt="Profile"
          className="profile-image"
        />
        <p className="description">
        In my journey as an affiliate marketer, I transitioned from a sales novice to securing a spot in a 100-member mentorship program led by Adrian Brambilla, a seasoned 7-figure affiliate marketer. Under his guidance, I acquired essential insights and strategies, mastering effective marketing and successful affiliate partnerships. Now, armed with these secrets, my mission is to empower others to navigate affiliate marketing's dynamic landscape and achieve their aspirations.
        </p>
        <a href="https://www.getresponse.com?ab=mRrEx6vpTD" target="_blank" rel="noopener noreferrer">
          <button><p>GetResponse Account</p></button>
        </a>
        <a href="https://groovepages.groovesell.com/a/lUXmh1zMpfMi" target="_blank" rel="noopener noreferrer">
          <button><p>GrooveFunnels Account</p></button>
        </a>
      </header>
    </div>
  );
};

export default HomePage;

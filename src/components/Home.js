import React from 'react';
import { Link } from 'react-router-dom';
import artificialIntelligenceImage from '../images/artificialintelligence.jpg';
import augmentedRealityImage from '../images/augmentedreality.jpg';
import blockChainImage from '../images/blockchain.jpg';
import cloudComputingImage from '../images/cloudcomputing.jpg';
import cyberSecurityImage from '../images/cybersecurity.jpg';
import dataScienceImage from '../images/datascience.jpg';
import '../css/styles.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to My Blog</h2>
      <div className="blog-cards-container">
        {/* Blog Card 1 */}
        <div className="blog-card">
          <img src={artificialIntelligenceImage} alt="Artificial Intelligence" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Artificial Intelligence</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>

        {/* Repeat the same structure for other blog cards */}
        {/* Blog Card 2 */}
        <div className="blog-card">
          <img src={augmentedRealityImage} alt="Augmented Reality" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Augmented Reality</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="blog-card">
          <img src={blockChainImage} alt="Block Chain" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Block Chain</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>

        {/* Repeat the same structure for other blog cards */}
        {/* Blog Card 4 */}
        <div className="blog-card">
          <img src={cloudComputingImage} alt="Cloud Computing" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Cloud Computing</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>

        {/* Blog Card 5 */}
        <div className="blog-card">
          <img src={cyberSecurityImage} alt="Cyber Security" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Cyber Security</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>

        {/* Blog Card 6 */}
        <div className="blog-card">
          <img src={dataScienceImage} alt="Data Science" className="blog-card-image" />
          <div className="blog-card-content">
            <h3 className="blog-card-title">Data Science</h3>
            <Link to="/blog" className="read-more-button">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

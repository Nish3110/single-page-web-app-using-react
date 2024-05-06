import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import './css/styles.css'; // Import styles.css
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogPost from './components/BlogPost';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Routes> 
          <Route exact path="/" element={<Home />} /> {/* Use element prop with the component */}
          <Route path="/blog" element={<BlogPost />} /> {/* Use element prop with the component */}
        </Routes> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

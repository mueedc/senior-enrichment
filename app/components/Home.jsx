import React from 'react';
import Navbar from './Navbar';

const Home = ({ children }) => (
  <div id="home">
    <Navbar />
    <h2>COG Bootcamp</h2>
    { children }
  </div>
)
export default Home;

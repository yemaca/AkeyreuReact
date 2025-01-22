import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Blog from './components/Blog';
import Podcast from './components/Podcast';
import readingImage from './assets/readingImage.png';
import friendsImage from './assets/HappyHumans.png';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Akeyreu: Mental wellness reimagined</title>
      </Helmet>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div class="main-content">
              {/* First Card */}
              <div class="card" id="home">
                <div class="content">
                  <img
                    src={readingImage}
                    alt="Man sitting on a bench reading"
                    class="image"
                  />
                  <div class="text-content">
                    <h2>What Is Akeyreu?</h2>
                    <p>
                      We are not just another wellness company. We're your brain's new best friend. We aim to be the 'Ah-ha!' in your
                      mental wellness journey. <br /><br />Don't be fooled by the name; it's quite easy to pronounce. When you are searching for
                      wellness solutions, remember <strong>"Ah-Key-Row"</strong>! Your key to neurological wellbeing.
                      <br /><br />
                      <a href="#learn-more" className="button">Subscribe Now!</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div class="card" id="about">
                <div class="content">
                  <img
                    src={friendsImage}
                    alt="Group of friends laughing together"
                    class="image"
                  />
                  <div class="text-content">
                    <h2>What We Do</h2>
                    <p>
                      Akeyreu is dedicated to pioneering the integration of advanced neural technologies and mental wellness practices,
                      striving to empower individuals with personalized tools that enhance mental clarity, emotional balance, and cognitive
                      performance. We are dedicated to aiding you in your journey towards mental wellness, so that you can lead a happy and successful life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Values Section */}
              <div class="card" id="values">
                <h2 class="section-title">Our Values</h2>
                <div class="values-section">
                  {/* Value Items */}
                  <div class="value-item">
                    <h3>Inspiration</h3>
                    <p>
                      Igniting the spark of innovation, Akeyreu illuminates the path to mental wellness and cognitive wellbeing.
                    </p>
                  </div>
                  <div class="value-item">
                    <h3>Transparency</h3>
                    <p>
                      Clear Minds, Clear Mission: Akeyreu's commitment to transparency in mental wellness.
                    </p>
                  </div>
                  <div class="value-item">
                    <h3>Integrity</h3>
                    <p>
                      Integrity is the core of our neural tech—trusted, ethical, and always human-centered.
                    </p>
                  </div>
                  <div class="value-item">
                    <h3>Accessibility</h3>
                    <p>
                      Opening new horizons in mental wellness, Akeyreu makes advanced technology accessible to all.
                    </p>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div class="card" id="products">
                <h2 class="section-title">Products</h2>
                <div class="products-section">
                  {/* Product Items */}
                  <div class="product-item">
                    <h3>nAura</h3>
                    <p>
                      Your Gateway to Restorative Sleep: nAura uses biomedical data to understand your sleep patterns and uses AI to provide personalized recommendations.
                      <br />
                      - Track and analyze your sleep quality with precision, giving you detailed reports and actionable insights.
                      <br />
                      - Easy integration with existing smart home devices.
                    </p>
                  </div>
                  <div class="product-item">
                    <h3>Vza</h3>
                    <p>
                      Empowers a proactive CBT approach to mental wellness.
                      <br />
                      - Utilizes real-time biometric data to adapt its suggestions for mental exercises and relaxation techniques.
                      <br />
                      - Monitor your cognitive wellness journey through personalized reports and milestones.
                    </p>
                  </div>
                </div>
              </div>

              {/*Sign Up Section*/}
              <div class="card" id="learn-more">
                <h2 class="section-title">Want to find out more?</h2>
                <p>Sign up for our newsletter and take control of your mental wellbeing!</p>
                <a href="http://eepurl.com/iMvslY" target="_blank">
                  <button type="submit" class="button" name="submit">Subscribe Here!</button>
                </a>
              </div>

              {/* Footer Component*/}
              <Footer />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;

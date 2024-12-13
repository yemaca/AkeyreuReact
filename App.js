import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import readingImage from './WebsiteImages/readingImage.png';
import logoImage from './WebsiteImages/Logo(b)Insta.png';
import friendsImage from './WebsiteImages/HappyHumans.png';

function App() {
  return (
    <div>
      <Helmet>
        <title>Akeyreu: Mental wellness reimagined</title>
        {/* Other Helmet content */}
      </Helmet>

      {/* Header Component */}
      <header />

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* First Card */}
        <div style={styles.card}>
          <div style={styles.content}>
            <img
              src={readingImage}
              alt="Man sitting on a bench reading"
              style={styles.image}
            />
            <div style={styles.textContent}>
              <h2>What is Akeyreu</h2>
              <p>
                We are not just another wellness company. We're your brain's new best friend. We aim to be the 'Ah-ha!' in your
                mental wellness journey. Don't be fooled by the name; it's quite easy to pronounce. When you are searching for
                wellness solutions, remember <strong>"Ah-Key-Row"</strong>! Your key to neurological wellbeing.
                <br />
                <a href="#learn-more" className="button">Subscribe Now!</a>
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div style={styles.card}>
          <div style={styles.content}>
            <img
              src={friendsImage}
              alt="Group of friends laughing together"
              style={styles.image}
            />
            <div style={styles.textContent}>
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
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <div style={styles.valuesSection}>
            {/* Value Items */}
            <div style={styles.valueItem}>
              <h3>Inspiration</h3>
              <p>
                Igniting the spark of innovation, Akeyreu illuminates the path to mental wellness and cognitive wellbeing.
              </p>
            </div>
            <div style={styles.valueItem}>
              <h3>Transparency</h3>
              <p>
                Clear Minds, Clear Mission: Akeyreu's commitment to transparency in mental wellness.
              </p>
            </div>
            <div style={styles.valueItem}>
              <h3>Integrity</h3>
              <p>
                Integrity is the core of our neural tech—trusted, ethical, and always human-centered.
              </p>
            </div>
            <div style={styles.valueItem}>
              <h3>Accessibility</h3>
              <p>
                Opening new horizons in mental wellness, Akeyreu makes advanced technology accessible to all.
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Products</h2>
          <div style={styles.productsSection}>
            {/* Product Items */}
            <div style={styles.productItem}>
              <h3>nAura</h3>
              <p>
                Your Gateway to Restorative Sleep: nAura uses biomedical data to understand your sleep patterns and uses AI to provide personalized recommendations.
                <br />
                - Track and analyze your sleep quality with precision, giving you detailed reports and actionable insights.
                <br />
                - Easy integration with existing smart home devices.
              </p>
            </div>
            <div style={styles.productItem}>
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

        {/* Footer */}
        <p style={styles.footer}>&copy; 2024 Akeyreu. All rights reserved.</p>
      </div>
    </div>
  );

}
const styles = {
  mainContent: {
    marginTop: '80px', // Adjust based on header height
    padding: '20px',
    backgroundColor: '#ffffff', // Main background color
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#fff0f9', // Close to main background color
    margin: '20px auto',
    padding: '20px',
    maxWidth: '1000px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Drop shadow
    marginBottom: '150px',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap', // For responsiveness
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    marginRight: '20px',
    objectFit: 'cover',
    flexShrink: '0',
  },
  textContent: {
    flex: '1',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  valuesSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueItem: {
    flex: '1 1 calc(25% - 20px)',
    boxSizing: 'border-box',
    margin: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  productsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    flex: '1 1 calc(50% - 20px)',
    boxSizing: 'border-box',
    margin: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '20px',
  },
};

export default App;
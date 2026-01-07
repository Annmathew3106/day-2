import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-container">
      <h1 className="about-title">Our Features</h1>
      <div className="features-grid">
        <div className="feature-box">
          <h2>Fast Performance</h2>
          <p>Optimized for speed, ensuring smooth user experiences.</p>
        </div>
        <div className="feature-box">
          <h2>Secure</h2>
          <p>Advanced encryption and safe protocols protect your data.</p>
        </div>
        <div className="feature-box">
          <h2>Responsive Design</h2>
          <p>Accessible on all devices with fully responsive layouts.</p>
        </div>
        <div className="feature-box">
          <h2>Customizable</h2>
          <p>Easily tailor features to your needs with flexible settings.</p>
        </div>
        <div className="feature-box">
          <h2>24/7 Support</h2>
          <p>Round-the-clock assistance for any issues or questions.</p>
        </div>
        <div className="feature-box">
          <h2>Cloud Integration</h2>
          <p>Seamlessly connect your data and services with cloud platforms.</p>
        </div>
        <div className="feature-box">
          <h2>Analytics</h2>
          <p>Gain insights from comprehensive data analysis and reporting.</p>
        </div>
        <div className="feature-box">
          <h2>AI Assistance</h2>
          <p>Smart features powered by AI to enhance productivity.</p>
        </div>
      </div>
    </section>
  );
}

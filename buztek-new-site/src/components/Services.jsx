import React from "react";

const Services = () => {
  return (
    <section>
      <div className="services-container">
        <div className="main-container">
          <div className="title-container">
            <h4>Services</h4>
          </div>
          <div className="service-details-container">
            <h3>LANDING PAGE</h3>
            <h4>FROM - 14 DAYS</h4>
            <h5>
              A ONE-PAGE website that informs customers about a service or
              product
            </h5>
            <ul>
              <li>
                <h5>UX/UI design in Figma</h5>
              </li>
              <li>
                <h5>One-page website (up to 10 screens)</h5>
              </li>
              <li>
                <h5>Development of modern interactions on page</h5>
              </li>
              <li>
                <h5>One language website</h5>
              </li>
              <li>
                <h5>Responsive Desktop, tablet and mobile versions</h5>
              </li>
              <li>
                <h5>Facebook Pixel & Google Analytics integration</h5>
              </li>
              <li>
                <h5>Secure and scalable AWS cloud hosting</h5>
              </li>
              <li>
                <h5>Compliant Privacy Policy</h5>
              </li>
            </ul>
            <div className="service-btn-container">
              <button>CTA</button>
              <h3 className="pricing">£750</h3>
            </div>
          </div>
          <div className="service-details-container">
            <h3>MULTIPLE PAGE</h3>
            <h4>FROM - 21 DAYS</h4>
            <h5>
              MULTIPLE page website that informs customers about a service or
              product
            </h5>
            <ul>
              <li>
                <h5>UX/UI design in Figma</h5>
              </li>
              <li>
                <h5>Up to 6 unique types of website pages</h5>
              </li>
              <li>
                <h5>Development of modern interactions on page</h5>
              </li>
              <li>
                <h5>One language website</h5>
              </li>
              <li>
                <h5>Responsive Desktop, tablet and mobile versions</h5>
              </li>
              <li>
                <h5>Facebook Pixel & Google Analytics integration</h5>
              </li>
              <li>
                <h5>Secure and scalable AWS cloud hosting</h5>
              </li>
              <li>
                <h5>Compliant Privacy Policy</h5>
              </li>
            </ul>
            <div className="service-btn-container">
              <button>CTA</button>
              <h3 className="pricing">£1400</h3>
            </div>
          </div>
        </div>
        <div className="ticker-container">
          <h2 className="ticker-text">ADDITIONAL SERVICES AVAILABLE</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;

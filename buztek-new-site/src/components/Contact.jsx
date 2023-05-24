import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-header-container">
          <h1>CONTACT US</h1>
        </div>
        <div className="contact-cta-container">
          <h5>
            We are always open to conversations regarding your technological
            needs
          </h5>
          <button>CTA</button>
        </div>
        <div className="contact-links-container">
          <p>Buztek Ltd</p>
          <h4>
            132-134 Great Ancoats Street, {<br />}
            Manchester, M4 6DE
          </h4>
          <a href="mailto:buztek@post.com">
            <h4>buztek@post.com</h4>
          </a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
        </div>
        <div className="contact-img-container">
          <img
            className="contact-image"
            src="https://images.pexels.com/photos/6214909/pexels-photo-6214909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="bee on a flower"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

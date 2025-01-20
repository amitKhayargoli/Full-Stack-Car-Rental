import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-motto">
          <a className="lo" style={{ fontWeight: "bold" }}>
            <span>LO</span>DEX
          </a>

          <p>
            "Drive Your Dream, Hassle-Free: The Ultimate Solution for Buying and
            Selling Cars"
          </p>

          <h5 className="copyright">
            &copy; 2025 Lodex INC. All rights reserved.
          </h5>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Reviews</a>
          <a href="#">Contact</a>
        </div>

        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <i class="fa-brands fa-facebook" style={{ color: "#aaa" }}></i>

            <i class="fa-brands fa-discord" style={{ color: "#aaa" }}></i>
            <i class="fa-brands fa-github" style={{ color: "#aaa" }}></i>

            <i class="fa-brands fa-youtube" style={{ color: "#aaa" }}></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

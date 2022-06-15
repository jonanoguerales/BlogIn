import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footerInfo">
        <h2>Copyright © | SouJabbar & Jonathan</h2>
      </div>
      <div className="footerIcons">
        <a href="https://es-es.facebook.com/" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://www.pinterest.es/" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

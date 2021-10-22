import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Akashdeep.`}
    </span>
  </footer>
);

export default Footer;

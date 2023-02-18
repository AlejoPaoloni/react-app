import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css" 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="copyright">
          <h4 className="footer-description"><FontAwesomeIcon icon={faCopyright} />2022 Mauri Sport - TODOS LOS DERECHOS RESERVADOS.</h4>
        </div>
        <div className="redes">
          <a className="facebook" href="https://www.facebook.com/profile.php?id=100006387197580&sk=photos_albums" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className="instagram" href="https://www.instagram.com/maurisport_/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    </footer>
  )
}

export default Footer;
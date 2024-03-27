import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
  return (
    <div>
      <Container>
        <div className='singleCol social-media-icons d-flex justify-content-evenly'>
          <a href='https://facebook.com'>
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href='https://instagram.com'>
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href='https://twitter.com'>
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href='https://tiktok.com'>
            <FontAwesomeIcon icon={faTiktok}/>
          </a>
          <a href='https://youtube.com'>
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </div>
      </Container>
    </div>
  );
}

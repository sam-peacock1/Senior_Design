import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/githubLogo.svg';
import navIcon2 from '../assets/img/linkedLogo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://github.com/sam-peacock1" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/sam-a-peacock" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="LinkedIn" />
              </a>
          </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
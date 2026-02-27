import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import cppLogo from "../assets/img/cppLogo.svg";
import csharpLogo from "../assets/img/csLogo.svg";
import cLogo from "../assets/img/cLogo.svg";
import cssLogo from "../assets/img/cssLogo.svg";
import jsLogo from "../assets/img/javascriptLogo.svg";
import javaLogo from "../assets/img/javaLogo.svg";
import pythonLogo from "../assets/img/pythonLogo.svg";
import sqlLogo from "../assets/img/sqlLogo.svg";
import vbaLogo from "../assets/img/vbaLogo.svg";
import tableauLogo from "../assets/img/tableauLogo.svg";
import gitLogo from "../assets/img/gitLogo.svg";
import mercurialLogo from "../assets/img/mLogo.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my skills!</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
              >
                <div className="item">
                  <img src={cppLogo} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={csharpLogo} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={cLogo} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="Image" />
                  <h5>CSS</h5>
                </div>
                  <div className="item">
                  <img src={jsLogo} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={javaLogo} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={sqlLogo} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={vbaLogo} alt="Image" />
                  <h5>VBA</h5>
                </div>
                <div className="item">
                  <img src={tableauLogo} alt="Image" />
                  <h5>Tableau</h5>
                </div>
                <div className="item">
                  <img src={gitLogo} alt="Image" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={mercurialLogo} alt="Image" />
                  <h5>Mercurial</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
//import headerIMG from '../assets/img/header-img.svg';
export const Bannar = () => {
    return (
        <section className = 'bannar' id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className = "tagline" > Welcome to my portfolio! </span>
                        <h1>{"Hello, I'm Sam Peacock"}
                            <span classsName = "wrap"> </span>
                        </h1>
                        <p>
                            Im a software developer currently pursuing a Bachelor of Science in Computer Science at the University of Cincinnati, alongside a Certification in Cyber Operations. My background spans full-stack development, robotics software, and system infrastructure, with hands-on engineering experience at companies like Bosch, Fives, and the Cincinnati Reds. I am highly passionate about tackling complex technical challenges—whether that involves diving deep into operating systems and automata, exploring the intricacies of network security, or building responsive, user-centric web applications. From optimizing robotic calibration testing in C++ to building out interactive React interfaces, I enjoy creating efficient, scalable solutions that make a tangible impact.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src = {headerIMG} alt = "header img"/> */}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
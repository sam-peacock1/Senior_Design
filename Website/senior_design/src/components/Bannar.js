import { Container, Row, Col } from "react-bootstrap";
import profileImg from '../assets/img/mugshot.jpg';

export const Bannar = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio!</span>
                        <h1>
                            {"Hello, I'm Sam Peacock"}
                            <span className="wrap"></span>
                        </h1>
                        
                        <div>
                            <p>
                                I'm a software developer currently pursuing a <strong>Bachelor of Science in Computer Science</strong> at the <strong>University of Cincinnati</strong>, alongside a Certification in <strong>Cyber Operations</strong>.
                            </p>
                            
                            <p className="mt-3">
                                My background spans full-stack development, robotics software, and system infrastructure, with hands-on engineering experience at companies like <strong>Bosch, Fives, and the Cincinnati Reds</strong>.
                            </p>

                            <p className="mt-3">
                                I am highly passionate about tackling complex technical challenges—whether that involves diving deep into operating systems and automata, exploring the intricacies of cybersecurity and malware analysis, or building responsive, user-centric web applications. From optimizing robotic calibration testing in C++ to building out interactive React interfaces, I enjoy creating efficient, scalable solutions that make a tangible impact.
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="two-col-image">
                            <img src={profileImg} alt="Sam Peacock Headshot" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
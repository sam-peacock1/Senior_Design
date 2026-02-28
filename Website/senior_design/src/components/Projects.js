import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return(
        <section className = "Projects" id="Projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my personal projects during my time at the University of Cincinnati.</p>
                        <Tab.Container id="Projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Senior Design Project
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            Personal Portfolio Website (this website!)
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Full Stack Web Application
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            Grocery store stock management system
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        EV3 Robot
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            EV3 robot that can complete a list of tasks
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p> For my senior design project, I created this personal portfolio website using React and Bootstrap. I designed and implemented the website to showcase my skills, experience, and projects in a visually appealing and user-friendly manner. The website features a responsive design that adapts to different screen sizes, ensuring a seamless experience across devices. It includes sections for my biography, skills, experience, and projects, allowing visitors to easily navigate and learn more about my background and accomplishments. I also integrated various interactive elements, such as a carousel for showcasing my skills and a tabbed interface for displaying my experience and projects. Overall, this project allowed me to demonstrate my proficiency in web development and create a platform to effectively present myself to potential employers and collaborators.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
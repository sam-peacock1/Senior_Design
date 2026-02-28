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
                                        Fives Machining Systems
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            Software Developer
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Cincinnati Reds
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            GameDay Systems Developer
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Bosch
                                        <br />
                                        <span style={{ fontSize: '14px', fontWeight: '400', opacity: '0.8' }}>
                                            MES Developer
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
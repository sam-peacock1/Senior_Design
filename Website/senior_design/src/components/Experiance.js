import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import redsLogo from "../assets/img/redsLogo.svg";
import boschLogo from "../assets/img/boschLogo.svg";
import fivesLogo from "../assets/img/fivesLogo.svg";

export const Experiance = () => {
    return(
        <section className="Experiance" id="Experiance">
            <Container>
                <Row>
                    <Col>
                        <h2>Experience</h2>
                        <p>Here are some of my professional experiences! They are ordered from most to least recent.</p>
                        <Tab.Container id="Experiance-tabs" defaultActiveKey="first">
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
                                    <div className="experience-content">
                                        
                                        {/* Fives Header */}
                                        <div className="experience-header">
                                            <div className="experience-logo">
                                                <img src={fivesLogo} alt="Fives Machining Systems Logo" />
                                            </div>
                                            <div>
                                                <h4>Software Developer</h4>
                                                <span className="experience-company">Fives Machining Systems</span>
                                            </div>
                                        </div>

                                        <p>Fives Machining Systems is a leading manufacturer of precision machining equipment and solutions for the aerospace, automotive, and industrial sectors. I had the opportunity to work on various projects involving large robots that lay plys of carbon fiber tape onto aircraft parts.</p>
                                        <p className="mt-3"><strong>Some of my responsibilities included:</strong></p>
                                        <ul>
                                            <li>Created an application with a C++ backend and a C# frontend, that allowed customers to test their mandrel placement calibration, decreasing testing and building time during robot construction.</li>
                                            <li>Implemented the ability to view the amount of material needed before a course and ply is run, stopping the robot and alerting operators if there is not enough material on the tow before running, decreasing material waste and operational downtime.</li>
                                            <li>Added walls and other qualities to specific customers' 3D robot viewer if their robot placement was near walls or other obstacles with a collision detector to prevent accidental collisions.</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="experience-content">
                                        
                                        {/* Reds Header */}
                                        <div className="experience-header">
                                            <div className="experience-logo">
                                                <img src={redsLogo} alt="Cincinnati Reds Logo" />
                                            </div>
                                            <div>
                                                <h4>GameDay Systems Developer</h4>
                                                <span className="experience-company">Cincinnati Reds</span>
                                            </div>
                                        </div>

                                        <p>The Cincinnati Reds is a Major League Baseball team based in Cincinnati, Ohio. I worked in the GameDay Systems Developer role, where I was responsible for maintaining and improving the systems that support game day operations.</p>
                                        <p className="mt-3"><strong>Some of my responsibilities included:</strong></p>
                                        <ul>
                                            <li>Assisted in the migration to Microsoft Azure AD, contributing to the smooth operation of a 400-user network.</li>
                                            <li>Completed IT support tickets for users, ranging from writing scripts for DevOps to live walkthroughs of ticket solutions, resolving 30+ requests per week.</li>
                                            <li>Provided technical support and troubleshooting issues that arise during game day operations.</li>
                                            <li>Collaborated with other members of the IT team to set up for private events and special occasions.</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="experience-content">
                                        
                                        {/* Bosch Header */}
                                        <div className="experience-header">
                                            <div className="experience-logo">
                                                <img src={boschLogo} alt="Bosch Logo" />
                                            </div>
                                            <div>
                                                <h4>MES Developer</h4>
                                                <span className="experience-company">Bosch</span>
                                            </div>
                                        </div>

                                        <p>Bosch is a global engineering and technology company that provides solutions for various industries. I worked in the MES Developer role, where I was responsible for developing and maintaining Manufacturing Execution Systems (MES) that support manufacturing operations.</p>
                                        <p className="mt-3"><strong>Some of my responsibilities included:</strong></p>
                                        <ul>
                                            <li>Added ability to track and live monitor robot crashes, soft impacts, teaching data, torque, and error degree enabling preemptive problem detection, saving roughly $62,000 in repair costs and downtime.</li>
                                            <li>Programmed a scheduled script using Python to pull all type data from all Bosch assembly line stations and created a Tableau visualization for this data, decreasing troubleshooting downtime by 36%.</li>
                                            <li>Pushed paperless documentation for assembly line, modifying all checklists to be user friendly and automatically save to a long-term storage archive after completion; and developed a UI for operators to easily access new checklists, PQIs, and daily Tableau reports.</li>
                                            <li>Provided technical support and troubleshooting issues that arise during manufacturing operations.</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
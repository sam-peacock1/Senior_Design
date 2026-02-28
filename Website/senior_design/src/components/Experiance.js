import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

export const Experiance = () => {
    return(
        <section className = "Experiance" id="Experiance">
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
                                <p> Fives Machining Systems is a leading manufacturer of precision machining equipment and solutions for the aerospace, automotive, and industrial sectors. I had the opportunity to work on various projects involving large robots that lay plys of carbon fiber tape onto aircraft parts.
                                    <p>Some of my responsibilities included:</p>
                                    <ul>
                                        <li>Creating an application with a C++ backend and a C# frontend, that allowed customers to test their mandrel placement calibration, decreasing testing and building time during robot construction</li>
                                        <li>implimented the ability to view the amount of material needed before a course and ply is run, stopping the robot and alerting operators if there is not enough material on the tow before running, decreasing material waste and operational downtime.</li>
                                        <li>Added walls and other qualitys to specific customers 3D robot viwer if their robot placment was near walls or other obsicals with a collision detector to prevent accidental collisions.</li>
                                    </ul>
                                </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <p> The Cincinnati Reds is a Major League Baseball team based in Cincinnati, Ohio. I worked on the GameDay Systems Developer role, where I was responsible for maintaining and improving the systems that support game day operations.
                                    <p>Some of my responsibilities included:</p>
                                    <ul>
                                        <li>Assisted in the migration to Microsoft Azure AD, contributing to the smooth operation of a 400-user network</li>
                                        <li>Completed IT support tickets for users, ranging from writing scripts for DevOps to live walkthroughs of ticket solutions, resolving 30+ requests per week</li>
                                        <li>Providing technical support and troubleshooting issues that arise during game day operations</li>
                                        <li>Collaborating with other members of the IT team to set up for private events and special occasions</li>
                                    </ul>
                                </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p> Bosch is a global engineering and technology company that provides solutions for various industries. I worked on the MES Developer role, where I was responsible for developing and maintaining Manufacturing Execution Systems (MES) that support manufacturing operations.
                                    <p>Some of my responsibilities included:</p>
                                    <ul>
                                        <li>Added ability to track and live monitor robot crashes, soft impacts, teaching data, torque, and error degree enabling preemptive problem detection, saving roughly $62,000 in repair costs and downtime</li>
                                        <li>Programmed a scheduled script using Python to pull all type data from all Bosch assembly line stations and created a Tableau visualization for this data, decreasing troubleshooting downtime by 36%</li>
                                        <li>Pushed paperless documentation for assembly line, modifying all checklists to be user friendly and automatically save to a long-term storage archive after completion; and developed a UI for operators toeasily access new checklists, PQI’s, and daily Tableau reports</li>
                                        <li>Providing technical support and troubleshooting issues that arise during manufacturing operations</li>
                                    </ul>
                                </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
// import fullStackImg from "../assets/img/full-stack.png"; 
// import robotImg from "../assets/img/robot.png";

export const Projects = () => {
    return(
        <section className="Projects" id="Projects">
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
                                    {/* Text-only layout, constrained width */}
                                    <div className="experience-content">
                                        <p>For my senior design project, I created this personal portfolio website to showcase my skills, experience, and projects in a visually appealing and user-friendly manner.</p>
                                        <ul>
                                            <li><strong>Tech Stack:</strong> Designed and implemented using React and Bootstrap.</li>
                                            <li><strong>Responsive Design:</strong> Adapts to different screen sizes, ensuring a seamless experience across mobile and desktop devices.</li>
                                            <li><strong>Interactive Elements:</strong> Integrated a custom carousel for showcasing technical skills and a dynamic tabbed interface for professional experience.</li>
                                            <li><strong>Objective:</strong> Demonstrates my proficiency in modern web development and creates a centralized platform to effectively present myself to employers.</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {/* Image Left, Text Right layout */}
                                    <div className="tab-content-split">
                                        <div className="tab-content-image">
                                            {/* Swap this placeholder for your actual image later */}
                                            <img src="https://via.placeholder.com/600x350/151515/FFFFFF?text=Grocery+App+Screenshot" alt="Grocery Store UI" />
                                        </div>
                                        <div className="tab-content-text">
                                            <p>Developed a grocery store website supporting both customer and employee accounts.</p>
                                            <ul>
                                                <li><strong>Tech Stack:</strong> Built using a Python back-end and a Dash front-end.</li>
                                                <li><strong>Customer Features:</strong> Users can place orders, browse the store, and edit their account information.</li>
                                                <li><strong>Employee Features:</strong> Authorized accounts can edit item stock, update prices, and add new items to the inventory.</li>
                                                <li><strong>Data Management:</strong> All information is manipulated and stored securely in a relational database.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    {/* Image Left, Text Right layout */}
                                    <div className="tab-content-split">
                                        <div className="tab-content-image">
                                            {/* Swap this placeholder for your actual image later */}
                                            <img src="https://via.placeholder.com/600x350/151515/FFFFFF?text=EV3+Robot+Photo" alt="EV3 Robot" />
                                        </div>
                                        <div className="tab-content-text">
                                            <p>Designed and programmed an EV3 robot capable of completing a specific list of automated tasks.</p>
                                            <ul>
                                                <li><strong>Hardware:</strong> Constructed the physical chassis and integrated required sensors and motors.</li>
                                                <li><strong>Programming:</strong> Developed the algorithms required for pathfinding and task execution.</li>
                                                <li><strong>Testing:</strong> Iterated on the design and code to optimize for speed, accuracy, and reliability.</li>
                                            </ul>
                                        </div>
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
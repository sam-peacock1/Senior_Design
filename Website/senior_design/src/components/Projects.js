import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: "https://via.placeholder.com/150"
        },
        {
            title: "Project Two",
            description: "Description for project two.",
            imgUrl: "https://via.placeholder.com/150"
        },
        {
            title: "Project Three",
            description: "Description for project three.",
            imgUrl: "https://via.placeholder.com/150"
        }
    ];
    return(
        <section className = "project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* Background image 
            <img className="background-image-right" src={""} alt="Image" /> */}
        </section>
    )
};
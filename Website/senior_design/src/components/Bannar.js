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
                            <span classsName = "wrap"> Software Developer </span>
                        </h1>
                        <p>
                            about me parahraph!!!
                        </p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size = {25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src = {headerIMG} alt = "header img"/> */}
                    </Col>
                </Row>1
            </Container>

        </section>
    )
}
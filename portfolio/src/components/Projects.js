import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
const Projects = () =>{
    const projects = [
        {
            title: 'Full Stack Angular site',
            description: 'Designed a simple Angular full stack site',
            imgUrl: projImg1
        },
        {
            title: 'Recipe Generator',
            description: 'Simple recipe Generator built with react and Spoonly API, Just add ingredients available and it will give you recipes based off those ingredients',
            imgUrl: projImg2
        },
        {
            title: 'Snake Game',
            description: 'Snake game built with Vanilla JS, keeps high score and give you sound when you bite, pretty simple but also pretty fun to make',
            imgUrl: projImg3
        },
    ]
    return (
        <>
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Well the years start coming and they don't stop coming back to the road where you hit the ground running</p>
                    <Tab.Container id ="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Basic Projects</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="seconde">Games</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="third">Fun</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return <ProjectCard 
                                                key ={index}
                                                {...project}
                                                />
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">HEY</Tab.Pane>
                        <Tab.Pane eventKey="third">you</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>

        </section>
        
        </>
    )
}

export default Projects
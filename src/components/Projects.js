import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "TaskTrek Application",
      description: "A job portal platform",
      imgUrl: projImg1,
      url: 'https://tasktrek-766fe.web.app/index.html',
    },
    {
      title: "BookBazaar Application",
      description: "A marketplace for books",
      imgUrl: projImg2,
      url: "",
    },
    {
      title: "Location Tracker Application",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://zidio-geolocation-1irnytpdn-isaac-zik-rgbs-projects.vercel.app/",
    },
    {
      title: "YouTube Video Downloader Application",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url: '',
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I thrive in dynamic environments where I can apply my technical expertise to solve complex challenges and drive innovation. With a strong foundation in software engineering principles and a knack for continuous learning, I am committed to delivering high-quality solutions that exceed expectations and drive business growth.</p>
                <p>Portfolio Highlights</p>:

<p>Enterprise-grade Backend Systems: Designed and implemented backend systems for large-scale enterprises, ensuring reliability, scalability, and security. Leveraged AWS services such as EC2, RDS, and S3 to build robust infrastructures capable of handling millions of requests per day.
Microservices Architecture: Developed microservices-based architectures using Java and Node.js, enabling modularization, flexibility, and scalability. Implemented service discovery, load balancing, and fault tolerance mechanisms to ensure system resilience.
Serverless Applications: Built serverless applications using AWS Lambda, API Gateway, and DynamoDB, enabling automatic scaling and cost optimization. Leveraged event-driven architecture to create responsive and efficient workflows.
Data Processing Pipelines: Designed and implemented data processing pipelines using Python and AWS services like S3, Glue, and Athena. Developed ETL processes to extract, transform, and load data from various sources, enabling actionable insights and informed decision-making.</p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Java: With years of experience developing in Java, I excel in crafting high-performance, enterprise-grade applications. Whether it's building RESTful APIs, implementing microservices architectures, or optimizing database interactions, I ensure that the codebase is maintainable, efficient, and adheres to best practices.</p>

<p><strong>Python:</strong> Python is my go-to language for rapid prototyping, data processing, and scripting tasks. From developing machine learning models to automating workflows, I leverage Python's simplicity and versatility to deliver solutions that meet diverse business needs.</p>

<p><stron>Node.js:</stron> Asynchronous programming with Node.js allows me to build real-time applications and APIs with speed and scalability. I leverage the event-driven architecture of Node.js to create responsive and high-throughput systems, ensuring seamless user experiences.</p>

<p><strong>AWS Services:</strong> I am proficient in leveraging AWS services to design, deploy, and manage cloud-based solutions. From utilizing EC2 for scalable compute resources to implementing serverless architectures with AWS Lambda, I leverage AWS's extensive suite of tools to optimize performance, reliability, and cost-effectiveness.</p>



                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="java project" />
                                <h5>Java Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Python Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Django Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Dagger</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}
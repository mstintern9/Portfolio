import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/todo-3.PNG";
import projImg2 from "../assets/img/todo-react-2.PNG";
import projImg3 from "../assets/img/etracker-8.PNG";
import projImg4 from "../assets/img/weather4.PNG";
import projImg5 from "../assets/img/lmsdashboard.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Todo List in Vanilla JS",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://crud-operation-eta-one.vercel.app/"
    },
    {
      title: "Todo List ",
      description: "Design & Development",
      imgUrl: projImg2,
      link:"https://react-crud-amber.vercel.app/"
    },
    {
      title: "Expense Tracker",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://expense-tracker-pi-puce.vercel.app/add-expense"
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg4,
      link:"https://weather-app-weld-phi.vercel.app/"
    },
    {
      title: "LMS",
      description: "Design & Development",
      imgUrl: projImg5,
      link:"https://leave-management-system-ecru.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  } 
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    These are my Projects that I have done as a Front-end
                    Developer. These projects are made with the help of
                    HTML,CSS,JS, Material UI , React JS, React routers, React
                    hooks and React Life cycle.Project are Todo List in JS, Todo
                    in React, Expense Tracker,Weather App and Leave Management
                    System.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

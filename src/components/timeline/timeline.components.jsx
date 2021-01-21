import React from "react";
import  {Timeline, Events, UrlButton, ImageEvent} from '@merc/react-timeline';

// projects
import L_Pothole from "../../assets/project/pothole_detect.webp";
import L_Malnutri from "../../assets/project/malnutrition_app.webp";
import L_Amazon from "../../assets/project/amazon.webp";
import L_Smart from "../../assets/project/smart.webp";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// skills
import L_ANDROID from "../../assets/skills/android.svg";
import L_FIREBASE from "../../assets/skills/firebase.svg";
import L_GIT from "../../assets/skills/github.svg";
import L_DEEPL from "../../assets/skills/deepl.svg";
import L_REACT from "../../assets/skills/react.svg";
import L_HTML5 from "../../assets/skills/html-5.svg";
import L_CSS3 from "../../assets/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/skills/bootstrap-4.svg";


import "./timeline.styles.css";

const ProjTimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

        {/* S-Mart App */}
        <ImageEvent
            date="05/01/2021"
            className="text-center"
            text="S-MART"
            src={L_Smart}
            alt="S-Mart"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A E-comm website buit using react.js and firebase for clothing accessories and daily use items.                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> Buy any items on website </li>
                          <li> Payment using Stripe</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT.JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT.JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://swadeshimart.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Omkar2310/smart"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

        
        {/* AMAZON CLONE */}
        <ImageEvent
            date="23/09/2020"
            className="text-center"
            text="AMAZON CLONE"
            src={L_Amazon}
            alt="AMAZONE App CLONE"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> FULL stack AMAZON CLONE USING REACT.JS
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>E-commerce website </li>
                          <li>Payment using Stripe</li>
                          <li>Firebase for Real-time Product Storage </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT.JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT.JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://clone-f2c03.firebaseapp.com"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Omkar2310/amazon-clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

    
        {/* Project: Pothole Detection App */}
        <ImageEvent
            date="10/01/2020"
            className="text-center"
            text="Pothole Detection App"
            src={L_Pothole}
            alt="Pothole Detect App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Android app for Pothole Detection using Deep Learning
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Clicked image is detected for pothole presence </li>
                          <li>If pothole is present complaint forwarded to PWD department</li>
                          <li>User can track their complaints</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANDROID}
                                alt="Android"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ANDROID
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="GIT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GITHUB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DEEPL}
                                alt="DEEP LEARNING"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              DEEP LEARNING
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/Omkar2310/PotholeFixitApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        {/* Project: PoSHAN app */}
        <ImageEvent
            date="10/10/2019"
            className="text-center"
            text="Poshan App-Malnutrition"
            src={L_Malnutri}
            alt="Malnutrition App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> App made for Anganwadi workers to computerize
                        their work.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Anganwadi Workers can use it to gather children data</li>
                          <li>App stores data of malnutritioned children into a
database,analytical graphs can be made and used by higher authorities for policy formation.</li>
                          <li>Continous Progress of Child can be assesed</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANDROID}
                                alt="Android"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ANDROID
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="GIT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GITHUB
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex center text-center">
                
                <UrlButton
                  href="https://github.com/omkar2310/MalnutritionAndroidApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

         
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjTimeLine;
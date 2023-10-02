import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinit Pundeer </span>
            from <span className="purple"> Shamli, Uttar Pradesh, India.</span>
            <br />I am a student pursuing B.Tech in Computer Science & Engineering from AKGEC Ghaziabad.
            <br />
            <br />
            Apart from coding and development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 
              Listening music in free time
            </li>
            <li className="about-activity">
              <ImPointRight /> little bit Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build the things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">VINIT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

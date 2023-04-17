import React from "react";
import profilePic from "../assets/aboutProfilePic.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/About.css";

function About() {
  document.title = "Portfolio - About Me";

  return (
    <div className="about">
      <div className="leftSide">
        <div id="codeSection">
          <pre>
            <SyntaxHighlighter
              language="js"
              style={vscDarkPlus}
              PreTag="div"
              showLineNumbers="true"
              children={`
  // THESE ARE NOT MY SKILLS !!!!!!
  // I'VE ADDED THEM AS A PLACEHOLDER
  // I'LL UPDATE THIS ASAP !!!!!!!!

  const aboutMe = {
  pronouns: "he" || "him",
  
  code: [ TypeScript, JavaScript, PHP, HTML, CSS ],
  
  technologies: 
  {
    frontEnd: 
    {
      js: [ React, "jQuery", "Web Components" ],
      css: 
          [
            "Bulma", 
            "Styled-Components", 
            "Bootstrap", 
            "Semantic UI", 
            "Material UI", 
            "Tailwind"
          ],
      templates: [ "Handlebars", "Twig" ]
    },
    backEnd: 
    {
      js: [ "Node", "Express" ],
      misc: [ "Docker", GraphQL, "Redis" ]
    },
    mobile: 
    { js: [ "React Native" ],
      misc: [ "Android Studio", "XCode" ]
    },
  },

  CMS: [ "Drupal 8/9/10", "WordPress", "SquareSpace" ],

  databases: [ "MongoDB", "mySQL", "postgreSQL", "MariaDB" ],

  currentOccupation: "Software Developer",
  currentChallenges: [ "Multiplayer Application" ]
  };
          `}
            />
          </pre>
        </div>
      </div>

      <div className="rightSide">
        <h1>About Me</h1>
        <div
          className="profilePic"
          style={{ backgroundImage: `url(${profilePic})` }}
        ></div>
        <p>
          &emsp;Hi There! I'm glad you've made it to my personal website. I am a
          Software Developer with a Passion for coding and problem-solving. I
          recently graduated from a "Full-Stack Web Developer Bootcamp" by
          Denver University and have been actively honing various programming
          skills and techniques ever since. I am excited to work on projects
          that challenge me and allow me to grow as a developer. In my free
          time, I enjoy reading about new technologies and exploring the latest
          trends in software development. I'm always eager to learn more and
          take on new challenges.
        </p>
      </div>
    </div>
  );
}

export default About;

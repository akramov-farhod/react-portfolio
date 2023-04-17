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
              children={`const aboutMe = {
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          asperiores totam dolor reiciendis eos ea dolores quas aperiam nihil
          odit! Ad excepturi optio deserunt delectus eius officia pariatur
          tempore aut!
        </p>
      </div>
    </div>
  );
}

export default About;

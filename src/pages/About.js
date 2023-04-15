import React from "react";
import aboutPlaceholder from "../assets/contactPlaceholder.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${aboutPlaceholder})` }}
      ></div>
      <div className="rightSide">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          perferendis tempore repellat iure? Deserunt iusto illum possimus ab
          aut vitae ullam nostrum. Accusantium provident consectetur amet
          excepturi repellat pariatur? Ullam laborum aliquam id alias
          consequuntur sunt facilis voluptates tempora ratione aspernatur,
          veniam modi consectetur nobis saepe vitae ipsam animi praesentium
          corrupti facere atque pariatur? Ex, beatae? Quasi ipsa sint aspernatur
          consectetur labore, suscipit id ratione minima magni perspiciatis
          inventore corrupti doloribus delectus incidunt, distinctio illo autem
          quos. Voluptates libero quaerat a? Reprehenderit nisi soluta dicta
          odit nesciunt nemo odio rerum! Voluptate numquam dolore voluptatum sed
          consequatur dignissimos exercitationem eveniet? Dolore.
        </p>
      </div>
    </div>

    // <div className="about">
    //   <div
    //     className="aboutLeft"
    //     style={{ backgroundImage: `url(${aboutPlaceholder})` }}
    //   ></div>

    //   <div className="aboutRight">
    //     <h1>ABOUT ME</h1>

    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    //       perferendis tempore repellat iure? Deserunt iusto illum possimus ab
    //       aut vitae ullam nostrum. Accusantium provident consectetur amet
    //       excepturi repellat pariatur? Ullam laborum aliquam id alias
    //       consequuntur sunt facilis voluptates tempora ratione aspernatur,
    //       veniam modi consectetur nobis saepe vitae ipsam animi praesentium
    //       corrupti facere atque pariatur? Ex, beatae? Quasi ipsa sint aspernatur
    //       consectetur labore, suscipit id ratione minima magni perspiciatis
    //       inventore corrupti doloribus delectus incidunt, distinctio illo autem
    //       quos. Voluptates libero quaerat a? Reprehenderit nisi soluta dicta
    //       odit nesciunt nemo odio rerum! Voluptate numquam dolore voluptatum sed
    //       consequatur dignissimos exercitationem eveniet? Dolore.
    //     </p>
    //   </div>
    // </div>
  );
}

export default About;

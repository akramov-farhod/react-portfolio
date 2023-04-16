import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Keyboard from "@mui/icons-material/KeyboardRounded";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon /> <LinkedInIcon />
      </div>
      <div className="madeWith">
        &copy;{` 2023 | Built using a`}
        &nbsp;
        <Keyboard />
        &nbsp;{`and a whole lotta ❤️`}
      </div>
    </div>
  );
}

export default Footer;

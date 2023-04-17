import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Keyboard from "@mui/icons-material/KeyboardRounded";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/akramov-farhod" target="_blank">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon />
        </Link>
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

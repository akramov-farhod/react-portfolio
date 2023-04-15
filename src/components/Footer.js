import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon /> <LinkedInIcon />
        <p>&copy; 2023 Footer</p>
      </div>
    </div>
  );
}

export default Footer;

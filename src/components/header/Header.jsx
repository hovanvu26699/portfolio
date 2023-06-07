import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer dflex-alg-c">
        <div className="headerTab">
          <ul className="headerTabList dflex-alg-c">
            <li>Experience</li>
            <li>Proyectos</li>
            <li>Contactor</li>
          </ul>
        </div>
        <div className="headerSocial">
          <ul className="headerSocialList dflex-alg-c">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

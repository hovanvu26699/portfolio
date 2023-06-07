import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <p>¡Me gustaría tener tu contacto!</p>
        <div className="footerSocial">
          <ul className="footerSocialList dflex-alg-c">
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
        <p>¿Tenes un proyecto en mente? ¡Hagamoslo realidad!</p>
        <p className="email">hovanvu@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;

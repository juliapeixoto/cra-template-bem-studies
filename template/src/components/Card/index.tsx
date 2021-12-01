import icProfile from "../../assets/img/icon_profile.jpeg";
import icGithub from "../../assets/svg/ic_github.svg";
import icLinkedin from "../../assets/svg/ic_linkedin.svg";
import "./style.scss";

export default function Card() {
  return (
    <div className="container">
      <img className="profileImg" src={icProfile} alt="Foto de perfil" />
      <span className="cardName">Nome Completo</span>
      <div className="divider" />

      <div className="containerButtons">
        <button className="firstButton">RESUME</button>
        <button className="secondButton">PROJECTS</button>
      </div>

      <div className="containerLinks">
        <img className="iconLink" src={icGithub} alt="Ícone GitHub" />
        <img className="iconLink" src={icLinkedin} alt="Ícone Linkedin" />
      </div>
    </div>
  );
}

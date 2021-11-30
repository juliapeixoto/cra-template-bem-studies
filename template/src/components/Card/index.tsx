import icProfile from "../../assets/img/icon_profile.jpeg";
import icGithub from "../../assets/svg/ic_github.svg";
import icLinkedin from "../../assets/svg/ic_linkedin.svg";
import "./style.scss";

export default function Card() {
  return (
    <div className="card">
      <img
        className="card__inner__profile"
        src={icProfile}
        alt="Foto de perfil"
      />
      <span>Júlia Peixoto</span>
      <div className="card__inner__divider" />

      <div className="card__inner__buttons">
        <button>RESUME</button>
        <button>PROJECTS</button>
      </div>

      <div className="card__inner__links">
        <img src={icGithub} alt="Ícone GitHub" />
        <img src={icLinkedin} alt="Ícone Linkedin" />
      </div>
    </div>
  );
}

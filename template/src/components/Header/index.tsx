import "./style.scss";

export default function Header() {
  return (
    <div className="wrapperHeader">
      <div className="wrapperHeader-container">
        <div className="containerInfo">
          <div className="square" />
          <p className="user-name">Nome Completo</p>
        </div>
        <span className="bigText">SOFTWARE ENGINEER</span>
      </div>
    </div>
  );
}

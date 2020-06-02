import React from "react";
import "./Header.css";
import icono from "../../assets/images/icono.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={icono} alt="ARAssistant"></img>
      </div>
    );
  }
}

export default Header;

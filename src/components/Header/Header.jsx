import React from "react";
import "./Header.css";
import icono from "../../assets/images/icono.png";
import { Redirect } from "react-router";

class Header extends React.Component {
  state = { goToLogin: false, goToHome: false };
  //Redirect to /login
  goToLogin = () => {
    this.setState({ goToLogin: true });
  };
  //Redirect to /home
  goToHome = () => {
    this.setState({ goToHome: true });
  };

  render() {
    const { goToLogin, goToHome } = this.state;
    if (goToLogin) return <Redirect to="/login" />;
    else if (goToHome) return <Redirect to="/home" />;
    else {
      return (
        <div className="Header">
          <img src={icono} alt="ARAssistant" onClick={this.goToHome}></img>
          <button onClick={this.goToLogin}>Iniciar Sesión</button>
        </div>
      );
    }
  }
}

export default Header;

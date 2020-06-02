import React from "react";
import "./Login.css";
import Header from "../../components/Header/Header";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import Footer from "../../components/Footer/Footer";
import icono from "../../assets/images/icon_arassistant.png";
import { Redirect } from 'react-router-dom'

//Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

class Login extends React.Component {
  state = { email: "", password: "", hasAccess: false };
  //Save email in state
  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  //Save password in state
  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  //Try to login in firebase
  login = async () => {
    const { email, password } = this.state;
    var that = this;
    //Login in firebase
    firebaseAppAuth
      .signInWithEmailAndPassword(email, password)
      .then(async function (user) {
        that.setState({ hasAccess: true });
      })
      //When authentication fails
      .catch(function (error) {
        console.log(error.message);
      });
  };

  render() {
    if (this.state.hasAccess) return <Redirect to='/admin' />
    else {
      return (
        <div className="Login">
          <Header />
          <div className="Main">
            <img src={icono} alt="ARAssistant"></img>
            <div className="Form">
              <h1>Login</h1>
              <label for="email">Email</label>
              <input
                placeholder="JohnDoe@gmail.com"
                type="email"
                onChange={this.setEmail}
              ></input>
              <label for="password">Contraseña</label>
              <input
                placeholder="*****"
                type="password"
                onChange={this.setPassword}
              ></input>
              <button id="login" onClick={this.login}>
                Iniciar sesión
              </button>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Login;

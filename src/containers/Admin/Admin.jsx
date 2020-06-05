import React from "react";
import "./Admin.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Alert from "../../components/Alert/Alert";
import firebase from "firebase";
import firebaseConfig from "../../firebaseConfig";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig.firebase);
    }
    this.state = { isLoaded: false, users: {} };
  }
  //Get all users from fbdb
  getUsers = () => {
    let fbusers;
    let list = [];
    let ref = firebase.database().ref("/user");
    ref.on("value", (snapshot) => {
      console.log("Admin -> getUsers -> snapshot", typeof snapshot.val());
      fbusers = Object.keys(snapshot.val()).map((item, i) => {
        list.push(item);
      });
      fbusers = snapshot.val();
      this.setState(
        { users: fbusers, isLoaded: true, uids: list },
        this.createTable
      );
    });
  };

  //Add users to table
  createTable = (size) => {
    const users = Object.values(this.state.users);
    const uids = this.state.uids;
    let table = [];
    for (let i = 0; i < size; i++) {
      let user = users[i];
      let children = [];
      children.push(<td key={user.name}>{user.name}</td>);
      children.push(<td key={user.surname}>{user.surname}</td>);
      children.push(<td key={user.email}>{user.email}</td>);
      children.push(
        <td key="icons" id="icons">
          <Alert />
          <FaTrash
            size="3vh"
            color="#de4545"
            onClick={() => this.deleteUser(uids[i])}
          />
        </td>
      );
      table.push(<tr key={"user " + i}>{children}</tr>);
    }
    return table;
  };

  //TODO

  deleteUser = (uid) => {
    firebase
      .database()
      .ref(`user/${uid}`)
      .remove()
      .then(function () {
        console.log("Successfully deleted user");
      })
      .catch(function (error) {
        console.log("Error deleting user:", error);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="Admin">
        <Header />
        <Table striped hover responsive>
          <thead>
            <tr>
              <th id="name">Nombre</th>
              <th id="surname">Apellidos</th>
              <th id="email">Mail</th>
              <th id="actions">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.isLoaded
              ? this.createTable(Object.keys(this.state.users).length)
              : ""}
          </tbody>
        </Table>
        <Footer />
      </div>
    );
  }
}

export default Admin;

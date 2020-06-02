import React from "react";
import "./Admin.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Admin extends React.Component {
  render() {
    return (
      <div className="Admin">
        <Header />
        Admin
        <Footer />
      </div>
    );
  }
}

export default Admin;

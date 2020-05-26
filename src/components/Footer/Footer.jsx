import React from "react";
import "./Footer.css";
import bankia from "../../assets/images/bankia.png";
import fpempresa from "../../assets/images/fpempresa.png";
import iescampanillas from "../../assets/images/iescampanillas.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Desarrolladores: Lino Haller Ríos, Jorge García Molina, Rafael Aragón
          Rodríguez
        </p>
        <p>Coordinador: Moisés Martínez Gutiérrez</p>
        <p>
          <a
            href="https://github.com/jorgegarcia1996/ARAssistant"
            rel="noopener noreferrer"
            target="_blank"
          >
            Proyecto ARAssistant
          </a>
        </p>
        <img src={bankia} alt="bankia"></img>
        <img src={fpempresa} alt="fpempresa" id="fpempresa"></img>
        <img src={iescampanillas} alt="iescampanillas"></img>
      </div>
    );
  }
}

export default Footer;

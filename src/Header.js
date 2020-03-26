import React from "react";
import Card from "./component/card";
import Gabriel from "./images/Gabriel.jpg";
import Luis from "./images/Luis.jpg";
import Kamilla from "./images/Kamilla.jpg";
function Header() {
  return (
    <header>
      <Card>
        <div className="formatCard" style={{ background: "#1BB" }}>
          <img src={Gabriel} alt="icon-calendario" />
          <p>
            Gabriel
            <br />
          </p>
          <br />

          <footer className="footerCard">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=5579996449822">
              Whatsapp{" "}
            </a>
          </footer>
        </div>
      </Card>
      <br />
      <br />
      <Card>
        <div className="formatCard" style={{ background: "#1BB" }}>
          <img src={Luis} alt="icon-calendario" />
          <p>
            Luis
            <br />
          </p>
          <br />

          <footer className="footerCard">
            <a href="https://api.whatsapp.com/send?phone=5579988073454">
              Whatsapp
            </a>
          </footer>
        </div>
      </Card>
      <br />
      <br />
      <Card>
        <div className="formatCard" style={{ background: "#1BB" }}>
          <img src={Kamilla} alt="icon-calendario" />
          <p>
            Kamilla
            <br />
          </p>
          <br />

          <footer className="footerCard">
            <a href="https://api.whatsapp.com/send?phone=5579996336530">
              Whatsapp{" "}
            </a>
          </footer>
        </div>
      </Card>
    </header>
  );
}
export default Header;

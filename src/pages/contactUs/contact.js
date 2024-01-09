import React from "react";
import "./contactStyle.css";

export default function Contact() {
  // const ColoredLine = ({ color }) => (
  //   <hr
  //     style={{
  //       color: "#00000",
  //       backgroundColor: "#00000",
  //       height: 611,
  //       margin: "30px 60px 30px 60px",
  //     }}
  //   />
  // );

  const fontSize = {
    fontSize: 48,
    color: "white",
  };
  const color = {
    color: "white",
  };

  return (
    <div className="App">
      <div className="parentdiv">
        <div className="leftdiv">
          <p style={fontSize}>Contact Us</p>
          <br></br>
          <br></br>
          <h1 style={color}>Get In Touch</h1>
          <br></br>
          <br></br>
          <p style={color}>
            To report a technical issue with our app, please contact the
            highlighted developers with a summary of the issue along with a
            screenshot, the url, your browser version, browser extensions
            enabled, operating system, and the make & model of your device.
          </p>
        </div>
        {/* <ColoredLine color="red" /> */}
        <div className="rightdiv">
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="shreyanshchaurasia"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://in.linkedin.com/in/shreyanshchaurasia?trk=profile-badge"
            >
              Shreyansh Chaurasia
            </a>
          </div>

          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="ritik-agarwal-a55317161"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://in.linkedin.com/in/ritik-agarwal-a55317161?trk=profile-badge"
              target={"_blank"}
              rel="noreferrer"
            >
              Ritik Agarwal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

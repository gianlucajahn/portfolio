import React, { useContext } from "react";
import "./ContextMenu.scss";
import { ReactComponent as SourceCode } from "../../assets/images/sourcecode.svg";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as GitHub } from "../../assets/images/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as Share } from "../../assets/images/share.svg";
import toast, { Toaster } from "react-hot-toast";
import { store } from "../../App";
import playAudio from "../../utils/helpers/playAudio";

export default function ContextMenu() {
  const [state, dispatch] = useContext(store);

  const copyEmail = () => {
    navigator.clipboard.writeText("gianluca.jahn98@gmail.com");
    toast(state.language === "english" ? "E-Mail kopiert!" : "Copied E-Mail!", {
      icon: "📧",
      position: "top-left",
      style: {
        border: state.darkmode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: state.darkmode ? "white" : "#1d1d1f",
        fontSize: "14px",
        backgroundColor: state.darkmode ? "#141414" : "",
      },
    });
  };

  const copyURL = () => {
    navigator.clipboard.writeText("https://gianluca-jahn.de");
    toast(state.language === "english" ? "Link kopiert!" : "Copied URL!", {
      icon: "🌐",
      position: "top-left",
      style: {
        border: state.darkmode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: state.darkmode ? "white" : "#1d1d1f",
        fontSize: "14px",
        backgroundColor: state.darkmode ? "#141414" : "",
      },
    });
  };

  return (
    <div
      className={`context-menu ${
        state.darkmode ? "dark-context-menu" : "light-context-menu"
      }`}
      id="context-menu"
    >
      <a
        target="_blank"
        href="https://github.com/gianlucajahn/portfolio"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <SourceCode className="context-icon" />
          <h3>{state.language === "english" ? "Quelltext" : "Source Code"}</h3>
        </div>
      </a>

      <a
        target="_blank"
        href="https://github.com/gianlucajahn"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <GitHub className="context-icon" />
          <h3>
            {state.language === "english" ? "GitHub Profil" : "GitHub Profile"}
          </h3>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/gianlucajahn/"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <LinkedIn className="context-icon linkedin" />
          <h3>
            {state.language === "english"
              ? "LinkedIn Profil"
              : "LinkedIn Profile"}
          </h3>
        </div>
      </a>

      <div
        className="context-menu-item"
        onClick={copyEmail}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <Mail className="context-icon mail" />
        <h3>
          {state.language === "english" ? "E-Mail kopieren" : "Copy E-Mail"}
        </h3>
      </div>

      <div
        className="context-menu-item"
        onClick={copyURL}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <Share className="context-icon share" />
        <h3>{state.language === "english" ? "Teilen" : "Share"}</h3>
      </div>
    </div>
  );
}

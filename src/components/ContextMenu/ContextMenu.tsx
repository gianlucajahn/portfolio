import React from 'react';
import './ContextMenu.scss';
import { ReactComponent as SourceCode } from "../../assets/images/sourcecode.svg";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as GitHub } from "../../assets/images/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as Share } from "../../assets/images/share.svg";

export default function ContextMenu () {
  return (
    <div className="context-menu" id="context-menu">
        <div className="context-menu-item">
            <SourceCode className="context-icon" />
            <h3>Source Code</h3>
        </div>

        <div className="context-menu-item">
            <GitHub className="context-icon" />
            <h3>GitHub Profile</h3>
        </div>

        <div className="context-menu-item">
            <LinkedIn className="context-icon linkedin" />
            <h3>LinkedIn Profile</h3>
        </div>

        <div className="context-menu-item">
            <Mail className="context-icon mail" />
            <h3>Copy E-Mail</h3>
        </div>

        <div className="context-menu-item">
            <Share className="context-icon share" />
            <h3>Share</h3>   
        </div>
    </div>
  );
}
import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub, faSalesforce, faYoutube,} from '@fortawesome/free-brands-svg-icons';

function Footer() {

 

  return (<>
   
      <div className="footer"  >
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/dennis-hickox-1b0a10227"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frozzel"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://trailblazer.me/id/dhickox1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSalesforce}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCeHPkw1Uk9QhMTu35Yf1FBQ/featured"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
       
       
      </ul>
      
      
      </div>

      <div className="btmfoot">
        Site not intended for commercial use, Demo for Educational Purposes

        </div>
    
     
      </> );
}

export default Footer;

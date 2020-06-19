import React from "react";
import "../styles/header.css";
import "../styles/index.css";
import { FaHeart } from "react-icons/fa";

const style = {
    textAlign: 'center',
    // backgroundColor: '#4285f4',
    backgroundColor: '#286c31',
    color: 'white',
    width: '100%',
    position: 'relative',
    'marginTop': '0em',
    'marginBottom': '0em'
  }

class Footer extends React.Component {



  render() {
    return (
          <footer>
              <p style={style}>Made with <FaHeart /> by Hack4Impact Cal Poly</p>
        </footer>
    );
  }
}
export default Footer;

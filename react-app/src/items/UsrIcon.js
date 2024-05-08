

import styles from "../components/Navigation-Bar/NavTop/NavbarTop.module.css";
import { PiUserCircleFill } from "react-icons/pi";


function UsrIcon() {
    return (
    <a className={styles.usrIcon} href="./Login-Page/login.js">
    <PiUserCircleFill size={90}/>
    </a>
    );
  }
  
  export default UsrIcon;
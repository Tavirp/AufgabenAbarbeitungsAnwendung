

import styles from "./Loading.module.css";
import logo from "../../items/Pictures/logo.svg"

function Loading() {
    return (
    <div className={styles.LoadingDiv} >
    <img src={logo} className={styles.Applogo} alt="logo" />
    <p>Loading...</p>
    </div>
    );
  }
  
  export default Loading;



import logo from '../../items/Pictures/logo.svg';
import styles from './MainContent.module.css';


function MainContent() {
    return (
            <div className={styles.mainContainer}>
                        <div className={styles.spacerContainer}>
                        </div>
                        <div className={styles.contentContainer}>
                        <img src={logo} className={styles.Applogo} alt="logo" />
                        <p>Edit <code>src/App.js</code> and save to reload.</p>
                        <a
                          className={styles.Applink}
                          href="../Pages/Login-Page/LoginPage.js"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn React
                        </a>
                        </div>
                        <div className={styles.bottomTitel}>
                          <h5>Finished ToDo's</h5>
                        </div>
                        <div className={styles.bottomContent}>
                        </div>
            </div>
    );
  }
  
  export default MainContent;
  
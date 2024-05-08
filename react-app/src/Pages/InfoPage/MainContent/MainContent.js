

import styles from './MainContent.module.css';
import Loading from '../../../components/Loadingding/Loading';
// import Checkbox from '../../components/Buttons/Checkbox/Checkbox';

function MainContent() {
    return (
            <div className={styles.mainContainer}>
                        <div className={styles.spacerContainer}>
                        </div>
                        <div className={styles.contentContainer}>
                        
                        <Loading />
                        </div>

            </div>
    );
  }
  
  export default MainContent;
  
import React, { useState } from 'react';
import styles from "../StdBtn.module.css";

function TxtBtn() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText('Hallo von der Info-Seite');
  };

  return (
        <div className={styles.myBtn} onClick={handleButtonClick}>
        <p><br /><br />{displayText}</p>
        </div>

  );
}

export default TxtBtn;



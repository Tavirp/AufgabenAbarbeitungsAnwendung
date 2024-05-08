
import { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import LoadingDiv from "./LoadingLogo";
import TxtBtn from "../Buttons/TextButton/TxtBtn";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect Hook nutzen, um Komponente nach 5 Sekunden einzublenden
  useEffect(() => {
    // Hier befindet sich der Code, der beim Laden der Komponente ausgeführt wird
    setTimeout(() => {
      // Dieser Code wir nach 5 Sekunden ausgeführt
      setIsLoading(false);
    }, 3000);
  }, []); // [] wird verwendet, wenn der Hook einmalig ausgeführt werden soll

  return (
    <div className={styles.mainContainer}>
      {isLoading ? <LoadingDiv /> : <TxtBtn text={"Login"} />}
    </div>
  );
}

export default Loading;
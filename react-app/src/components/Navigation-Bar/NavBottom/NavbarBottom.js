
import StandardBtn from "../../Buttons/StdBtn";
import styles from "./NavbarBottom.module.css";

function NavBarBottom() {
  return (
    <div className={styles.bottomContainer}>
      <StandardBtn text={"Nodefall-Button"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Info"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Contact"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Impressum"} />
      <div className={styles.spacer} />
    </div>
  );
}

export default NavBarBottom;
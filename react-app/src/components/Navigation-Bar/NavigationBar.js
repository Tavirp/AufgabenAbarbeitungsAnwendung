import styles from "./NavigationBar.module.css";
import NavBarTop from "./NavTop/NavbarTop";
import NavBarBottom from "./NavBottom/NavbarBottom";

function NavigationBar() {
  return (
    <div className={`${styles.navContainer} border-bottom-shadow`}>
      <NavBarTop />
      <NavBarBottom />
    </div>
  );
}

export default NavigationBar;
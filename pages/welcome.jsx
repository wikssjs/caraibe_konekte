import styles from "../styles/Welcome.module.css";
import logo from "../public/images/caraibe_konekte.png";
import Image from "next/image";

const WelcomePage = () => {
    return (
        <main className={styles.welcome}>
            <div className={styles.welcome_container}>
                <h1>Bienvenue sur CaraibeKonekte</h1>
                <Image src={logo} alt="logo" />
                <p>Connectez-vous pour continuer</p>

                <div className={styles.login_options}>
                    <button className={`${styles.login_btn} ${styles.google}`}>Connexion avec Google</button>
                    <button className={`${styles.login_btn} ${styles.icloud}`}>Connexion avec iCloud</button>
                    <button className={`${styles.login_btn} ${styles.email}`}>Connexion avec Email</button>
                </div>
            </div>
        </main>
    );
};

export default WelcomePage;

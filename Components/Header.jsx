import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../public/images/caraibe_konekte.png';
import Image from 'next/image';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image src={logo} alt="logo" />
                    </a>
                </div>
                <button className={styles.menu_toggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    Menu
                </button>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Profil</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Amis</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li>
                            <div className="avatar">
                                <div className=" w-14 mask mask-squircle">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import Link from "next/link";
import styles from '../app/page.module.css'; // Імпорт CSS модулів

const HeaderComponents = () => {
    return (
        <div className={styles.headerContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href={'/'} className={styles.navLink}>home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={'/users'} className={styles.navLink}>users</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={'/posts'} className={styles.navLink}>posts</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={'/comments'} className={styles.navLink}>comments</Link>
                </li>

            </ul>
        </div>
    );
};

export default HeaderComponents;
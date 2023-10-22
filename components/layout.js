import styles from './layout.module.css';

export const siteTitle="THE SITE";
export const name="My name"


export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
}

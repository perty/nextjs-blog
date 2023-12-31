import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

export const siteTitle="ArtComputer blog";
export const name="Per Lundholm"


export default function Layout({ children, home}) {
    return <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>XX</title>
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                        />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">← Till startsidan</Link>
            </div>
        )}
    </div>;
}

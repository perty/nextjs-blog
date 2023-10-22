import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header>
                <Image src="/images/profile.jpg" width="140" height="140" alt="picture of Per"
                       className={utilStyles.borderCircle}/>
                <div className={utilStyles.headingXl}>Per</div>
            </header>
            <section className={utilStyles.headingMd}>
                <p>Hej! Jag heter Per och jag är en programmerare.</p>
            </section>
            <section>
                <Link href="/posts/first-post">First post</Link>
            </section>
        </Layout>
    );
}

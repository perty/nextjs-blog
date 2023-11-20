import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts2';
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths: ['/posts2/askungen', '/posts2/askungen/askungen_felicia.png'],
        fallback: false,
    };
}

export default function Id({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    );
}
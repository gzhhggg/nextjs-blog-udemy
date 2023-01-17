import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/Link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from "../styles/utiles.module.css"
import { getPostsData } from '../lib/post'


// SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData(); //id,title,date,thumbnail
  console.log(allPostsData);
  return {
    props:{
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <section>
      <p className={utilStyle.headingMd}>
        これはテストですこれはテストですこれはテストですこれはテストです
      </p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2 >エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`}
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href={`/posts/${id}`} className={utilStyle.boldText}>
            {title}
          </Link>
          <br />
          <small className={utilStyle.lightText}>{date}</small>
        </article>
        ))}
      </div>
    </section>
  </Layout>
  );
}

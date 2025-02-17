import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Ticker from '../components/Ticker';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <Ticker/>
      <main className="w-full">

        <div className="garden-grid">
          {posts.map((post) => (
            <div
              key={post.filePath}
              className="garden-item"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="">
                  {post.data.date && (

                    <p className="garden-item__date">
                      <span className="symbol">🝁 </span>
                      {post.data.date}
                      <span className="symbol"> 🝁</span>
                    </p>

                  )}
                  <h2 className="garden-item__title">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="garden-item__description">
                      {post.data.description}
                    </p>
                  )}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

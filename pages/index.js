import Head from 'next/head';
import Layout from '../components/layout/Layout';

function Home() {
  return (
    <div>
      <Head>
        <title>DexFields</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Hello</div>
      </Layout>
    </div>
  );
}

export default Home;

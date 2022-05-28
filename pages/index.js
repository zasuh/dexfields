import Head from 'next/head';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Head>
        <title>DexFields</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer />
    </div>
  );
}

export default Home;

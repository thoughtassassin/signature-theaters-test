import Head from 'next/head'
import Header from '../components/Header'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Products from '../components/Products'
import Contact from '../components/Contact'
import '../stylesheets/bootstrap.css'
import '../stylesheets/styles.css'

const Index = () => (
  <div>
    <Head>
      <title>Signature Theaters</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Play"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <Service />
    <Experience />
    <Products />
    <Contact />
  </div>
);

export default Index;

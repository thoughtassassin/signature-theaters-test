import Head from 'next/head'
import Header from '../components/Header'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Products from '../components/Products'
import '../stylesheets/styles.scss'

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
    <section className="contact" id="contact" />
  </div>
);

export default Index;

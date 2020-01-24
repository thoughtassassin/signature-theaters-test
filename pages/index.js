import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/Header";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Products from "../components/Products";
import Contact from "../components/Contact";
import "../stylesheets/bootstrap.css";
import "../stylesheets/styles.css";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Signature Theaters</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="theme-color" content="#000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta
            name="description"
            content="Signature Theaters designs and installs custom home theater and home automation systems. Serving the Permian Basin since 2008."
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-134677065-1`}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-134677065-1');
          `
            }}
          />
          <script
            async
            src="https://www.google.com/recaptcha/api.js?render=6Lcdd4EUAAAAAHBWMAYgcS2KxkXt4_cc_1e6yIDa"
          />
          <script async data-cfasync="false" src="/static/chat.js" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Play"
          />
        </Head>
        <BackgroundVideo />
        <Header />
        <Service />
        <Projects />
        <Products />
        <Contact />
      </div>
    );
  }
}
export default Index;

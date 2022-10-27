import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#F8FFF4" />
          <link rel="apple-touch-icon" href="/favicon.ico" />

          <meta name="author" content="Pakam" />
          <meta
            name="description"
            content="Enabling people, planet, and profit."
          />
          <meta name="keywords" content="card, payment, bank, fintech" />
          <meta property="og:image" content="/favicon.ico" />
          <meta
            property="og:description"
            content="Enabling people, planet, and profit."
          />
          <meta property="og:title" content="Pakam" />

          <link href="/favicon.ico" rel="icon" type="image/png" />
          <link href="/favicon.ico" rel="apple-touch-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="http://cdn.bootcss.com/antd/2.9.3/antd.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="detect.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

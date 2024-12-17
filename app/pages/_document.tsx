import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add custom meta tags, link to stylesheets, or external scripts */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          />
          {/* Add custom scripts if needed */}
          <script src="https://example.com/custom-script.js" async></script>
        </Head>
        <body className="bg-gray-100">
          {/* Main content of the page */}
          <Main />
          {/* Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

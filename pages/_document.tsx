import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../utils/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://www.candidosales.me/" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Portfolio, side projects, the blog of the Candido Sales Gomes and among other things"
          />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Candido Sales Gomes Portfolio" />
          <meta
            property="og:site_name"
            content="Candido Sales Gomes Portfolio"
          />
          <meta
            property="og:description"
            content="Portfolio, side projects, the blog of the Candido Sales Gomes"
          />
          <meta property="og:url" content="https://www.candidosales.me/" />
          <meta
            property="og:image"
            content="https://www.candidosales.me/card-social-media-1200.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="730" />
          <meta name="twitter:creator" content="@candidosales" />
          <meta name="twitter:site" content="@candidosales" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://www.candidosales.me/card-social-media-1200.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/pwa/icon-512.png" />
          <link rel="apple-touch-icon" href="/pwa/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

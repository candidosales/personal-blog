import Head from 'next/head';
import Portfolio from '../components/portfolio';
import Topbar from '../components/topbar';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';
import { extras, portfolio, volunteer, posts } from '../data/portfolios';
import { Link, SimpleGrid, Tooltip } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className="cover">
      <div className="overlay">
        <div className="container">
          <Head>
            <title>Candido Sales Gomes Portfolio</title>
            <link rel="canonical" href="https://candidosales.me/" />
            <link rel="shortcut icon" href="/favicon.jpg" type="image/png" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
            />
            <meta
              name="description"
              content="Portfolio, side projects, the blog of the Candido Sales Gomes"
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
            <meta property="og:url" content="https://candidosales.me/" />
            <meta
              property="og:image"
              content="https://candidosales.me/card-social-media-1200.png"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="730" />
            <meta name="twitter:creator" content="@candidosales" />
            <meta name="twitter:site" content="@candidosales" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="shortcut icon" href="/pwa/icon-512.png" />
            <link rel="apple-touch-icon" href="/pwa/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>

          <main>
            <section className="about">
              <Topbar></Topbar>
              <p className="presentation">Hi, my name is</p>
              <h1>Cândido Sales.</h1>
              <h2>
                I build things for <br />
                the web and mobile.
              </h2>
              <p>
                I'm a{' '}
                <Link
                  color="blue.600"
                  href="https://en.wikipedia.org/wiki/Saskatoon"
                  isExternal
                >
                  Saskatoon-based 🇨🇦
                  <ExternalLinkIcon mx="2px" />
                </Link>{' '}
                software engineer who specializes in building (and occasionally
                designing) exceptional digital experiences. Currently, I'm an
                software engineer at{' '}
                <Link
                  color="blue.600"
                  href="https://www.vendasta.com/"
                  isExternal
                >
                  Vendasta
                  <ExternalLinkIcon mx="2px" />
                </Link>{' '}
                focused on building accessible, human-centered products.
              </p>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>Portfolio</h3>
                <p>Some open source projects that I maintain</p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={6}
              >
                {portfolio.map((p, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={p.imageUrl}
                    imageAlt={p.imageAlt}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    icons={p.icons}
                  />
                ))}
              </SimpleGrid>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>Extras</h3>
                <p>
                  Other projects that I develop in my spare time to practice new
                  resources and technologies
                </p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={6}
              >
                {extras.map((p, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={p.imageUrl}
                    imageAlt={p.imageAlt}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    icons={p.icons}
                  />
                ))}
              </SimpleGrid>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>Volunteer</h3>
                <p>
                  Some projects that I develop and help to maintain voluntarily
                  that it is in accordance with principles that I believe such
                  as education, culture, art, public health and sustainability
                </p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={6}
              >
                {volunteer.map((e, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={e.imageUrl}
                    imageAlt={e.imageAlt}
                    title={e.title}
                    description={e.description}
                    url={e.url}
                    icons={e.icons}
                  />
                ))}
              </SimpleGrid>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>Blog</h3>
                <p>Some posts ...</p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={6}
              >
                {posts.map((e, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={e.imageUrl}
                    imageAlt={e.imageAlt}
                    title={e.title}
                    description={e.description}
                    url={e.url}
                    icons={e.icons}
                  />
                ))}
              </SimpleGrid>
            </section>
          </main>

          <footer>
            <p>
              made by
              <Link color="blue.500" href="https://nextjs.org/" isExternal>
                nextjs
              </Link>
              and
              <Link color="blue.500" href="https://vercel.com/" isExternal>
                vercel
              </Link>
            </p>
            <p>
              <Link
                color="blue.500"
                href="https://twitter.com/candidosales"
                isExternal
              >
                @candidosales
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

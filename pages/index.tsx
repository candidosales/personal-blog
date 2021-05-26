import Head from 'next/head';
import Portfolio from '../components/portfolio';
import Topbar from '../components/topbar';
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';
import { extras, portfolio, volunteer } from '../data/portfolios';
import { Link, SimpleGrid, Tooltip } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className="cover">
      <div className="overlay">
        <div className="container">
          <Head>
            <title>Candido Sales</title>
            <link rel="icon" href="/favicon.ico" />
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
                  Saskatoon-based
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
                <Tooltip placement="right" label="Some open source projects that I maintain" aria-label="A tooltip">
                  <InfoIcon color="blue.600"/>
                </Tooltip>
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
                <Tooltip placement="right" label="Other projects that I develop in my spare time to practice new resources and technologies" aria-label="A tooltip">
                  <InfoIcon color="blue.600"/>
                </Tooltip>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={6}
              >
                {extras.map((e, index) => (
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
                <h3>Volunteer</h3>
                <Tooltip placement="right" label="Some projects that I develop and help to maintain voluntarily that it is in accordance with principles that I believe such as education, culture, art, public health and sustainability" aria-label="A tooltip">
                  <InfoIcon color="blue.600"/>
                </Tooltip>
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
          </main>

          <footer></footer>
        </div>
      </div>
    </div>
  );
}
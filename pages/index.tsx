import Head from 'next/head';
import Image from 'next/image';
import Portfolio from '../component/portfolio';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, SimpleGrid } from '@chakra-ui/react';
import { portfolio, extras, volunteer } from './data';
import Topbar from '../component/topbar';


export default function Home() {
  return (
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
          <h2>I build things for <br/>the web and mobile.</h2>
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
            <Link color="blue.600" href="https://www.vendasta.com/" isExternal>
              Vendasta
              <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            focused on building accessible, human-centered products.
          </p>
        </section>
        <section className="grid">
          <h3>Portfolio</h3>
          <SimpleGrid className="portfolios" columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
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
          <h3>Extras</h3>
          <SimpleGrid className="portfolios" columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
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
          <h3>Volunteer</h3>
          <SimpleGrid className="portfolios" columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
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
  );
}

import Portfolio from "../components/portfolio";
import Topbar from "../components/topbar";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {extras, portfolio, volunteer, posts} from "../data/portfolios";
import {Flex, Link, SimpleGrid} from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="cover">
      <div className="overlay">
        <Flex
          className="container-flex"
          direction="column"
          align="center"
          maxW={{xl: "1200px"}}
          m="0 auto"
        >
          <main>
            <section className="about">
              <Topbar></Topbar>
              <p className="presentation">Hi, my name is</p>
              <h1>Cândido Sales.</h1>
              <h2>
                I build things for <br />
                the web and mobile.
              </h2>
              <p className="about-description">
                I'm Brazilian 🇧🇷 and a{" "}
                <Link href="https://en.wikipedia.org/wiki/Saskatoon" isExternal>
                  Saskatoon-based 🇨🇦
                  <ExternalLinkIcon mx="2px" />
                </Link>{" "}
                software engineer who specializes in building (and occasionally
                designing) exceptional digital experiences. Currently, I'm a
                software engineer at{" "}
                <Link href="https://www.vendasta.com/" isExternal>
                  Vendasta
                  <ExternalLinkIcon mx="2px" />
                </Link>{" "}
                focused on building accessible, human-centered products.
              </p>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>🧳 Portfolio</h3>
                <p>Some open source projects that I've built and maintain</p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{sm: 1, md: 2, lg: 3}}
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
                <h3>✨ Extras</h3>
                <p>
                  Other projects that I develop in my spare time to practice new
                  resources and technologies
                </p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{sm: 1, md: 2, lg: 3}}
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
                <h3>🤝 Volunteer</h3>
                <p>
                  Some projects that I develop and help to maintain voluntarily
                  that it is in accordance with principles that I believe such
                  as education, culture, art, public health and sustainability
                </p>
              </div>
              <SimpleGrid
                className="portfolios"
                columns={{sm: 1, md: 2, lg: 3}}
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
                <h3>📰 Blog</h3>
                <p>Some posts ...</p>
              </div>
              <SimpleGrid
                className="portfolios blog"
                columns={{sm: 1, md: 2, lg: 3}}
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
        </Flex>
      </div>
    </div>
  );
}

import React, {ReactElement} from "react";
import Portfolio from "../components/portfolio";
import Topbar from "../components/topbar";
import {ArrowForwardIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {extras, portfolio, volunteer, posts} from "../data/portfolios";
import ModalContact from "../components/modal-contact";
import {chooseTranslate} from "../utils/translate";
import {Flex, Link, SimpleGrid, Box, useDisclosure} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Home = (): ReactElement => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const router = useRouter();
  const {locale} = router;
  const t = chooseTranslate(locale);

  const changeLanguage = (e) => {
    router.push(router.pathname, router.asPath, {locale: e.target.value});
  };

  return (
    <div className="cover">
      <div className="overlay">
        <Topbar changeLanguage={changeLanguage} locale={locale}></Topbar>

        <Flex
          className="container-flex"
          direction="column"
          align="center"
          maxW={{xl: "1200px"}}
          m="0 auto"
        >
          <main>
            <section className="about">
              <p className="presentation">
                <span className="presentation-hand">👋</span>{" "}
                {t.about.hiMyNameIs}
              </p>
              <h1>{t.about.name}</h1>
              <h2>
                {t.about.buildThings} <br />
                {t.about.webAndMobile}
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
                    techs={p.techs as [{icon: string; name: string}]}
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
                    techs={p.techs as [{icon: string; name: string}]}
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
                {volunteer.map((p, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={p.imageUrl}
                    imageAlt={p.imageAlt}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    techs={p.techs as [{icon: string; name: string}]}
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
                {posts.map((p, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={p.imageUrl}
                    imageAlt={p.imageAlt}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    techs={[{}] as [{icon: string; name: string}]}
                  />
                ))}
              </SimpleGrid>
            </section>
          </main>

          <footer>
            <h1 className="footer-text" onClick={onOpen}>
              {t.footer.letsWorkTogether}
              <ArrowForwardIcon />
            </h1>
            <Box justifyContent="space-between" display="flex">
              <p>
                {t.footer.madeBy}
                <Link color="blue.500" href="https://nextjs.org/" isExternal>
                  nextjs
                </Link>
                {t.and}
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
            </Box>
            <ModalContact isOpen={isOpen} onClose={onClose} />
          </footer>
        </Flex>
      </div>
    </div>
  );
};

export default Home;

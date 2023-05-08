"use client";

import ModalContact from "../components/modal-contact";
import Portfolio from "../components/portfolio";
import React, {ReactElement} from "react";
import Topbar from "../components/topbar";
import {ArrowForwardIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Box, Flex, Link, SimpleGrid, useDisclosure} from "@chakra-ui/react";
import {chooseTranslate} from "../utils/translate";
import {extras, portfolio, posts, volunteer, hobbies} from "../data/portfolios";
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import {RiMastodonFill, RiTwitterFill} from "react-icons/ri";

const Home = (): ReactElement => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams?.toString();

  console.log("pathname", pathname);
  console.log("searchParams", searchParams);
  console.log("locale", locale);

  const t = chooseTranslate(searchParams?.get("locale"));

  const changeLanguage = (e) => {
    router.push(`${pathname}/${e.target.value}`);
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
              <h1>{t.about.name}</h1>
              <h2>
                {t.about.buildThings} <br />
                {t.about.webAndMobile}
              </h2>
              <p className="about-description">
                {t.about.imBrazilian}{" "}
                <Link
                  href="https://www.cisco.com/c/en_ca/index.html/"
                  isExternal
                >
                  {t.about.company}
                  <ExternalLinkIcon mx="2px" />
                </Link>{" "}
                {t.about.focusedOnBuilding}
              </p>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>{t.portfolio.title}</h3>
                <p>{t.portfolio.description}</p>
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
                <h3>{t.extras.title}</h3>
                <p>{t.extras.description}</p>
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
                <h3>{t.volunteer.title}</h3>
                <p>{t.volunteer.description}</p>
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
                <h3>{t.blog.title}</h3>
                <p>{t.blog.description}</p>
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
                  />
                ))}
              </SimpleGrid>
            </section>
            <section className="grid">
              <div className="grid-header">
                <h3>🎨 {t.hobbies.title}</h3>
                <p>{t.hobbies.description}</p>
                <p>
                  {t.hobbies.buyStore}{" "}
                  <Link href="https://store.candidosales.me/" isExternal>
                    {t.hobbies.store}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                  .
                </p>
              </div>
              <SimpleGrid
                className="portfolios blog"
                columns={{sm: 1, md: 2, lg: 3}}
                gap={6}
              >
                {hobbies.map((p, index) => (
                  <Portfolio
                    key={index}
                    imageUrl={p.imageUrl}
                    imageAlt={p.imageAlt}
                    title={p.title}
                    description={p.description}
                    url={p.url}
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
            <Box justifyContent="center" display="flex" flexDirection="column">
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
                  <RiTwitterFill />
                  @candidosales
                </Link>
                <Link
                  color="blue.500"
                  rel="me"
                  href="https://mastodon.social/@candidosales"
                  isExternal
                >
                  <RiMastodonFill />
                  @candidosales
                </Link>
              </p>
            </Box>
            <ModalContact isOpen={isOpen} onClose={onClose} locale={locale} />
          </footer>
        </Flex>
      </div>
    </div>
  );
};

export default Home;

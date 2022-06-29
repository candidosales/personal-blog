import React, {ReactElement} from "react";
import {Box, LinkBox, LinkOverlay, Flex, Tooltip} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Image from "next/future/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Portfolio = ({
  imageUrl,
  imageAlt,
  title,
  description,
  url,
  techs,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  url: string;
  description: string;
  techs?: [{name: string; icon: string}];
}): ReactElement => (
  <LinkBox as="article">
    <LinkOverlay href={url} isExternal>
      <Flex className="portfolio" direction="column">
        <div className="portfolio-image">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={imageAlt}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              width={373}
              height={200}
              loading="lazy"
            />
          )}
        </div>
        <div className="article-wrap">
          <h4>{title}</h4>
          <p>{description}</p>
          <Box className="icons">
            {techs &&
              techs.length > 0 &&
              techs.map((tech, index) => (
                <Tooltip key={index} label={tech.name}>
                  <div className="icon-wrap">
                    <Image
                      key={index}
                      src={`/devicon/${tech.icon}.svg`}
                      width="30"
                      height="30"
                      title={`${tech.icon} icon`}
                      loading="lazy"
                    />
                  </div>
                </Tooltip>
              ))}
            <ExternalLinkIcon className="portfolio-link" mx="2px" />
          </Box>
        </div>
      </Flex>
    </LinkOverlay>
  </LinkBox>
);

export default Portfolio;

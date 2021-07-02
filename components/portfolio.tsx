import React from "react";
import {Box, LinkBox, LinkOverlay, Flex, Tooltip} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import Image from "next/image";

const Portfolio = ({
  imageUrl,
  imageAlt,
  title,
  description,
  url,
  techs,
}): any => (
  <LinkBox as="article">
    <LinkOverlay href={url} isExternal>
      <Flex className="portfolio" direction="column">
        <div className="portfolio-image">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={373}
            height={200}
            loading="lazy"
          />
        </div>
        <div className="article-wrap">
          <h4>{title}</h4>
          <p>{description}</p>
          <Box className="icons">
            {techs.length > 0 &&
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

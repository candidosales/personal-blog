import { Box, Image, LinkBox, LinkOverlay, Flex, Tooltip } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Portfolio({
  imageUrl,
  imageAlt,
  title,
  description,
  url,
  techs
}) {
  return (
    <LinkBox as="article">
      <LinkOverlay href={url} isExternal>
        <Flex className="portfolio" direction="column">
          <Box
            className="portfolio-image"
            height="200px"
            backgroundImage={`url('${imageUrl}')`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <div className="article-wrap">
            <h4>{title}</h4>
            <p>{description}</p>
            <Box className="icons">
              {techs.length > 0 &&
                techs.map((tech, index) => (
                  <Tooltip label={tech.name}>
                    <img
                      key={index}
                      src={`/devicon/${tech.icon}.svg`}
                      width="30"
                      height="30"
                      title={`${tech.icon} icon`}
                      loading="lazy"
                    />
                  </Tooltip>

                ))}
              <ExternalLinkIcon className="portfolio-link" mx="2px" />
            </Box>
          </div>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}

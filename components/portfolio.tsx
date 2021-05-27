import { Box, Image, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Portfolio({
  imageUrl,
  imageAlt,
  title,
  description,
  url,
  icons
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
              {icons.length > 0 &&
                icons.map((icon, index) => (
                  <img
                    key={index}
                    src={`/devicon/${icon}.svg`}
                    width="30"
                    height="30"
                    title={`${icon} icon`}
                    loading="lazy"
                  />
                ))}
              <ExternalLinkIcon className="portfolio-link" mx="2px" />
            </Box>
          </div>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}

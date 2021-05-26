import { Box, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
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
      <LinkBox as="article" borderWidth="1px" rounded="md" >
      <Box
        overflow="hidden"
        className="portfolio"
      >
        <Image src={imageUrl} alt={imageAlt} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
          <Box
            mt="1"
            mb="4"
            fontWeight="normal"
            fontSize="0.8rem"
            lineHeight="tight"
          >
            {description}
          </Box>
          <Box className="icons">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={`/devicon/${icon}.svg`}
                width="30"
                height="30"
              />
            ))}
            <LinkOverlay href={url} isExternal className="portfolio-link">
          <ExternalLinkIcon mx="2px" />
        </LinkOverlay>
          </Box>
        </Box>

      </Box>
    </LinkBox>
  );
}

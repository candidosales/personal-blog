import { Box, Badge, Image } from '@chakra-ui/react';

export default function Portfolio({ imageUrl, imageAlt, beds, baths, title, icons }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="portfolio">
            <Image src={imageUrl} alt={imageAlt} height={210} width={310} />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {beds} beds &bull; {baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {title}
              </Box>
              <Box className="icons">
              {
                  icons.map(icon => (
                    <img src={`/devicon/${icon}.svg`} width="30" height="30"/>
                  ))
                }
              </Box>
            </Box>
          </Box>
  )
}

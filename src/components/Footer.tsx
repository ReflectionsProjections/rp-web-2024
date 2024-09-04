import { Box, Image, Link, Text, HStack, useMediaQuery } from '@chakra-ui/react';

function Footer() {
  const [isSmall] = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      as="footer"
      width="100%"
      backgroundColor="#00456D"
      borderTop="solid 3px #003B5C"
      padding="1rem"
      position="relative"
      bottom="0"
    >
      <HStack spacing={4} width="100%" alignItems="center" justify="space-between" height={"min-content"}>
        <Image src="/rp_logo.svg" alt="Logo" height="auto" maxW="40px" padding="0.5rem" />
        <Text fontWeight="bold" color="white" fontSize={"1em"}>
          &copy; 2024 by {isSmall ? "R|P" : "Reflections | Projections"}
        </Text>

        <Text fontSize={"1em"}> Got questions? Email us at <Link href="mailto:contact@reflectionsprojections.org" color="white">contact@reflectionsprojections.org</Link> </Text>
        
      </HStack>
    </Box>
  );
}

export default Footer;

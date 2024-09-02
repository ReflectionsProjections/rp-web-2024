import { Box, VStack, Image, Link, Text, HStack } from '@chakra-ui/react';

function Footer() {
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
      <HStack spacing={4} width="100%" alignItems="center" justify="space-between">
        <Image src="/rp_logo.svg" alt="Logo" height="auto" maxW="58px" padding="0.5rem" />
        <Text fontWeight="bold" color="white">
          &copy; 2024 by Reflections | Projections
        </Text>

        <VStack spacing={2} align="center">
          <HStack spacing={4}>
            <Link href="mailto:contact@reflectionsprojections.org" color="white">Contact</Link>
            <Link href="https://reflectionsprojections.org/privacy" color="white">Privacy Policy</Link>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Footer;

import { Box, HStack } from '@chakra-ui/react';

const FormProgressBar = ({ fieldCount, totalSteps }) => {
  return (
    <HStack spacing={4}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <Box
          key={index}
          w={4}
          h={4}
          border="2px solid"
          borderColor="yellow.400"
          bg={index + 1 === fieldCount ? 'yellow.400' : 'transparent'}
        />
      ))}
    </HStack>
  );
};

export default FormProgressBar;

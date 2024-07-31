import { Box, HStack } from '@chakra-ui/react';

const FormProgressBar = ({ fieldCount, totalSteps }) => {
  return (
    <HStack spacing={4}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <Box
          key={index}
          w={4}
          h={4}
          bg={index + 1 === fieldCount ? 'yellow.500' : 'yellow.200'}
        />
      ))}
    </HStack>
  );
};

export default FormProgressBar;

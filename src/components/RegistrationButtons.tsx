import { HStack, Box, Button, Spacer, Flex } from '@chakra-ui/react';
import FormProgressBar from './FormProgressBar';

const RegistrationButtons = ({
  fieldCount,
  totalSteps,
  handleFieldCountDecrease,
  handleSaveField,
  handleFieldCountIncrease,
  handleSubmitForm,
}) => {
  return (
    <HStack w="100%" spacing={4} align="center">
      <Box w="20%">
        {fieldCount < 4 ? (
          <Button
            type="button"
            variant="registration_white"
            mt={4}
            w="100%"
            onClick={handleSaveField}
          >
            Save
          </Button>
        ) : (
          <Box /> // Empty Box to maintain the layout
        )}
      </Box>

      <Spacer />

      <Flex justifyContent="center" flexGrow={1}>
        <FormProgressBar fieldCount={fieldCount} totalSteps={totalSteps} />
      </Flex>

      <Spacer />

      <Box w="20%" display="flex" justifyContent="flex-end">
        {fieldCount > 1 && (
          <Button
            type="button"
            variant="registration_white"
            mt={4}
            w="10%"
            onClick={handleFieldCountDecrease}
          >
            &lt;
          </Button>
        )}

        {fieldCount < 4 && (
          <Button
            type="button"
            variant="registration_white"
            mt={4}
            w="10%"
            ml={fieldCount > 1 ? 2 : 0} // Add margin if both buttons are present
            onClick={handleFieldCountIncrease}
          >
            &gt;
          </Button>
        )}

        {fieldCount === 4 && (
          <Button
            type="submit"
            variant="registration_pink"
            mt={4}
            w="90%"
            ml={2}
            onClick={handleSubmitForm}
          >
            Submit
          </Button>
        )}
      </Box>
    </HStack>
  );
};

export default RegistrationButtons;

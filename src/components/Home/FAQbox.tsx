import { Box, Button, useDisclosure, Text, VStack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionText = motion(Text);

const CollapsibleSection = ({ question, answer }: { question: any; answer: any }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <MotionBox
      width="100%"
      mb={4}
      borderRadius="md" 
      boxShadow="md"
      position="relative"
      transition="background-color 0.6s ease, border-radius 0.6s ease"
    >
      <MotionBox
        width="100%"
        p={{ base: 4, md: 6 }}
        bg="#1e8b8f"
        borderRadius={isOpen ? '8px 8px 0 0' : 'md'} 
        color="white"
        fontFamily="Kafum"
        fontWeight="semibold"
        textTransform="none"
        border="none"
        style={{
          cursor: 'pointer',
        }}
        transition="height 0.6s ease, border-radius 0.6s ease"
      >
        <Button
          onClick={onToggle}
          width="full"
          bg="transparent"
          color="inherit"
          borderRadius={isOpen ? '8px 8px 0 0' : 'md'}
          p={4}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
          border="none"
          textAlign="left"
          whiteSpace="normal"
          fontSize={{ base: 'md', md: 'lg' }}
        >
          <Text color="inherit" fontFamily="Kafum" fontWeight="semibold" textTransform="none">
            {question}
          </Text>
        </Button>
      </MotionBox>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              overflow: 'hidden',
              width: '100%',
              backgroundColor: '#289696',
              borderRadius: '0 0 8px 8px',
              marginTop: 0,
            }}
          >
            <MotionVStack
              align="start"
              p={{ base: 4, md: 6 }}
              borderRadius="0 0 8px 8px" 
              boxShadow="md"
              style={{ overflow: 'hidden', width: '100%' }}
            >
              <MotionText
                color="white"
                fontFamily="Kafum"
                fontWeight="semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                textAlign="center"
                width="100%"
              >
                {answer}
              </MotionText>
            </MotionVStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default CollapsibleSection;

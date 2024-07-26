import { Text, Center, Box, Button, HStack, SimpleGrid, Flex, Image, VStack} from "@chakra-ui/react";
import { pictureBox, poloroidBox, jeapordyBox, sponsorBox, bigBox, smallBox} from "../customTheme";
import '@fontsource/kufam';
export function LandingPage() {
	return (
	  <>
		{/* <Box
    >
		  <Text variant="baseStyle">
        <Center h='200px' >
          <Text  font-family =  'Kufam'>reflections | projections </Text>
        </Center>
        <Text>September 18 - 22, 2024</Text>
        <VStack>
          <Button variant={"solid"}>LOGIN</Button>
          <Button variant={"solid"}>REGISTER</Button>
        </VStack>
		  </Text>
		</Box> */}

<Flex direction="column" align="center" justify="center" height="100vh">
            <Center>
                <Text fontFamily="Kufam" fontSize="2xl" textAlign="center">
                    reflections | projections
                </Text>
            </Center>
            <Center>
                <Text fontSize="xl" textAlign="center">
                    September 18 - 22, 2024
                </Text>
            </Center>
            <VStack spacing={4} mt={4}>
                <Button variant="solid">LOGIN</Button>
                <Button variant="solid">REGISTER</Button>
            </VStack>
        </Flex>
        {}

    <SimpleGrid
      h='800px'
      w='900px'
      columns={2}
      spacing={4}
      margin='auto'
      marginTop='20vh'
      bg='black'
  >
    <Box bg='gray' height='100%' />
    <Box bg='gray' height='100%' />
    <Box bg='gray' height='100%' />
    <Box bg='gray' height='100%' />
  </SimpleGrid>

    {/* insert poloroid pictures here */}
    <HStack> 
      <Box style = {poloroidBox}> 
      </Box> 
      <Box style = {poloroidBox}> 
      </Box> 
      <Box style = {poloroidBox}> 
      </Box> 
      <Box style = {poloroidBox}> 
      </Box> 
      <Box style = {poloroidBox}> 
      </Box> 
    </HStack> 

    <Center height="100vh"> 
      <HStack> 
        <Box style = {pictureBox} transform = "rotate(-20deg)"> 
          <Image/>{/*insert picture here*/}
        </Box> 
        <Box style = {pictureBox} transform = "rotate(20deg)" marginLeft = "-50px"> 
        < Image/>{/*insert picture here*/}
        </Box> 
        <Box style = {pictureBox} transform = "rotate(-10deg)" marginLeft = "-50px" > 
          <Image/>{/*insert picture here*/}
        </Box> 
      </HStack>
     
    </Center>
    <Center height = "50vh"> 
      <Button variant={"solid"}>FAQ</Button>
    </Center> 

    {/* TV/jeapordy */}

    <Box  style={bigBox} >
      <Box style = {smallBox}> 
        <SimpleGrid columns={3} spacingX='10px' spacingY='20px'>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
          <Box style = {jeapordyBox}></Box>
        </SimpleGrid>
      </Box> 
    </Box>

    {/* Sponsors */}

    <Box  style={bigBox} >
      <Box style = {smallBox}> 
        <SimpleGrid columns={2} spacingX='10px' spacingY='20px'>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
          <Box style = {sponsorBox}></Box>
        </SimpleGrid>
      </Box> 
    </Box>

	</>
	);
  }
export default LandingPage;


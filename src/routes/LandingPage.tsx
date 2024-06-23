import { Text, Center, Box, Button, HStack, SimpleGrid, Image, Grid, GridItem, baseTheme, VStack} from "@chakra-ui/react";
import { pictureBox, poloroidBox, jeapordyBox, sponsorBox, bigBox, smallBox} from "../customTheme";
export function LandingPage() {
	return (
	  <>
		<Box bg="">
		  <Text variant="baseStyle">
        <Center h='300px'>
          <Text>Reflections | Projections </Text>
        </Center>
        <Text>September 18 - 22</Text>
        <VStack>
          <Button variant={"solid"}>LOGIN</Button>
          <Button variant={"solid"}>REGISTER</Button>
        </VStack>
		  </Text>
		</Box>
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


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

    {/* 2 by 2 grid for images */}
    <Grid
        h='800px'
        w='900px'
        templateRows='repeat(2, 1fr)'   
        templateColumns='repeat(2, 1fr)'
        gap={4}
        margin='auto'  
        marginTop='20vh'
        bg = 'black'
        >
        
        <GridItem bg = 'gray'/>
        <GridItem bg = 'gray'/>
        <GridItem bg = 'gray'/>
        <GridItem bg = 'gray'/>
    </Grid>

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

    <Box  style={{ ...bigBox, overflowY: "auto" }} >
            <Box style={smallBox}>
                <HStack spacing="20px">
                    <Box style={jeapordyBox}>
                      
                    </Box>
                    <Box style={jeapordyBox}>
                       
                    </Box>
                    <Box style={jeapordyBox}>
                       
                    </Box>
                </HStack>
                <HStack spacing="20px">
                    <Box style={jeapordyBox}>
                      
                    </Box>
                    <Box style={jeapordyBox}>
                       
                    </Box>
                    <Box style={jeapordyBox}>
                       
                    </Box>
                </HStack>
            </Box>
    </Box>

    <Box  style={{ ...bigBox, overflowY: "auto" }} marginTop = "20px">

    </Box>
	</>
	);
  }
export default LandingPage;

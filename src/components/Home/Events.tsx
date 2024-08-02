import { Text, Center, Box, Button, HStack, SimpleGrid, Flex, Image, VStack} from "@chakra-ui/react";
import { pictureBox, poloroidBox, jeapordyBox, sponsorBox, bigBox, smallBox} from "../../customTheme";
import '@fontsource/kufam';
import PageTitle from "./PageTitle";

export function Events() {
	return ( 
		<Box 
			width="100%"
			height="270vh"
			justifyContent="center"
			backgroundColor='#004970'
		>
			<PageTitle title="EVENTS" />

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

		</Box>
	);
}
export default Events;


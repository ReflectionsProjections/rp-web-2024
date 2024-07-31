import { Text, Center, Box, Button, HStack, SimpleGrid, Flex, Image, VStack} from "@chakra-ui/react";
import { pictureBox, poloroidBox, jeapordyBox, sponsorBox, bigBox, smallBox} from "../../customTheme";
import '@fontsource/kufam';

export function FAQ() {
	return ( 
		<Box 
			top={0}
			left={0}
			width="100%"
			height="200vh"
		>

			<Center height = "50vh"> 
				<Button variant={"solid"}>FAQ</Button>
			</Center> 

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

		</Box>
	);
}
export default FAQ;


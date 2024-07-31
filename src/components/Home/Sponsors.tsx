import { Text, Center, Box, Button, HStack, SimpleGrid, Flex, Image, VStack} from "@chakra-ui/react";
import { pictureBox, poloroidBox, jeapordyBox, sponsorBox, bigBox, smallBox} from "../../customTheme";
import '@fontsource/kufam';

export function Sponsors() {
	return ( 
		<Box 
			top={0}
			left={0}
			width="100%"
			height="100vh"
		>

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

		</Box>
	);
}
export default Sponsors;


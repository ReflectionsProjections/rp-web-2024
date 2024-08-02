import { Box, SimpleGrid } from "@chakra-ui/react";
import { sponsorBox, bigBox, smallBox} from "../../customTheme";
import '@fontsource/kufam';
import PageTitle from "./PageTitle";

export function Sponsors() {
	return ( 
		<Box 
			width="100%"
			height="100vh"
			justifyContent="center"
			backgroundColor='#004970'
		>
			<PageTitle title="SPONSORS" />

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


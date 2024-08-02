import { Box, SimpleGrid } from "@chakra-ui/react";
import { jeapordyBox, bigBox, smallBox} from "../../customTheme";
import '@fontsource/kufam/900-italic.css';

import PageTitle from "./PageTitle";

export default function FAQ() {
    
	return ( 
		<Box 
			width="100%"
			height="200vh"
			justifyContent="center"
			backgroundColor='#004970'
		>
			<PageTitle title="FAQ" />
            

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

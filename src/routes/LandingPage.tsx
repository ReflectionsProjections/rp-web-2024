import { Text, Button, Box} from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { Image } from '@chakra-ui/react'
import { logoStyle } from "../customTheme";


interface LandingPageProps {
    text: string;
}

export function LandingPage ({text}: LandingPageProps)
{
	return(
		<>   
        {}
        <NavBar /> 
        <Text variant="baseStyle">Welcome to Reflections | Projections 2024 ! </Text>
        <Box boxSize= '80px' style = {logoStyle}>
            <Image src= "rplogo.png" alt='R|P LOGO alt' />
        </Box>
		</>
	);
}

export default LandingPage;
